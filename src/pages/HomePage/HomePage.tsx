import { useEffect, useState } from 'react';
import Presentation from '../../components/PresentationSection/Presentation';
import SearchInput from '../../components/SearchInput/SearchInput';
import styles from './HomePage.module.scss';
import { getPeopleByPage } from '../../services/getSomething';
import Spinner from '../../components/Spiner/Spiner';
import { Results } from '../../types';

export default function HomePage() {
  const [result, setResult] = useState<Results>([]);
  const [resultPeople, setResultPeople] = useState<Results>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getPeopleByPage(1).then(
      (res: Results) => (setResultPeople(res), setResult(res), setLoading(false))
    );
  }, []);
  return (
    <div className={styles.content}>
      <div className={styles['header-content']}>
        <SearchInput changeLoading={setLoading} changeState={setResult} />
        <button className={styles.btn} onClick={() => setResult(resultPeople)}>
          Show All Star Wars Hero
        </button>
        {loading ? <Spinner /> : <Presentation items={result} />}
      </div>
    </div>
  );
}
