import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { addIndex, map } from 'ramda';
import { encode } from 'querystring';
import { BoardSearchType, BoardPostSchema, BoardSearchQuery } from '@postech-ses/job-core';
import { RootState } from '../../store/store';
import { REACT_APP_API_URL } from '../../config';
import SearchBar from '../../components/bbs/SearchBar';
import Pagination from '../../components/bbs/Pagination';
import Main from '../../components/layout/Main';
import { dateFormat } from '../../utils/bbs.util';
import style from '../../styles/pages/bbs/list.module.scss';

const searchTypeToPathString = (type: BoardSearchType) => {
  if (type === BoardSearchType.TITLE_AND_CONTENT) {
    return 'title-and-content';
  } else if (type === BoardSearchType.TITLE) {
    return 'title';
  } else if (type === BoardSearchType.CONTENT) {
    return 'content';
  } else {
    return 'title-and-content';
  }
};

const ListPage = () => {
  const PAGE_SIZE = 10;
  const [searchType, setSearchType] = React.useState<BoardSearchType>(BoardSearchType.TITLE_AND_CONTENT);
  const [searchWord, setSearchWord] = React.useState<string>('');
  const [currentPage, setCurrentPage] = React.useState<BoardPostSchema[]>([]);
  const [currentPageNumber, setCurrentPageNumber] = React.useState<number>(0);
  const [lastPageNumber, setLastPageNumber] = React.useState<number>(0);

  const { userInfo } = useSelector((state: RootState) => state.auth);
  const history = useHistory();
  const location = useLocation();

  React.useEffect(() => {
    search();
  }, [location]);

  const search = async () => {
    const pathPageNumber = parseInt(location.pathname.split('/')[3], 10) - 1;
    const pathSearchType = location.pathname.split('/')[4]
      ? BoardSearchType.fromPathString(location.pathname.split('/')[4])
      : BoardSearchType.TITLE_AND_CONTENT;
    const pathSearchWord = location.pathname.split('/')[5] ? location.pathname.split('/')[5] : '';
    setCurrentPageNumber(pathPageNumber);
    setSearchType(pathSearchType);
    setSearchWord(pathSearchWord);
    const query: BoardSearchQuery = {
      page: pathPageNumber,
      size: PAGE_SIZE,
      searchType: pathSearchType,
      searchWord: pathSearchWord
    };
    window.scrollTo(0, 0);
    await axios
      .get(`${REACT_APP_API_URL}/board-post/search?${encode(query)}`)
      .then(res => {
        const { count } = res.data;
        setLastPageNumber(count === 0 ? 0 : Math.floor((count - 1) / PAGE_SIZE));
        setCurrentPage(res.data.posts);
      })
      .catch(() => {
        alert('데이터를 읽어오는데 실패하였습니다.');
      });
  };

  const pushRouter = (page: number) => {
    history.push(`/bbs/list/${page + 1}/${searchTypeToPathString(searchType)}/${searchWord}`);
  };

  const renderTableRow = (page: BoardPostSchema[]) => (
    mappingFunction: (bulletin: BoardPostSchema, index: number) => JSX.Element
  ) => addIndex<BoardPostSchema, JSX.Element>(map)(mappingFunction)(page);

  const renderPcTableRow = (post: BoardPostSchema, index: number) => (
    <React.Fragment key={index}>
      <tr
        onClick={() => {
          history.push(`/bbs/view/${post.id}`);
        }}
      >
        <td>{post.id}</td>
        <td>{post.title}</td>
        <td>{post.creator.name}</td>
        <td>{dateFormat(post.createdAt)}</td>
        <td>{post.readCount}</td>
      </tr>
    </React.Fragment>
  );

  const renderMobileTableRow = (post: BoardPostSchema, index: number) => (
    <React.Fragment key={index}>
      <li
        onClick={() => {
          history.push(`/bbs/view/${post.id}`);
        }}
      >
        <div>
          <a>{post.title}</a>
        </div>
        <div>
          <a>{post.readCount}</a>
          <a>{dateFormat(post.createdAt)}</a>
          <a>{post.creatorId}</a>
        </div>
      </li>
    </React.Fragment>
  );

  return (
    <Main title={'게시판'}>
      <div className="p-col-12">
        <SearchBar
          searchType={searchType}
          searchWord={searchWord}
          setSearchType={setSearchType}
          setSearchWord={setSearchWord}
          search={() => pushRouter(0)}
        />
        {userInfo ? (
          <div className={style.ListHeader}>
            <a
              className={style.Write}
              onClick={() => {
                if (!userInfo) {
                  history.push('/login');
                } else {
                  history.push(`/bbs/write/new`);
                }
              }}
            >
              글쓰기
            </a>
          </div>
        ) : null}
        <div className={style.List}>
          <table className={style.PcTable}>
            <colgroup>
              <col style={{ width: '10%' }} />
              <col style={{ width: '45%' }} />
              <col style={{ width: '10%' }} />
              <col style={{ width: '10%' }} />
              <col style={{ width: '15%' }} />
              <col style={{ width: '10%' }} />
            </colgroup>
            <tbody>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
                <th>조회</th>
              </tr>
              {renderTableRow(currentPage)(renderPcTableRow)}
            </tbody>
          </table>
          <div className={style.MobileTable}>
            <ul>{renderTableRow(currentPage)(renderMobileTableRow)}</ul>
          </div>
        </div>
        <Pagination currentPageNumber={currentPageNumber} lastPageNumber={lastPageNumber} setCurrentPage={pushRouter} />
      </div>
    </Main>
  );
};

export default ListPage;
