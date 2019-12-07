import React from 'react';

import styles from '../../styles/components/SearchBar.module.scss';

export enum SearchBarType {
  input = 0,
  dropdown = 1
}

interface SearchBarTypeItem {
  id: string;
  name: string;
}

interface Props<P extends string> {
  currentSearchType: P;
  searchTypes: P[];
  setCurrentSearchType?: React.Dispatch<React.SetStateAction<P>>;
  searchBarTypePerSearchType: Record<P, SearchBarType>;
  searchItemsPerSearchType?: Record<P, Array<SearchBarTypeItem>>;
  defaultDropdownSearchItem?: SearchBarTypeItem;
  currentSearchWord: string;
  setCurrentSearchWord: React.Dispatch<React.SetStateAction<string>>;
  search: () => Promise<any>;
}

const SearchBar = <P extends string>(props: Props<P>) => {
  const [isSearchTypeDropdownOpen, setIsSearchTypeDropdownOpen] = React.useState(false);
  const [isSearchItemDropdownOpen, setIsSearchItemDropdownOpen] = React.useState(false);

  const getSearchItemDropdownText = () => {
    const item = props.searchItemsPerSearchType
      ? props.searchItemsPerSearchType[props.currentSearchType].find(item => item.id === props.currentSearchWord)
      : undefined;
    if (item) {
      return item.name;
    } else if (props.defaultDropdownSearchItem) {
      props.setCurrentSearchWord(props.defaultDropdownSearchItem.id);
      return props.defaultDropdownSearchItem.name;
    } else {
      return '';
    }
  };

  return (
    <div className={styles.SearchBar}>
      <span
        className={isSearchTypeDropdownOpen ? styles.open : ''}
        onMouseLeave={() => setIsSearchTypeDropdownOpen(false)}
      >
        <div
          onClick={() => {
            if (props.searchTypes.length > 1) setIsSearchTypeDropdownOpen(!isSearchTypeDropdownOpen);
          }}
        >
          <a>{props.currentSearchType}</a>
        </div>
        <div className={styles.SearchBarItem}>
          {props.searchTypes.map((type, index) => (
            <a
              key={index}
              onClick={() => {
                if (props.setCurrentSearchType) props.setCurrentSearchType(type);
                setIsSearchTypeDropdownOpen(false);
              }}
            >
              {type}
            </a>
          ))}
        </div>
      </span>

      {props.searchBarTypePerSearchType[props.currentSearchType] === SearchBarType.input ? (
        <span>
          <div>
            <input
              type="text"
              value={props.currentSearchWord}
              onChange={event => props.setCurrentSearchWord(event.currentTarget.value)}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  props.search();
                }
              }}
            />
          </div>
        </span>
      ) : (
        <span
          className={isSearchItemDropdownOpen ? styles.open : ''}
          onMouseLeave={() => setIsSearchItemDropdownOpen(false)}
        >
          <div onClick={() => setIsSearchItemDropdownOpen(!isSearchItemDropdownOpen)}>
            <a>{getSearchItemDropdownText()}</a>
          </div>
          <div className={styles.SearchBarItem}>
            {props.searchItemsPerSearchType
              ? props.searchItemsPerSearchType[props.currentSearchType].map((item, index) => (
                  <a
                    key={index}
                    onClick={() => {
                      props.setCurrentSearchWord(item.id);
                      setIsSearchItemDropdownOpen(false);
                    }}
                  >
                    {item.name}
                  </a>
                ))
              : null}
          </div>
        </span>
      )}

      <span>
        <div className={styles.SearchButton} onClick={props.search}>
          <a>검색</a>
        </div>
      </span>
    </div>
  );
};

export default SearchBar;
