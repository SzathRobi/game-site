import React from "react";
import styles from "./header.module.scss";

function Hamburger({ checked, setChecked }) {
  return (
    <label className={styles.Hamburger}>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked(!checked)}
      />
      <div className={styles.hamburgerLine}></div>
      <div className={styles.hamburgerLine}></div>
      <div className={styles.hamburgerLine}></div>
    </label>
  );
}

export default Hamburger;
