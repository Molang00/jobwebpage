import React from 'react';
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import { set, lensProp } from 'ramda';
import {
  PopupSearchQuery,
  encode,
  PopupSaveFormData,
  PopupSchema,
  jsonToFormData,
  isImage
} from '@postech-ses/job-core';

import Dropdown from '../../components/Dropdown';
import SearchBar, { SearchBarType } from '../../components/SearchBar';
import Modal from '../../components/Modal';
import { authenticatedAxios } from '../../utils/auth.util';
import { RootState } from '../../store/store';

import commonStyles from '../../styles/common.module.scss';

enum RegisterPopupPageSearchType {
  TITLE = '제목'
}

const defaultPopupSaveForm = {
  title: '',
  altText: '',
  startAt: new Date().toISOString(),
  endAt: new Date().toISOString()
};

const getDropdownItem = (value: boolean) => (value ? { name: '신규 등록', value } : { name: '등록 팝업 수정', value });

const PopupPage: React.FC = () => {
  const fileInput = React.useRef<HTMLInputElement>(null);

  const [isRegisterNewPopup, setIsRegisterNewPopup] = React.useState(true);
  const [searchWord, setSearchWord] = React.useState('');
  const [searchResult, setSearchResult] = React.useState<PopupSchema[]>([]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedPopupId, setSelectedPopupId] = React.useState<number>(-1);
  const [popupSaveForm, setPopupSaveForm] = React.useState<PopupSaveFormData>(defaultPopupSaveForm);
  const [fileName, setFileName] = React.useState('');

  const isLogin = useSelector((state: RootState) => state.auth.isLogin);

  React.useEffect(() => {
    setPopupSaveForm(defaultPopupSaveForm);
  }, [isRegisterNewPopup]);

  const search = async () => {
    const query: PopupSearchQuery = {
      title: searchWord
    };

    await authenticatedAxios(`popup/search?${encode(query)}`, {
      method: 'GET'
    })
      .then(res => {
        setSearchResult(res.data);
        setIsModalOpen(true);
      })
      .catch(() => alert('검색에 문제가 있습니다.'));
  };

  const select = (popup: PopupSchema) => {
    const { id, title, altText, startAt, endAt } = popup;
    setSelectedPopupId(id);
    setPopupSaveForm({ title, altText: altText ? altText : '', startAt, endAt });
    setIsModalOpen(false);
  };

  const onInputChange = (key: string) => (event: React.FormEvent<HTMLInputElement>) =>
    setPopupSaveForm(set(lensProp(key), event.currentTarget.value, popupSaveForm));

  const save = () => {
    let file: File;
    if (!(fileInput.current && fileInput.current.files)) {
      return alert('파일을 선택해 주세요.');
    } else {
      file = fileInput.current.files[0];
    }

    if (isImage(file) !== true) {
      return alert('이미지만 업로드 해 주세요.');
    }

    const form = jsonToFormData(popupSaveForm);
    form.append('file', file);

    const path = isRegisterNewPopup ? 'popup/save' : `popup/save/${selectedPopupId}`;

    authenticatedAxios(path, {
      method: 'POST',
      data: form,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(() => alert('저장하였습니다.'))
      .catch(() => alert('실패하였습니다.'));
  };

  const deletePopup = () => {
    const path = `popup/delete/${selectedPopupId}`;
    authenticatedAxios(path, {
      method: 'POST'
    })
      .then(() => {
        setPopupSaveForm(defaultPopupSaveForm);
        alert('삭제하였습니다.');
      })
      .catch(() => alert('실패하였습니다.'));
  };

  const renderForm = () => (
    <React.Fragment>
      <input
        name="file"
        type="file"
        ref={fileInput}
        onChange={event => {
          const fileName = event.currentTarget.files ? event.currentTarget.files[0].name : '';
          setFileName(fileName);
        }}
        style={{ display: 'none' }}
      />
      <table>
        <colgroup>
          <col style={{ width: '20%' }} />
          <col style={{ width: '30%' }} />
          <col style={{ width: '20%' }} />
          <col style={{ width: '30%' }} />
        </colgroup>
        <tbody>
          {isRegisterNewPopup || popupSaveForm.title ? (
            <React.Fragment>
              <tr>
                <th>팝업 제목</th>
                <td colSpan={3}>
                  <input type="text" value={popupSaveForm.title} onChange={onInputChange('title')} />
                </td>
              </tr>
              <tr>
                <th>팝업 이미지</th>
                <td>
                  <a onClick={() => (fileInput.current !== null ? fileInput.current.click() : null)}>파일 선택</a>
                </td>
                <td>{fileName}</td>
              </tr>
              <tr className={commonStyles.HideOnMobile}>
                <th>시작일시</th>
                <td>
                  <input type="date" value={popupSaveForm.startAt} onChange={onInputChange('startAt')} />
                </td>
                <th>종료일시</th>
                <td>
                  <input type="date" value={popupSaveForm.endAt} onChange={onInputChange('endAt')} />
                </td>
              </tr>
              <tr className={commonStyles.HideOnPc}>
                <th>시작일시</th>
                <td>
                  <input type="date" value={popupSaveForm.startAt} onChange={onInputChange('startAt')} />
                </td>
              </tr>
              <tr className={commonStyles.HideOnPc}>
                <th>종료일시</th>
                <td>
                  <input type="date" value={popupSaveForm.endAt} onChange={onInputChange('endAt')} />
                </td>
              </tr>
              <tr>
                <th>비고</th>
                <td colSpan={3}>
                  <input type="text" value={popupSaveForm.altText} onChange={onInputChange('altText')} />
                </td>
              </tr>
            </React.Fragment>
          ) : (
            <tr>
              <td colSpan={4}>수정 대상을 검색하여 주세요.</td>
            </tr>
          )}
        </tbody>
      </table>
    </React.Fragment>
  );

  const renderModal = () => (
    <Modal isModalOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
      <div className={commonStyles.TableBox}>
        <h2>검색 결과</h2>
        <table>
          <tbody>
            <tr>
              <th>타이틀</th>
              <th className={commonStyles.HideOnMobile}>비고</th>
              <th>게시 시작일시</th>
              <th>게시 종료일시</th>
              <th />
            </tr>
            {searchResult && searchResult.length > 0 ? (
              searchResult.map((popup, index) => (
                <tr key={index}>
                  <td>{popup.title}</td>
                  <td className={commonStyles.HideOnMobile}>{popup.altText}</td>
                  <td>{popup.startAt}</td>
                  <td>{popup.endAt}</td>
                  <td>
                    <a onClick={() => select(popup)}>선택</a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5}>검색 결과가 없습니다.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Modal>
  );

  return isLogin ? (
    <React.Fragment>
      <div className="p-col-12 p-lg-12">
        <Dropdown
          currentItem={getDropdownItem(isRegisterNewPopup)}
          items={[getDropdownItem(true), getDropdownItem(false)]}
          setter={setIsRegisterNewPopup}
        />
        {isRegisterNewPopup ? null : (
          <div className={commonStyles.TextBox}>
            <h2>팝업 검색</h2>
            <SearchBar
              currentSearchType={RegisterPopupPageSearchType.TITLE}
              searchTypes={[RegisterPopupPageSearchType.TITLE]}
              searchBarTypePerSearchType={{
                [RegisterPopupPageSearchType.TITLE]: SearchBarType.input
              }}
              currentSearchWord={searchWord}
              setCurrentSearchWord={setSearchWord}
              search={search}
            />
          </div>
        )}
        <br />
        <br />
        <div className={commonStyles.TableBox}>
          <h2>팝업 정보 입력</h2>
          {renderForm()}
        </div>
        <br />
        <br />
        <div className={commonStyles.ButtonBox}>
          {isRegisterNewPopup || popupSaveForm.title ? (
            <React.Fragment>
              <a onClick={save}>저장</a>
              {isRegisterNewPopup ? <React.Fragment /> : <a onClick={deletePopup}>삭제</a>}
            </React.Fragment>
          ) : null}
        </div>
      </div>
      {renderModal()}
    </React.Fragment>
  ) : (
    <Redirect to={'/login'} />
  );
};

export default PopupPage;
