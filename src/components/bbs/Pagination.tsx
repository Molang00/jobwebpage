import React, { FunctionComponent } from 'react';
import { map, range, min, addIndex } from 'ramda';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faAngleDoubleLeft, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/components/bbs/Pagination.module.scss';

interface PaginationProps {
  currentPageNumber: number;
  lastPageNumber: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: FunctionComponent<PaginationProps> = ({ currentPageNumber, lastPageNumber, setCurrentPage }) => {
  const basePageGroup = 0;
  const lastPageGroup = Math.floor(lastPageNumber / 5);
  const pageGroup = Math.floor(currentPageNumber / 5);
  const from = pageGroup * 5;
  const to = min(from + 5, lastPageNumber + 1);

  return (
    <div className={styles.Pagination}>
      <ul>
        {basePageGroup < pageGroup ? (
          <React.Fragment>
            <li>
              <a onClick={() => setCurrentPage(0)}>
                <FontAwesomeIcon icon={faAngleDoubleLeft} />
              </a>
            </li>
            <li>
              <a onClick={() => setCurrentPage((pageGroup - 1) * 5 + 4)}>
                <FontAwesomeIcon icon={faAngleLeft} />
              </a>
            </li>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <li />
          </React.Fragment>
        )}
        {addIndex<number, JSX.Element>(map)(
          (page: number, index: number) => (
            <li key={index}>
              <a className={page === currentPageNumber ? styles.active : ''} onClick={() => setCurrentPage(page)}>
                {page + 1}
              </a>
            </li>
          ),
          range(from, to)
        )}
        {pageGroup < lastPageGroup ? (
          <React.Fragment>
            <li>
              <a onClick={() => setCurrentPage((pageGroup + 1) * 5)}>
                <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </li>
            <li>
              <a onClick={() => setCurrentPage(lastPageNumber)}>
                <FontAwesomeIcon icon={faAngleDoubleRight} />
              </a>
            </li>
          </React.Fragment>
        ) : (
          <React.Fragment />
        )}
      </ul>
    </div>
  );
};

export default Pagination;
