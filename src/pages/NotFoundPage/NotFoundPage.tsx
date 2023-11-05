import styles from './NotFoundPage.module.scss';

import error404 from '../../assets/error-404.png';

export default function NotFoundPage() {
  return (
    <div className={styles.container}>
      <img src={error404} alt="error-404-img" />
    </div>
  );
}
