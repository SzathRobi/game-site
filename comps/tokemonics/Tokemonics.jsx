import Image from "next/image";
import { useInView } from "react-intersection-observer";
import styles from "./tokemonics.module.scss";

function Tokemonics() {
  const [firstDiagramRef, firstDiagramInView, firstEntry] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [secondDiagramRef, secondDiagramInView, secondEntry] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div className={styles.Tokemonics} id="tokemonics">
      <div
        ref={firstDiagramRef}
        className={`${styles.imageContainer} ${
          firstDiagramInView && styles.firstDiagramInView
        }`}
      >
        <Image
          src={"/images/diagrams/diagram.svg"}
          layout="fill"
          alt="Distopy game tokemonics"
        />
      </div>
      <div
        ref={secondDiagramRef}
        className={`${styles.imageContainer} ${
          secondDiagramInView && styles.secondDiagramInView
        }`}
      >
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
