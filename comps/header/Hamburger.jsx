import { useEffect } from "react";
import styles from "./header.module.scss";

function Hamburger({ checked, setChecked, isScrolling, setIsScrolling }) {
  const hamburgerLine1Style = {
    right: isScrolling ? "0" : "2rem",
    transition: isScrolling ? "500ms" : "400ms",
  };
  const hamburgerLine2Style = {
    right: isScrolling ? "0" : "2rem",
    transition: isScrolling ? "400ms" : "500ms",
  };
  const hamburgerLine3Style = {
    right: isScrolling ? "0" : "2rem",
    transition: isScrolling ? "300ms" : "600ms",
  };

  useEffect(() => {
    if (!isScrolling) {
      setChecked(false);
    }
  }, [isScrolling]);

  return (
    <label
      className={styles.Hamburger}
      onClick={() => (!checked ? setIsScrolling(true) : null)}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <div className={styles.hamburgerLine} style={hamburgerLine1Style}></div>
      <div className={styles.hamburgerLine} style={hamburgerLine2Style}></div>
      <div className={styles.hamburgerLine} style={hamburgerLine3Style}></div>
    </label>
  );
}

export default Hamburger;
