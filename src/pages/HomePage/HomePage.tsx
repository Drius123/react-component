import { useEffect, useState } from 'react';
import Presentation from '../../components/PresentationSection/Presentation';
import SearchInput from '../../components/SearchInput/SearchInput';
import styles from './HomePage.module.scss';
import { getPeopleByPage } from '../../services/getSomething';
import Spinner from '../../components/Spiner/Spiner';
import { Results } from '../../types';
import { useParams } from 'react-router-dom';
import Selector from '../../components/Selector/Selector';

export default function HomePage() {
  const { pageNumber } = useParams();
  const [result, setResult] = useState<Results>([]);
  const [resultPeople, setResultPeople] = useState<Results>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getPeopleByPage(Number(pageNumber)).then(
      (res: Results) => (setResultPeople(res), setResult(res), setLoading(false))
    );
  }, [pageNumber]);
  return (
    <div className={styles.content}>
      <div className={styles['header-content']}>
        <SearchInput changeLoading={setLoading} changeState={setResult} />
        <Selector pageNumber={Number(pageNumber)} />
        <button className={styles.btn} onClick={() => setResult(resultPeople)}>
          Show All Star Wars Hero
        </button>
        {loading ? <Spinner /> : <Presentation items={result} />}
      </div>
    </div>
  );
}
