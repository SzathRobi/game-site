import React from "react";
import styles from "./roadmap.module.scss";

function QuarterContainer({
  year,
  quarter,
  clickedQuarter,
  updateClickedQuarter,
}) {
  const quarterStyle = {
    width: clickedQuarter == `${year}${quarter.quarter}` ? "260px" : 0,
  };
  return (
    <div
      className={styles.quarter}
      onClick={() => updateClickedQuarter(year, quarter.quarter)}
    >
      <p>{quarter.quarter}</p>
      <div className={styles.qInfoContainer} style={quarterStyle}>
        {/*<div className={styles.triangle}></div>*/}
        <p className={styles.qInfo}>{quarter.info}</p>
      </div>
    </div>
  );
}

export default QuarterContainer;
