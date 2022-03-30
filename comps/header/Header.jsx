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
        <Link href="#Landing">
          <a>Home</a>
        </Link>

        <a>
          Marketplace <span>(coming soon)</span>
        </a>

        <Link href="https://bence-vereb.gitbook.io/whitepaper/">
          <a target="blank">Wiki</a>
        </Link>
        <Link href="#TheGame">
          <a>TheGame</a>
        </Link>
        <Link href="#Tokemonics">
          <a>Tokemonics</a>
        </Link>
        <Link href="#Team">
          <a>Team</a>
        </Link>
        <Link href="#Roadmap">
          <a>Roadmap</a>
        </Link>
        <Link href="/News">
          <a>News</a>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
