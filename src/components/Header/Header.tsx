import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faHeart } from '@fortawesome/free-solid-svg-icons';

import { AppConfig } from '../../data/config';
import styles from './Header.module.css';

export default function Header({ navRoute }: {
  navRoute?: string;
}) {
  return (<header className={styles.header}>
    {navRoute ? <div className={styles.navButton} onClick={() => window.location.assign(navRoute)}>
      <FontAwesomeIcon icon={faArrowLeft} className={styles.icon}></FontAwesomeIcon>
    </div> : <></>}
    <h2>{AppConfig.title}</h2>
  </header>);
}