import React from "react";
import Image from "next/image";
import styles from "./characters.module.scss";

function Character({ number, counter }) {
  const imgPos = {
    transform: `translateX(${number === counter ? 0 : -60}vw)`,
  };
  const descPos = {
    transform: `translateX(${number === counter ? 0 : 60}vw)`,
  };

  /**
   * const imgPos = {
    transform: `translateX(${
      number === counter2 ? 50 : number === counter ? 0 : 0
    }vw)`,
  };
  const descPos = {
    transform: `translateX(${
      number === counter2 ? -50 : number === counter ? 0 : 0
    }vw)`,
  };
   */

  return (
    <div className={styles.characterContainer}>
      <div className={styles.character}>
        <div style={imgPos} className={styles.imgContainer}>
          <Image
            src="/minion.svg"
            width={100}
            height={100}
            layout="responsive"
            alt="minion"
          />
        </div>
      </div>
      <div style={descPos} className={styles.descContainer}>
        <h2 className={styles.name}>Super Cool Minion</h2>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          reprehenderit quia facere, consequuntur sapiente, recusandae, ipsam
          consequatur modi neque laudantium veritatis quisquam ducimus illum
          ullam quos tempore pariatur blanditiis explicabo.
        </p>
      </div>
    </div>
  );
}

export default Character;
