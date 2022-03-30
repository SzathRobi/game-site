import Link from "next/link";
import styles from "../styles/404.module.scss";
export default function Custom404() {
  return (
    <section className={styles.CustomError}>
      <h1>404</h1>
      <h1>This is not the page You are looking for!</h1>
      <Link href="/">
        <a>BACK TO HOME</a>
      </Link>
    </section>
  );
}
