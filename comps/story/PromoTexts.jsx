import React from "react";
import styles from "./promoTexts.module.scss";

function PromoTexts() {
  return (
    <div className={styles.PromoTexts}>
      <h5 className={styles.title}>
        A NEW GENERATION <strong>NFT GAME</strong>
      </h5>
      <h5 className={styles.title}>TO SAVE THE EARTH FROM ALIEN INVASION</h5>
      <div className={styles.container}>
        <h5 className={styles.play}>PLAY</h5>
        <div className={styles.subTitles}>
          <h6>
            have <span>FUN</span>
          </h6>
          <h6>
            reach <span>RANKS</span>
          </h6>
          <h6>
            make <span>INCOME</span>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default PromoTexts;
