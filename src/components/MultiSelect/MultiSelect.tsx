import { HTMLAttributes } from 'react';
import Select from 'react-select';

import styles from './MultiSelect.module.css';

interface MultiSelectProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  options?: Array<{value: string, label: string}>;
}

export default function MultiSelect({ label, options, ...props }: MultiSelectProps) {
  return (<div {...props}>
    <label className={styles.label}>{label}</label>
    <Select className={styles.select} instanceId={"select"} isMulti name="select" options={options}  />
  </div>);
}
