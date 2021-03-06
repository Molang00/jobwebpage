import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { BoardPostSchema, BoardPostFileSchema } from '@postech-ses/job-core';
import { RootState } from '../../store/store';
import { REACT_APP_API_URL, REACT_APP_FILE_DOWNLOAD_URL } from '../../config';
import Main from '../../components/layout/Main';
import ConditionalComponent from '../../components/bbs/ConditionalComponent';
import { authenticatedAxios } from '../../utils/auth.util';
import { bbsUnescape, dateFormat } from '../../utils/bbs.util';
import styles from '../../styles/pages/bbs/view.module.scss';

const ViewPage = () => {
  const history = useHistory();
  const location = useLocation();

  const { userInfo } = useSelector((state: RootState) => state.auth);
  const [post, setPost] = React.useState<BoardPostSchema>();

  React.useEffect(() => {
    getView();
  }, []);

  const getView = () => {
    const id = location.pathname.split('/')[3];
    axios
      .get(`${REACT_APP_API_URL}/board-post/${id}`)
      .then(res => {
        setPost(res.data);
      })
      .catch(() => {
        alert('데이터를 읽어오는데 실패하였습니다.');
      });
  };

  const deleteView = () => {
    const id = location.pathname.split('/')[4];
    authenticatedAxios(`${REACT_APP_API_URL}/board-post/delete/${id}`, { method: 'POST' })
      .then(() => {
        alert('삭제되었습니다.');
      })
      .catch(() => {
        alert('데이터를 삭제하는데 실패하였습니다.');
      })
      .finally(() => {
        history.push(`/bbs/list/1`);
      });
  };

  const createMarkup = (htmlString: string) => {
    return { __html: bbsUnescape(htmlString) };
  };

  const renderContents = (username: string, regdate: string, contents: string) => (
    <React.Fragment>
      <tr className={styles.LeftAlign}>
        <th>작성자</th>
        <td>{username}</td>
        <th>작성일</th>
        <td>{dateFormat(regdate)}</td>
      </tr>
      <tr className={styles.LeftAlign}>
        <th>내용</th>
        <td colSpan={3}>
          <div dangerouslySetInnerHTML={createMarkup(contents)} />
        </td>
      </tr>
    </React.Fragment>
  );

  const renderPost = () =>
    post ? (
      <React.Fragment>
        <h2>게시글</h2>
        <table>
          <colgroup>
            <col style={{ width: '10%' }} />
            <col style={{ width: '40%' }} />
            <col style={{ width: '10%' }} />
            <col style={{ width: '40%' }} />
          </colgroup>
          <tbody>
            <tr>
              <th>제목</th>
              <td colSpan={3}>{post.title}</td>
            </tr>
            {renderContents(post.creatorId, post.createdAt, post.contents)}

            {post && post.files && post.files.length > 0 ? renderFileDownloadButtons(post.files) : null}
          </tbody>
        </table>
      </React.Fragment>
    ) : (
      <React.Fragment />
    );

  const renderFileDownloadButtons = (files: BoardPostFileSchema[]) => {
    const fileNumber = files.length;

    return files.map((file, index) => (
      <tr key={index}>
        <ConditionalComponent condition={index === 0} whenTrue={<th rowSpan={fileNumber}>첨부파일</th>} />
        <td colSpan={3}>
          <a
            className={styles.DownloadButton}
            href={`${REACT_APP_FILE_DOWNLOAD_URL}/public/job-bbs/${file.savedName}`}
            download={file.originName}
          >
            {file.originName}
          </a>
        </td>
      </tr>
    ));
  };

  const renderViewFooter = () => (
    <div className={styles.ViewFooter}>
      <a
        onClick={() => {
          history.goBack();
        }}
      >
        돌아가기
      </a>
      {userInfo && post && userInfo.id.toLowerCase() === post.creatorId.toLowerCase() ? (
        <React.Fragment>
          <a
            onClick={() => {
              history.push(`/bbs/write/edit/${post.id}`);
            }}
          >
            수정
          </a>
          <a onClick={deleteView}>삭제</a>
        </React.Fragment>
      ) : null}
    </div>
  );

  return (
    <Main title={'게시판'}>
      <React.Fragment>
        <div className="p-col-12">
          <div className={styles.View}>{renderPost()}</div>
          {renderViewFooter()}
        </div>
      </React.Fragment>
    </Main>
  );
};

export default ViewPage;
