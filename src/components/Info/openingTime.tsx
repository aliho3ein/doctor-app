import styles from "./../../style/info.module.scss";

const OpeningTime = () => {
  return (
    <div className={styles.openingTime} data-aos="fade-right">
      <h3>Unsere Sprechzeiten sind</h3>
      <ul>
        <li>
          <h4> Montag : </h4> <span> 9 - 12 und 16 - 18 Uhr </span>
        </li>
        <li>
          <h4> Dienstag : </h4> <span> 9 - 12 und 16 - 18 Uhr</span>
        </li>
        <li>
          <h4> Mittwoch : </h4> <span> 9 - 12 Uhr</span>
        </li>
        <li>
          <h4> Donnerstag : </h4> <span> 9 - 12 und 16 - 18 Uhr </span>
        </li>
        <li>
          <h4> Freitag : </h4> <span> 9 - 12 Uhr</span>
        </li>
      </ul>
      <p>
        Bei uns werden keine Termine vergeben. Besuchen Sie uns einfach
        innerhalb der Sprechzeiten.
      </p>
    </div>
  );
};

export default OpeningTime;
