import React from "react";
import styles from "./landing.module.css";

function Landing({ offsetY }) {
  return (
    <section className={styles.Landing}>
      <video autoPlay muted loop>
        <source src="./bg.mp4" type="video/mp4" />
      </video>
    </section>
  );
}

export default Landing;
