import { useState } from "react";
import Link from "next/link";
import Hamburger from "./Hamburger";
import styles from "./header.module.scss";

function Header({ page = "home" }) {
  const [checked, setChecked] = useState(false);
  const mobileMenuPos = {
    transform: `translateX(${checked ? 0 : 15}rem)`,
  };
  return (
    <header className={styles.Header}>
      <Hamburger checked={checked} setChecked={setChecked} />
      <nav style={mobileMenuPos}>
        <Link href={page === "home" ? "#Landing" : "/"}>
          <a>Home</a>
        </Link>

        <a>
          Marketplace <span>(coming soon)</span>
        </a>

        <Link href="https://bence-vereb.gitbook.io/whitepaper/">
          <a target="blank">Wiki</a>
        </Link>
        <Link href={page === "home" ? "#theGame" : "/#theGame"}>
          <a>The Game</a>
        </Link>
        <Link href={page === "home" ? "#tokemonics" : "/#tokemonics"}>
          <a>Tokemonics</a>
        </Link>
        <Link href={page === "home" ? "#team" : "/#team"}>
          <a>Team</a>
        </Link>
        <Link href={page === "home" ? "#roadmap" : "/#roadmap"}>
          <a>Roadmap</a>
        </Link>
        <Link href="/news">
          <a>News</a>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
