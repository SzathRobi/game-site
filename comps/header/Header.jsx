import Link from "next/link";
import styles from "./header.module.scss";

function Header() {
  return (
    <header className={styles.Header}>
      <nav>
        <Link href="#Landing">
          <a>Home</a>
        </Link>
        <Link href="#Characters">
          <a>Races</a>
        </Link>
        <Link href="#">
          <a>Statistics</a>
        </Link>
        <Link href="#Timeline">
          <a>Roadmap</a>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
