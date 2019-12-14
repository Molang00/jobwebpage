import React from 'react';
import { range, set, lensIndex } from 'ramda';
import Main from '../../components/layout/Main';
import {
  Maybe,
  JobBoardPostForm,
  JobBoardPostFileDto,
  JobBoardPostSchema,
  JobBoardPostType
} from '@postech-ses/ses-core';
import axios from 'axios';
import { useHistory, useLocation } from 'react-router';
import { REACT_APP_API_URL } from '../../config';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import ConditionalComponent from '../../components/bbs/ConditionalComponent';
import { authenticatedAxios } from '../../utils/auth.util';
import { bbsUnescape, bbsEscape } from '../../utils/bbs.util';
import styles from '../../styles/pages/bbs/write.module.scss';

const WritePage = () => {
  const fileInputs = [
    React.useRef<HTMLInputElement>(null),
    React.useRef<HTMLInputElement>(null),
    React.useRef<HTMLInputElement>(null),
    React.useRef<HTMLInputElement>(null),
    React.useRef<HTMLInputElement>(null)
  ];

  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [post, setPost] = React.useState<Maybe<JobBoardPostForm>>();
  const [postId, setPostId] = React.useState<number>(0);
  const [mounted, setMounted] = React.useState<boolean>(false);
  const [title, setTitle] = React.useState<string>('');
  const [contents, setContents] = React.useState<string>('');
  const [fileList, setFileList] = React.useState<JobBoardPostFileDto[]>([]);

  const { userInfo } = useSelector((state: RootState) => state.auth);
  const history = useHistory();
  const location = useLocation();

  React.useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    }
    const isUpdate = location.pathname.split('/')[5] === 'edit';
    if (isUpdate) {
      const id = location.pathname.split('/')[4];
      axios
        .get(`${REACT_APP_API_URL}/job-board-post/${id}`)
        .then(res => res.data as JobBoardPostSchema)
        .then(post => {
          if (!userInfo || post.creatorId.toLowerCase() !== userInfo.id.toLowerCase()) {
            alert('권한이 없습니다.');
            history.goBack();
            return;
          }
          const {
            id,
            postType,

            title,
            contents,
            readCount,

            creatorId,
            createdAt
          } = post;
          setPostId(id);
          setPost(
            Maybe.fromNullable({
              postType,

              title,
              contents: bbsUnescape(contents),
              readCount,

              creatorId,
              createdAt,
              files: []
            })
          );
          setTitle(post.title);
          setContents(bbsUnescape(contents));
          setFileList(
            post.files
              ? post.files.map(file => ({
                  isUpdated: false,
                  id: file.id,
                  postId: file.postId,
                  index: file.index,
                  originName: file.originName,
                  savedName: file.savedName
                }))
              : []
          );
        })
        .catch(() => {
          alert('데이터를 읽어오는데 실패하였습니다.');
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
    setMounted(true);
  }, []);

  const save = () => {
    const isUpdate = location.pathname.split('/')[5] === 'edit';
    const data = new FormData();

    fileList.forEach((file, index) => {
      if (file && file.file && file.isUpdated) {
        data.append(`${index}`, file.file);
      }
    });
    const postType = JobBoardPostType.fromPathString(location.pathname.split('/')[2]);

    data.append('postType', postType);
    data.append('title', title);
    data.append('contents', bbsEscape(contents));
    data.append('files', JSON.stringify(fileList));
    if (isUpdate) {
      data.append(
        'id',
        Maybe.fromNullable(postId)
          .map(id => id.toString())
          .get()
      );
    }

    const url = isUpdate ? `job-board-post/save/${postId}` : `job-board-post/save`;

    authenticatedAxios(url, {
      method: 'POST',
      data
    })
      .then(() => {
        alert('저장했습니다!');
        // history.goBack();
      })
      .catch(error => {
        if (error.response && error.response.status === 403) {
          history.push('/login');
        } else {
          alert('실패하였습니다.');
        }
      });
  };

  const onFileUpload = (index: number) => async (event: React.FormEvent<HTMLInputElement>) => {
    if (event.currentTarget) {
      const file = event.currentTarget.files ? event.currentTarget.files[0] : null;
      if (!file) {
        return;
      }
      new Promise<string>(resolve => {
        const reader = new FileReader();
        reader.onload = event => {
          resolve((event.target as any).result);
        };
        reader.readAsDataURL(file);
      }).then((dstname: string) => {
        console.log(file.name);
        const postFile: JobBoardPostFileDto = {
          isUpdated: true,
          index,
          postId,
          originName: file.name,
          savedName: '',
          file
        };
        const newList =
          fileList.length - 1 >= index ? set(lensIndex(index), postFile, fileList) : fileList.concat(postFile);

        setFileList(newList);
      });
    }
  };

  const renderQuill = () => {
    if (mounted) {
      const ReactQuill = require('react-quill');
      return <ReactQuill styles={{ height: 500 }} value={contents} onChange={(value: string) => setContents(value)} />;
    } else {
      return <div>로딩중입니다.</div>;
    }
  };

  return (
    <Main title={'게시판'}>
      <React.Fragment>
        <div className="p-col-12">
          <ConditionalComponent
            condition={isLoading}
            whenTrue={<div />}
            whenFalse={
              <React.Fragment>
                <div className={styles.Write}>
                  {range(0, 5).map(index => (
                    <input
                      key={index}
                      type="file"
                      name="file"
                      ref={fileInputs[index]}
                      onChange={onFileUpload(index)}
                      style={{ display: 'none' }}
                    />
                  ))}
                  <table className={styles.LeftAlign}>
                    <colgroup>
                      <col style={{ width: '10%' }} />
                      <col style={{ width: '15%' }} />
                      <col style={{ width: '75%' }} />
                    </colgroup>
                    <tbody>
                      <tr>
                        <th>제목</th>
                        <td colSpan={2}>
                          <input type="text" value={title} onChange={event => setTitle(event.target.value)} />
                        </td>
                      </tr>

                      <tr>
                        <th>내용</th>
                        <td colSpan={2}>
                          <style>{'.ql-editor{min-height: 500px; max-height: 500px;}'}</style>
                          <link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css" />
                          {renderQuill()}
                        </td>
                      </tr>
                      {(fileList.length < 5
                        ? fileList.concat({
                            index: fileList.length,
                            postId,
                            isUpdated: false,
                            originName: '',
                            savedName: ''
                          })
                        : fileList
                      ).map((file, index) => (
                        <React.Fragment key={index}>
                          <tr>
                            <th>파일 {index + 1}</th>
                            <td>
                              <a
                                onClick={() => {
                                  if (fileInputs[index].current) {
                                    (fileInputs[index].current as HTMLInputElement).click();
                                  }
                                }}
                              >
                                파일 선택
                              </a>
                            </td>

                            <ConditionalComponent
                              condition={file.originName !== (undefined || null || '')}
                              whenTrue={<td>{file.originName}</td>}
                              whenFalse={
                                <td>
                                  <span>파일을 업로드해주세요.</span>
                                </td>
                              }
                            />
                          </tr>
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className={styles.WriteFooter}>
                  <a
                    onClick={() => {
                      history.goBack();
                    }}
                  >
                    돌아가기
                  </a>
                  <a onClick={save}>저장</a>
                </div>
              </React.Fragment>
            }
          />
        </div>
      </React.Fragment>
    </Main>
  );
};

export default WritePage;
