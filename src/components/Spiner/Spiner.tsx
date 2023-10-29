import { Component, ReactNode } from 'react';
import styles from './Spiner.module.scss';

class Spinner extends Component {
  render(): ReactNode {
    return (
      <div className={styles['spin-wrapper']}>
        <div className={styles.spinner} />
      </div>
    );
  }
}

export default Spinner;
