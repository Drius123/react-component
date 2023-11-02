import search from '../../assets/search-icon.svg';
import styles from './SearchInput.module.scss';

export default function SearchInput() {
  return (
    <div>
      <h1 className={styles.title}>Start search your Star Wars Hero!</h1>
      <form
        className={styles['search-bar']}
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <button className={styles['search-btn']} type="submit">
          <img src={search} alt="search-icon" />
        </button>
        <input className={styles.input} type="search" placeholder="Поиск" />
      </form>
    </div>
  );
}
