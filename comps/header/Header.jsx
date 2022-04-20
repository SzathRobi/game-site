import { useState } from "react";
import Link from "next/link";
import Hamburger from "./Hamburger";
import styles from "./header.module.scss";

function Header() {
  const [checked, setChecked] = useState(false);
  const mobileMenuPos = {
    transform: `translateX(${checked ? 0 : 15}rem)`,
  };
  return (
    <header className={styles.Header}>
      <Hamburger checked={checked} setChecked={setChecked} />
      <nav style={mobileMenuPos}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/#story">
          <a>Story</a>
        </Link>
        <Link href="/#roadmap">
          <a>Roadmap</a>
        </Link>
        <Link href="/#whitepaper">
          <a>Whitepaper</a>
        </Link>
        <Link href="#">
          <a>Buy Dyseum</a>
        </Link>
        <Link href="/team">
          <a>Team</a>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
