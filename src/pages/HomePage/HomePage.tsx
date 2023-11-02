import SearchInput from '../../components/SearchInput/SearchInput';
import styles from './HomePage.module.scss';

export default function HomePage() {
  return (
    <div className={styles.content}>
      <div className={styles['header-content']}>
        <SearchInput />
      </div>
    </div>
  );
}
