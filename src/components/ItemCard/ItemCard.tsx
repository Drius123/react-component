import CardProps from '../../types';
import styles from './ItemCard.module.scss';

export default function Card({ name, height, mass }: CardProps) {
  return (
    <div className={styles.card}>
      <h1 className={styles.name}>{name}</h1>
      <span>{height}</span>
      <span>{mass}</span>
    </div>
  );
}
