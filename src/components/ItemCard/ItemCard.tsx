import CardProps from '../../types';
import styles from './ItemCard.module.scss';

export default function Card({ name, height, mass }: CardProps) {
  return (
    <div className={styles.card}>
      <h1 className={styles.name}>Name: {name}</h1>
      <span className={styles.height}>Height: {height}</span>
      <span className={styles.mass}>Mass: {mass}</span>
    </div>
  );
}
