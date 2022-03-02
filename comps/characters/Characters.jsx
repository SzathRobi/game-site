import Image from "next/image";
import { useEffect, useRef } from "react";
import Character from "./Character";
import styles from "./characters.module.scss";

function Characters() {
  const racesRef = useRef(null);
  const onScroll = () => {
    if (racesRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = racesRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        console.log("reached bottom");
      }
      if (scrollTop === 0) {
        console.log("first item");
      }
      if (scrollTop === clientHeight) {
        console.log("second item");
      }
      if (scrollTop === clientHeight * 2) {
        console.log("third item");
      }
      if (scrollTop === clientHeight * 3) {
        console.log("fourth item");
      }
    }
  };
  return (
    <section className={styles.Characters}>
      <h2>Races</h2>
      <div className={styles.races} ref={racesRef} onScroll={onScroll}>
        <Character />
        <Character />
        <Character />
        <Character />
      </div>
    </section>
  );
}

export default Characters;
