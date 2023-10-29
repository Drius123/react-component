import { Outlet } from 'react-router-dom';

import styles from './AppLayout.module.scss';
import { Component, ReactNode } from 'react';

class AppLayout extends Component {
  render(): ReactNode {
    return (
      <div className={styles['app-layout']}>
        <div className={`app-layout__container ${styles.app}`}>
          <Outlet />
        </div>
      </div>
    );
  }
}

export default AppLayout;
