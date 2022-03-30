import Link from "next/link";
import styles from "../styles/404.module.scss";

export default function Custom500() {
  return (
    <section className={styles.CustomError}>
      <h1>500</h1>
      <h1>Something happend with our server but we are working on it!</h1>
      <Link href="/">
        <a>BACK TO HOME</a>
      </Link>
    </section>
  );
}
