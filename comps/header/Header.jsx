import { useContext, useState } from "react";
import Link from "next/link";
import Hamburger from "./Hamburger";
import styles from "./header.module.scss";
import ScrollContext from "../../contexts/ScrollContext";

function Header() {
  const { isScrolling, setIsScrolling } = useContext(ScrollContext);
  const [checked, setChecked] = useState(false);
  const mobileMenuPos = {
    transform: `translateX(${checked && isScrolling ? 0 : 15}rem)`,
  };

  const headerStyle = {
    transition: "400ms",
    backgroundColor: isScrolling ? "rgba(0, 0, 0, 0.5)" : "transparent",
  };

  const logoDistopyStyle = {
    position: "relative",
    top: isScrolling ? "0" : "-4rem",
    transition: "400ms",
  };

  const linkStyle = {
    transition: "500ms",
    opacity: isScrolling ? 1 : 0,
    position: "relative",
    zIndex: isScrolling ? 1 : -1,
  };

  const buttonStyle = {
    transition: isScrolling ? "1000ms" : "400ms",
    opacity: isScrolling ? 1 : 0,
    zIndex: isScrolling ? 1 : -1,
  };

  const logoLine_1_position = {
    right: isScrolling ? "85%" : "20vh",
    transition: "200ms",
  };
  ///////
  const logoLine_2_position = {
    right: isScrolling ? "85%" : "20vh",
    transition: "400ms",
  };
  ///////
  const logoLine_3_position = {
    right: isScrolling ? "85%" : "20vh",
    transition: "600ms",
  };

  const fakeHamburgerLine1Style = {
    transform: isScrolling ? "translateX(0)" : "translateX(12rem)",
    transition: isScrolling ? "200ms" : "900ms",
  };

  const fakeHamburgerLine2Style = {
    transform: isScrolling ? "translateX(0)" : "translateX(12rem)",
    transition: isScrolling ? "300ms" : "1000ms",
  };

  const fakeHamburgerLine3Style = {
    transform: isScrolling ? "translateX(0)" : "translateX(12rem)",
    transition: isScrolling ? "400ms" : "1100ms",
  };

  const dStyle = {
    top: isScrolling ? "0" : "2rem",
  };

  return (
    <header className={styles.Header} style={headerStyle}>
      <h4>
        <div className={styles.linesContainer}>
          <div className={styles.logoLine} style={logoLine_1_position}></div>
          <div className={styles.logoLine} style={logoLine_2_position}></div>
          <div className={styles.logoLine} style={logoLine_3_position}></div>
          <div className={styles.dContainer}>
            <span style={dStyle}>D</span>
          </div>
        </div>
        <span style={logoDistopyStyle}>DISTOPY</span>
      </h4>
      <nav style={mobileMenuPos}>
        <ul>
          <li style={linkStyle}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li style={linkStyle}>
            <Link href="/#story">
              <a>Story</a>
            </Link>
          </li>
          <li style={linkStyle}>
            <Link href="/#roadmap">
              <a>Roadmap</a>
            </Link>
          </li>
          <li style={linkStyle}>
            <Link href="/#whitepaper">
              <a>Whitepaper</a>
            </Link>
          </li>
          <li style={linkStyle}>
            <Link href="#">
              <a>Buy Dyseum</a>
            </Link>
          </li>
        </ul>
        <button disabled={!isScrolling} style={buttonStyle}>
          <p>JOIN PRESALE</p>
        </button>
      </nav>
      <div
        className={styles.fakeHamburger}
        onClick={() => setIsScrolling(true)}
      >
        <div
          className={styles.hamburgerLine}
          style={fakeHamburgerLine1Style}
        ></div>
        <div
          className={styles.hamburgerLine}
          style={fakeHamburgerLine2Style}
        ></div>
        <div
          className={styles.hamburgerLine}
          style={fakeHamburgerLine3Style}
        ></div>
      </div>
      <Hamburger
        checked={checked}
        setChecked={setChecked}
        isScrolling={isScrolling}
        setIsScrolling={setIsScrolling}
      />
    </header>
  );
}

export default Header;
