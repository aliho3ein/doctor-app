import styles from "./../../style/info.module.scss";
import Address from "./address";
import GoogleMap from "./googleMap";
import OpeningTime from "./openingTime";

const InfoSlice = () => {
  return (
    <section className={styles.infoSection}>
      <OpeningTime />
      <Address />
      <GoogleMap />
    </section>
  );
};

export default InfoSlice;
