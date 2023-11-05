import { PresentationProps } from '../../types';
import Card from '../ItemCard/ItemCard';
import styles from './Presentation.module.scss';

export default function Presentation({ items }: PresentationProps) {
  return (
    <div className={styles.presentation}>
      <div className="presentation__container">
        <div className={styles['presentation-content']}>
          {items.map((item, index) => {
            return <Card name={item.name} height={item.height} mass={item.mass} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
