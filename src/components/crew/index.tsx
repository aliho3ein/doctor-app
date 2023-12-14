import { crewType } from "../../model/crewType";
import styles from "../../style/crew.module.scss";
import ImageCard from "./imageCard";

const DATA: crewType[] = [
  { img: "/src/assets/04.png", name: "Dr. Schmidt", position: "", info: "" },
  { img: "/src/assets/06.png", name: "Dr. Sigmeier", position: "", info: "" },
  { img: "/src/assets/05.png", name: "Dr. Fischer", position: "", info: "" },
  { img: "/src/assets/07.png", name: "Dr. Stodt", position: "", info: "" },
  { img: "/src/assets/01.png", name: "Dr. Müller", position: "", info: "" },
];

const CrewSection = () => {
  return (
    <section className={styles.crewSection} id="team">
      <h2>Unsere Team</h2>
      <div className={styles.crewImages}>
        {DATA.map((item: crewType, i) => (
          <ImageCard key={i} data={item} />
        ))}
      </div>
    </section>
  );
};

export default CrewSection;
