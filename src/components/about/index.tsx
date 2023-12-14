import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../style/about.module.scss";
import UserImage from "./userImage";

const AboutSlice = () => {
  return (
    <section
      className={styles.aboutSection}
      data-aos="zoom-out-up"
      id="about-us"
    >
      <div className={styles.smallCircle}>
        <FontAwesomeIcon icon={faCircle} className={styles.circles} />
        <FontAwesomeIcon icon={faCircle} className={styles.circles} />
        <FontAwesomeIcon icon={faCircle} className={styles.circles} />
        <FontAwesomeIcon icon={faCircle} className={styles.circles} />
      </div>
      <div className={styles.bigCircle}>
        <FontAwesomeIcon icon={faCircle} className={styles.circles} />
        <FontAwesomeIcon icon={faCircle} className={styles.circles} />
        <FontAwesomeIcon icon={faCircle} className={styles.circles} />
        <FontAwesomeIcon icon={faCircle} className={styles.circles} />
      </div>
      <div className={styles.InfoSlice}>
        <UserImage />

        <div>
          <h2>
            Herzlich Willkommen auf der Webseite von Praxis Dr. Mustermann
          </h2>
          <br />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis esse
            doloremque aperiam? Tenetur aut quas porro dicta consequuntur esse,
            dolore, vero ab in suscipit, et ea neque illum nihil quasi odit modi
            quibusdam. Excepturi sint necessitatibus ad ullam a odio quaerat
            rerum quam aliquid totam tempore ea harum ex ipsam iure, ipsa saepe!
            Reprehenderit ipsam quisquam doloribus, earum doloremque, excepturi
            cumque eos minima voluptatibus consequatur soluta. Libero alias
            natus a. Sint voluptate corrupti similique facilis inventore ad
            aspernatur rerum maiores? Optio quidem repellat doloremque deleniti
            libero dolorum, repudiandae reprehenderit atque, quisquam culpa
            maxime quam officia possimus velit! Nulla quos nemo ad beatae
            necessitatibus consequatur commodi blanditiis, ex quaerat placeat
            laborum incidunt voluptates perferendis id obcaecati culpa porro.
            facere, suscipit mollitia asperiores!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSlice;
