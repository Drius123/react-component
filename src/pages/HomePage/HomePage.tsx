import { useState } from 'react';
import Presentation from '../../components/PresentationSection/Presentation';
import SearchInput from '../../components/SearchInput/SearchInput';
import styles from './HomePage.module.scss';
import { getPeople } from '../../services/getSomething';

export default function HomePage() {
  const [result, setResult] = useState([]);
  getPeople().then((res) => setResult(res));
  return (
    <div className={styles.content}>
      <div className={styles['header-content']}>
        <SearchInput />
        <Presentation items={result} />
      </div>
    </div>
  );
}
