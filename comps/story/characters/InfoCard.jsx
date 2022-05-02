import Link from "next/link";
import styles from "./infoCard.module.scss";

function InfoCard({ title, subtitle, text, url }) {
  return (
    <div className={styles.InfoCard}>
      <h5>{title}</h5>
      <h6>{subtitle}</h6>
      {text && <p>{text}</p>}
      {url && (
        <Link href={url}>
          <a>Learn more</a>
        </Link>
      )}
    </div>
  );
}

export default InfoCard;
