import React from "react";
import StoryInfoCard from "./StoryInfoCard";
import styles from "./characters.module.scss";

function Characters() {
  return (
    <div className={styles.Characters}>
      <h3>JOIN THE ALLIANCE</h3>
      <div className={styles.characterProfilesContainer}>
        <div className={styles.characterProfile}>
          <div className={styles.profileImageContainer}></div>
          <h6>HUMAN</h6>
          <p>TEAMS</p>
        </div>
        <div className={styles.characterProfile}>
          <div className={styles.profileImageContainer}></div>
          <h6>ATLANTEAN</h6>
          <p>MAGES</p>
        </div>
        <div className={styles.characterProfile}>
          <div className={styles.profileImageContainer}></div>
          <h6>MEER</h6>
          <p>SYMBIOTS</p>
        </div>
        <div className={styles.characterProfile}>
          <div className={styles.profileImageContainer}></div>
          <h6>AI</h6>
          <p>ROBOTS</p>
        </div>
      </div>

      <StoryInfoCard />
    </div>
  );
}

export default Characters;
