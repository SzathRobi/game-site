import { useContext, useState } from "react";
import Link from "next/link";
import Hamburger from "./Hamburger";
import styles from "./header.module.scss";
import ScrollContext from "../../contexts/ScrollContext";

function Header() {
  const { isScrolling } = useContext(ScrollContext);
  const [checked, setChecked] = useState(false);
  const mobileMenuPos = {
    transform: `translateX(${checked ? 0 : 15}rem)`,
  };

  const headerStyle = {
    transition: "500ms",
    opacity: isScrolling ? 1 : 0,
  };
  return (
    <header className={styles.Header} style={headerStyle}>
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
