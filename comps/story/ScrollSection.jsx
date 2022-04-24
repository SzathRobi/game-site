import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./scrollSection.module.scss";

function ScrollSection({ offsetY }) {
  const gearRef = useRef(null);
  const fightRef = useRef(null);
  const earnRef = useRef(null);
  const repeatRef = useRef(null);

  const [gearOffset, setGearOffset] = useState(null);
  const [fightOffset, setFightOffset] = useState(null);
  const [earnOffset, setEarnOffset] = useState(null);
  const [repeatOffset, setRepeatOffset] = useState(null);
  useEffect(() => {
    setGearOffset(gearRef.current.getBoundingClientRect());
    setFightOffset(fightRef.current.getBoundingClientRect());
    setEarnOffset(earnRef.current.getBoundingClientRect());
    setRepeatOffset(repeatRef.current.getBoundingClientRect());
  }, []);

  const [gearPos, setGearPos] = useState(0);
  const [gearSubTextPos, setGearSubTextPos] = useState(-1);
  const [gearSubTextOpacity, setGearSubTextOpacity] = useState(0);

  const [fightPos, setFightPos] = useState(0);
  const [fightSubTextPos, setFightSubTextPos] = useState(-1);
  const [fightSubTextOpacity, setFightSubTextOpacity] = useState(0);

  const [earnPos, setEarnPos] = useState(0);
  const [earnSubTextPos, setEarnSubTextPos] = useState(-1);
  const [earnSubTextOpacity, setEarnSubTextOpacity] = useState(0);

  const [repeatPos, setRepeatPos] = useState(-1);
  const [repeatSubTextPos, setRepeatSubTextPos] = useState(-1);
  const [repeatSubTextOpacity, setRepeatSubTextOpacity] = useState(0);

  const gearStyle = {
    transform: `translateY(${gearPos}rem)`,
  };

  const gearSubTextStyle = {
    position: "relative",
    top: `(${gearSubTextPos}rem`,
    opacity: gearSubTextOpacity,
  };

  const fightStyle = {
    transform: `translateY(${fightPos}rem)`,
  };

  const fightSubTextStyle = {
    position: "relative",
    top: `${fightSubTextPos}rem`,
    opacity: fightSubTextOpacity,
  };

  const earnStyle = {
    transform: `translateY(${earnPos}rem)`,
  };

  const earnSubTextStyle = {
    position: "relative",
    top: `${earnSubTextPos}rem`,
    opacity: earnSubTextOpacity,
  };

  const repeatStyle = {
    transform: `translateY(${repeatPos}rem)`,
  };

  const repeatSubTextStyle = {
    position: "relative",
    top: `${repeatSubTextPos}rem`,
    opacity: repeatSubTextOpacity,
  };

  useEffect(() => {
    if (gearOffset) {
      if (gearOffset.top - offsetY > 350) {
        setGearPos(0);
        setGearSubTextPos(-1);
        setGearSubTextOpacity(0);
      }
      if (gearOffset.top - offsetY < 350) {
        setGearPos(-4);
        setGearSubTextPos(1);
        setGearSubTextOpacity(1);
      }
      if (fightOffset.top - offsetY > 350) {
        setFightPos(0);
        setFightSubTextPos(-1);
        setFightSubTextOpacity(0);
      }
      if (fightOffset.top - offsetY < 350) {
        setGearSubTextPos(-1);
        setGearSubTextOpacity(0);
        setFightPos(-4);
        setFightSubTextPos(1);
        setFightSubTextOpacity(1);
      }
      if (earnOffset.top - offsetY > 300) {
        setEarnPos(0);
        setEarnSubTextPos(-1);
        setEarnSubTextOpacity(0);
      }
      if (earnOffset.top - offsetY < 300) {
        setEarnPos(-4);
        setEarnSubTextPos(1);
        setEarnSubTextOpacity(1);
        setFightSubTextPos(-1);
        setFightSubTextOpacity(0);
      }
      if (repeatOffset.top - offsetY > 300) {
        setRepeatPos(0);
        setRepeatSubTextPos(-1);
        setRepeatSubTextOpacity(0);
      }
      if (repeatOffset.top - offsetY < 300) {
        setRepeatPos(-4);
        setRepeatSubTextPos(1);
        setRepeatSubTextOpacity(1);
        setEarnSubTextPos(-1);
        setEarnSubTextOpacity(0);
      }
    }
  }, [offsetY]);

  return (
    <section className={styles.ScrollSection}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/characters/pokemon.svg"
          layout="fill"
          alt="distopy character"
        />
      </div>
      <div className={styles.infoContainer}>
        <div ref={gearRef} className={styles.textContainer} style={gearStyle}>
          <h5>GEAR</h5>
          <p style={gearSubTextStyle}>We did it!</p>
        </div>
        <div ref={fightRef} className={styles.textContainer} style={fightStyle}>
          <h5>FIGHT</h5>
          <p style={fightSubTextStyle}>Cool Yeah?</p>
        </div>
        <div ref={earnRef} className={styles.textContainer} style={earnStyle}>
          <h5>EARN</h5>
          <p style={earnSubTextStyle}>Or simply awesome?</p>
        </div>
        <div
          ref={repeatRef}
          className={styles.textContainer}
          style={repeatStyle}
        >
          <h5>REPEAT</h5>
          <p style={repeatSubTextStyle}>Maybe both!</p>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
