import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHeart } from "@fortawesome/free-solid-svg-icons";

import { AppConfig } from "../../data/config";
import { getHeartbeat } from "../../data/store/heartbeatSlice";
import { useAppSelector, useAppDispatch } from "../../data/store/hooks";
import styles from "./Header.module.css";

export default function Header({
  heart = false,
  navRoute,
}: {
  heart?: boolean;
  navRoute?: string;
}) {
  const heartbeat = useAppSelector(getHeartbeat);
  const dispatch = useAppDispatch();

  return (
    <header className={styles.header}>
      {navRoute ? (
        <div
          className={styles.navButton}
          onClick={() => window.location.assign(navRoute)}
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            className={styles.icon}
          ></FontAwesomeIcon>
        </div>
      ) : (
        <></>
      )}
      <h2>{AppConfig.title}</h2>
      {heart ? (
        <div
          className={`${styles.heart}${
            heartbeat ? ` ${styles.heartbeat}` : ""
          }`}
        >
          <FontAwesomeIcon
            icon={faHeart}
            className={styles.icon}
          ></FontAwesomeIcon>
        </div>
      ) : (
        <></>
      )}
    </header>
  );
}
