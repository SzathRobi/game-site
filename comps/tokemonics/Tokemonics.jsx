import Image from "next/image";
import styles from "./tokemonics.module.scss";

function Tokemonics() {
  return (
    <div className={styles.Tokemonics} id="tokemonics">
      <div className={styles.imageContainer}>
        <Image
          src={"/images/diagrams/diagram.svg"}
          layout="fill"
          alt="Distopy game tokemonics"
        />
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={"/images/diagrams/diagram.svg"}
          layout="fill"
          alt="Distopy game tokemonics"
        />
      </div>
    </div>
  );
}

export default Tokemonics;
