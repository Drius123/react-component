import styles from './Presentation.module.scss';

export default function Presentation() {
  return (
    <div className={styles.presentation}>
      <div className="presentation__container">
        <h1 className={styles.name}>Name</h1>
      </div>
    </div>
  );
}
