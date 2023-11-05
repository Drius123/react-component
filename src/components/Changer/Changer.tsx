import { useState } from 'react';
import { ChangerProps } from '../../types';
import styles from './Changer.module.scss';

export default function Changer({ setItems }: ChangerProps) {
  const [value, setValue] = useState(10);
  return (
    <form
      className={styles.changer}
      action=""
      onSubmit={(e) => {
        e.preventDefault(), setItems(value);
      }}
    >
      <h1 className={styles.text}>Type number of element per page</h1>
      <input
        className={styles.input}
        type="number"
        max={10}
        onChange={(e) => setValue(Number(e.currentTarget.value))}
      />
      <button className={styles.btn} type="submit">
        Change elem per page
      </button>
    </form>
  );
}
