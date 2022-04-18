import { useState } from "react";
import QuarterContainer from "./QuarterContainer";
import styles from "./roadmap.module.scss";

function YearContainer({
  year,
  quarters = [],
  clickedQuarter,
  updateClickedQuarter,
}) {
  return (
    <div className={styles.YearContainer}>
      <h4>{year}</h4>
      {quarters &&
        quarters.map((quarter) => (
          <QuarterContainer
            key={quarter.quarter}
            year={year}
            quarter={quarter}
            clickedQuarter={clickedQuarter}
            updateClickedQuarter={updateClickedQuarter}
          />
        ))}
    </div>
  );
}

export default YearContainer;
