import Image from "next/image";
import { useInView } from "react-intersection-observer";
import styles from "./characters.module.scss";
function Character() {
  const { ref, inView, entry } = useInView({
    threshold: 0.6,
    triggerOnce: false,
  });

  const raceStyle = {
    transition: "800ms",
    position: "relative",
    left: inView ? 0 : "-100vw",
    // animationName: inView ? "@slideInFromLeft" : "@slideOutToLeft",
    //animationName: inView ? "@slideInFromLeft" : "@slideInFromLeft",
  };

  const contentStyle = {
    transition: "800ms",
    position: "relative",
    right: inView ? 0 : "-100vw",
  };
  return (
    <div className={styles.Character} ref={ref}>
      <div className={styles.race} style={raceStyle}>
        <div className={styles.imgContainer}>
          <Image
            src="/minion.svg"
            width={100}
            height={100}
            layout="responsive"
            alt="minion"
          />
        </div>
      </div>
      <div className={styles.content} style={contentStyle}>
        <h3>Name</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
          suscipit, consequuntur fuga, officiis ratione recusandae vitae ea
          quidem blanditiis officia delectus at numquam facilis atque eligendi
          inventore dicta voluptatem repellendus quibusdam eos impedit? Fugit
          laudantium inventore nulla laboriosam magnam atque, tempore non saepe
          dolor asperiores! Aliquid cum recusandae consectetur optio?
        </p>
      </div>
    </div>
  );
}

export default Character;
