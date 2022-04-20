import styles from "./whitepaper.module.scss";

function Whitepaper() {
  return (
    <section className={styles.Whitepaper}>
      <div className={styles.anchorPoint} id="whitepaper"></div>
      <a target="blank" href="https://bence-vereb.gitbook.io/whitepaper/">
        Whitepaper
      </a>
    </section>
  );
}

export default Whitepaper;
