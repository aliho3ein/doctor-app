import styles from "../../style/slider.module.scss";
import { useState, useEffect } from "react";
import { sliderType } from "../../model/sliderType";
import ImageCard from "./imageCard";

const img: sliderType[] = [
  {
    url: "https://praxis-hartmann-landsberg.de/wp-content/uploads/2022/06/header-bg-leistungen.jpg",
    title: "Leiden Sie an Nahrungsmittelunverträglichkeiten?",
    description:
      "bei denen der Name den Substring agn ist enthält. Beachten Sie, dass die Suche nicht case-sensitive ist, dh sie wird nach agn ist unabhängig von Groß- und Kleinschreibung suchen.",
  },
  {
    url: "https://ayucareclinic.com/static/web/images/doctorbg.png",
    title: "Akuttermine innerhalb von 2-3 Tagen möglich.",
    description:
      "Dieser SQL-Befehl gibt alle Zeilen zurück, bei denen der Name den Substring agn ist enthält. Beachten Sie, dass die Suche nicht case-sensitive ist, dh sie wird nach agn ist unabhängig von Groß- und Kleinschreibung suchen. Wenn Sie eine case-sensitive Suche benötigen, könnte dies je nach Datenbankmanagementsystem variieren.",
  },
  {
    url: "https://images.squarespace-cdn.com/content/v1/5dec2be23ab4a76a02d7717d/1586382431101-FVJPWPF6ETAPWW4K8Y9D/Hospital_DoctorBG_web.jpg?format=2500w",
    title: "Willkommen in der Hautarztpraxis",
    description:
      "Beachten Sie, dass die Suche nicht case-sensitive ist, dh sie wird nach agn ist unabhängig von Groß- und Kleinschreibung suchen. Wenn Sie eine case-sensitive Suche benötigen, könnte dies je nach Datenbankmanagementsystem variieren.",
  },
];

const Slider = () => {
  const [images, setImages] = useState<sliderType[]>();

  useEffect(() => {
    setImages(img);
  }, [img]);

  return (
    <section className={styles.sliderSection}>
      <div className={styles.slidImageHolder}>
        {images?.map((item: sliderType, i) => (
          <ImageCard key={i} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Slider;
