import Image from "next/image";
import InfoCard from "../characters/InfoCard";
import styles from "./diseumNft.module.scss";

function DiseumNft() {
  return (
    <div className={styles.DiseumNft}>
      <div className={styles.dyseumSection}>
        <InfoCard
          title="dyseum"
          subtitle="Currency of a new age"
          text="lorem ipsum dolor sit amet conqueirte sa ano delegato te hago grantosan nu diri"
        />
      </div>
      <div className={styles.nftSection}>
        <div className={styles.nftCards}>
          <div className={styles.cardColumn}>
            <div className={styles.nftCard}>
              <Image src="/images/random.shit" layout="fill" alt="kacsamesék" />
            </div>
            <div className={styles.nftCard}>
              <Image src="/images/random.shit" layout="fill" alt="kacsamesék" />
            </div>
            <div className={styles.nftCard}>
              <Image src="/images/random.shit" layout="fill" alt="kacsamesék" />
            </div>
          </div>
          <div className={styles.cardColumn}>
            <div className={styles.nftCard}>
              <Image src="/images/random.shit" layout="fill" alt="kacsamesék" />
            </div>
            <div className={styles.nftCard}>
              <Image src="/images/random.shit" layout="fill" alt="kacsamesék" />
            </div>
            <div className={styles.nftCard}>
              <Image src="/images/random.shit" layout="fill" alt="kacsamesék" />
            </div>
          </div>
          <div className={styles.cardColumn}>
            <div className={styles.nftCard}>
              <Image src="/images/random.shit" layout="fill" alt="kacsamesék" />
            </div>
            <div className={styles.nftCard}>
              <Image src="/images/random.shit" layout="fill" alt="kacsamesék" />
            </div>
            <div className={styles.nftCard}>
              <Image src="/images/random.shit" layout="fill" alt="kacsamesék" />
            </div>
          </div>
        </div>
        <InfoCard
          title="dyseum"
          subtitle="Currency of a new age"
          text="lorem ipsum dolor sit amet conqueirte sa ano delegato te hago grantosan nu diri"
        />
      </div>
    </div>
  );
}

export default DiseumNft;
