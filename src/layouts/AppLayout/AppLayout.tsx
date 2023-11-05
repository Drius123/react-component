import { Outlet } from 'react-router-dom';

import styles from './AppLayout.module.scss';

export default function AppLayout() {
  return (
    <div className={styles['app-layout']}>
      <div className={`app-layout__container ${styles.app}`}>
        <Outlet />
      </div>
    </div>
  );
}
