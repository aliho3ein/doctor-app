import { sliderType } from "../../model/sliderType";
import styles from "../../style/slider.module.scss";

const ImageCard = ({ item }: { item: sliderType }) => {
  return (
    <div
      key={Date.now()}
      className={styles.slidImage}
      style={{ ["--img" as string]: `url(${item.url})` }}
    >
      <div className={styles.infoCard}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default ImageCard;
