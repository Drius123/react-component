import { Component, ReactNode } from 'react';
import styles from './Presentation.module.scss';
import { PresentationProps } from '../../types';

class Presentation extends Component<PresentationProps> {
  render(): ReactNode {
    return (
      <div className={styles.presentation}>
        <div className="presentation__container">
          <h1 className={styles.name}>
            Name: {this.props.name ? this.props.name : 'Nothing found('}
          </h1>
          <p className={styles.height}>
            Height: {this.props.height ? this.props.height : 'Nothing found('}
          </p>
          <p className={styles.mass}>
            Mass: {this.props.mass ? this.props.mass : 'Nothing found('}
          </p>
        </div>
      </div>
    );
  }
}

export default Presentation;
