import { useNavigate } from 'react-router-dom';
import { SelectorProps } from '../../types';
import styles from './Selector.module.scss';
import routeNames from '../../routing/routs';
export default function Selector({ pageNumber }: SelectorProps) {
  const navigate = useNavigate();
  return (
    <div className={styles.selector}>
      <button
        type="button"
        className={styles.btn}
        onClick={() => navigate(`${routeNames.HOME}${routeNames.PAGE}/${pageNumber - 1}`)}
      >
        prev
      </button>
      <span className={styles.counter}>{pageNumber}</span>
      <button
        type="button"
        className={styles.btn}
        onClick={() => navigate(`${routeNames.HOME}${routeNames.PAGE}/${pageNumber + 1}`)}
      >
        next
      </button>
    </div>
  );
}
