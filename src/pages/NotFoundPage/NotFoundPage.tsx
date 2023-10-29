import styles from './NotFoundPage.module.scss';

import error404 from '../../assets/error-404.png';
import { Component, ReactNode } from 'react';

class NotFoundPage extends Component {
  render(): ReactNode {
    return (
      <div className={styles.container}>
        <img src={error404} alt="error-404-img" />
      </div>
    );
  }
}

export default NotFoundPage;
