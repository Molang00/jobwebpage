import React from 'react';
import { JobBoardSearchType } from '@postech-ses/ses-core';
import styles from '../../styles/components/bbs/SearchBox.module.scss';

interface Props {
  searchType: JobBoardSearchType;
  setSearchType: React.Dispatch<React.SetStateAction<JobBoardSearchType>>;
  searchWord: string;
  setSearchWord: React.Dispatch<React.SetStateAction<string>>;
  search: () => void;
}

const SearchBar: React.FC<Props> = ({ searchType, setSearchType, searchWord, setSearchWord, search }) => {
  const [isSearchTypeDropdownOpen, setIsSearchTypeDropdownOpen] = React.useState(false);

  return (
    <div className={styles.SearchBox}>
      <span
        className={isSearchTypeDropdownOpen ? styles.open : ''}
        onMouseLeave={() => setIsSearchTypeDropdownOpen(false)}
      >
        <div onClick={() => setIsSearchTypeDropdownOpen(!isSearchTypeDropdownOpen)}>
          <a>
            {searchType == JobBoardSearchType.TITLE_AND_CONTENT
              ? '제목 + 내용'
              : searchType == JobBoardSearchType.TITLE
              ? '제목'
              : '내용'}
          </a>
        </div>
        <div className={styles.SearchBoxItem}>
          <a onClick={() => setSearchType(JobBoardSearchType.TITLE_AND_CONTENT)}>제목 + 내용</a>
          <a onClick={() => setSearchType(JobBoardSearchType.TITLE)}>제목</a>
          <a onClick={() => setSearchType(JobBoardSearchType.CONTENT)}>내용</a>
        </div>
      </span>
      <span>
        <div>
          <input
            type="text"
            value={searchWord}
            onChange={event => setSearchWord(event.target.value)}
            onKeyPress={event => (event.key === 'Enter' ? search() : null)}
          />
        </div>
      </span>
      <span>
        <div className={styles.SearchButton} onClick={search}>
          <a>검색</a>
        </div>
      </span>
    </div>
  );
};

export default SearchBar;
