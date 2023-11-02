import { useState } from 'react';
import search from '../../assets/search-icon.svg';
import { SearchInputProps } from '../../types';
import styles from './SearchInput.module.scss';
import { getItem } from '../../services/getSomething';

export default function SearchInput({ changeLoading, changeState }: SearchInputProps) {
  const [value, setValue] = useState('');
  return (
    <div>
      <h1 className={styles.title}>Start search your Star Wars Hero!</h1>
      <form
        className={styles['search-bar']}
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          changeLoading(true);
          getItem(value).then((res) => (changeState(res), changeLoading(false)));
        }}
      >
        <button className={styles['search-btn']} type="submit">
          <img src={search} alt="search-icon" />
        </button>
        <input
          className={styles.input}
          type="search"
          placeholder="Поиск"
          onChange={(e) => setValue(e.currentTarget.value)}
        />
      </form>
    </div>
  );
}
