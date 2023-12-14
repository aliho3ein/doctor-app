import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./../style/downArrow.module.scss";

const DownArrow = () => {
  return (
    <section className={styles.arrowSection}>
      <FontAwesomeIcon
        className={styles.icon}
        fontSize={60}
        icon={faChevronDown}
      />
    </section>
  );
};

export default DownArrow;
