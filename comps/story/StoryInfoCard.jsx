import React from "react";
import styles from "./storyInfoCard.module.scss";

function StoryInfoCard() {
  return (
    <article className={styles.StoryInfoCard}>
      <div className={styles.infoContainer}>
        <h3>MIX COMBINATION</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quo repellendus saepe deserunt quibusdam rerum blanditiis possimus
          recusandae temporibus expedita.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quo repellendus saepe deserunt quibusdam rerum blanditiis possimus
          recusandae temporibus expedita.
        </p>
        <button>Read More</button>
      </div>
      <div className={styles.imageContainer}></div>
    </article>
  );
}

export default StoryInfoCard;
