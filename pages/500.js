import Link from "next/link";
import styles from "../styles/404.module.scss";

export default function Custom500() {
  return (
    <section className={styles.CustomError}>
      <h1>400</h1>
      <h1>Oops, omething went wrong!</h1>
      <Link href="/">
        <a>BACK TO HOME</a>
      </Link>
    </section>
  );
}
