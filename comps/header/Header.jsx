import Link from "next/link";
import styles from "./header.module.scss";

function Header() {
  return (
    <header className={styles.Header}>
      <nav>
        <Link href="#">
          <a>Home</a>
        </Link>
        <Link href="#">
          <a>Races</a>
        </Link>
        <Link href="#">
          <a>Statistics</a>
        </Link>
        <Link href="#">
          <a>Roadmap</a>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
