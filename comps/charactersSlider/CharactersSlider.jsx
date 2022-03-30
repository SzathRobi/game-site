import { useState } from "react";
import Image from "next/image";

import Character from "./Character";
import styles from "./characters.module.scss";

function CharactersSlider() {
  /**
   * maybe will need another counter to make animation transitions
   */
  const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(1);
  const increment = () => {
    if (counter === 4) {
      setCounter(1);
      setTimeout(() => {
        setCounter2(counter);
      }, 500);
      return;
    }
    setCounter(counter + 1);
    setTimeout(() => {
      setCounter2(counter);
    }, 500);
  };
  const decrement = () => {
    if (counter === 1) {
      setCounter(4);
      return;
    }
    setCounter(counter - 1);
  };
  return (
    <section className={styles.Characters}>
      <div className={styles.charactersContainer}>
        <Character counter={counter} counter2={counter2} number={1} />
        <Character counter={counter} counter2={counter2} number={2} />
        <Character counter={counter} counter2={counter2} number={3} />
        <Character counter={counter} counter2={counter2} number={4} />
      </div>
      <div className={styles.btnContainer}>
        <h3>{counter}</h3>
        <button onClick={decrement}>PREV</button>
        <button onClick={increment}>NEXT</button>
      </div>
    </section>
  );
}

export default CharactersSlider;
