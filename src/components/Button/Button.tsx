import { HTMLAttributes } from 'react';

import styles from './Button.module.css';

export default function Button({children, ...props}: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={styles.button} {...props}>{children}</button>
  );
}
