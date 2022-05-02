import React from "react";
import InfoCard from "./InfoCard";

import styles from "./characters.module.scss";

function Characters() {
  return (
    <div className={styles.Characters}>
      <p className={styles.description}>
        Choose your fighter and use cyber weapons, biology, magic or technology
        to defeat Gata&apos;aga!
      </p>

      <div className={styles.charactersGrid}>
        <InfoCard title="ai" subtitle="Humanoid robots" url="#" />
        <InfoCard title="meer" subtitle="Plant-like symbiots" url="#" />
        <InfoCard title="atlantean" subtitle="Ancient wizards" url="#" />
        <InfoCard title="human" subtitle="Man of faith" url="#" />
      </div>
    </div>
  );
}

export default Characters;
