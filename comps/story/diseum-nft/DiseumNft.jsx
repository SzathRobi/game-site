import Image from "next/image";
import { useInView } from "react-intersection-observer";
import InfoCard from "../characters/InfoCard";
import styles from "./diseumNft.module.scss";

function DiseumNft({ offsetY }) {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  const evenCardColumnStyle = {
    top: inView ? offsetY * -0.02 : 0,
  };

  const oddCardColumnStyle = {
    top: inView ? offsetY * 0.02 : 0,
  };
  return (
    <div className={styles.DiseumNft}>
      <div className={styles.dyseumSection}>
        <InfoCard
          title="dyseum"
          subtitle="Currency of a new age"
          text="lorem ipsum dolor sit amet conqueirte sa ano delegato te hago grantosan nu diri conqueirte sa ano delegato te hagni batara nobu su lorem ipsum dolor sit amet conqueirte sa ano delegato te hago grantosan nu diri conqueirte sa ano delegato te hagni batara nobu su"
        />
      </div>
      <div className={styles.nftSection}>
        <div ref={ref} className={styles.nftCards}>
          <div className={styles.cardColumn} style={evenCardColumnStyle}>
            <div className={styles.nftCard}>
              <Image
                src="/images/nft/img-1.jpg"
                objectFit="cover"
                layout="fill"
                alt="kacsamesék"
              />
            </div>
            <div className={styles.nftCard}>
              <Image
                src="/images/nft/img-2.jpg"
                objectFit="cover"
                layout="fill"
                alt="kacsamesék"
              />
            </div>
            <div className={styles.nftCard}>
              <Image
                src="/images/nft/img-3.jpg"
                objectFit="cover"
                layout="fill"
                alt="kacsamesék"
              />
            </div>
          </div>
          <div className={styles.cardColumn} style={oddCardColumnStyle}>
            <div className={styles.nftCard}>
              <Image
                src="/images/nft/img-4.jpg"
                objectFit="cover"
                layout="fill"
                alt="kacsamesék"
              />
            </div>
            <div className={styles.nftCard}>
              <Image
                src="/images/nft/img-5.jpg"
                objectFit="cover"
                layout="fill"
                alt="kacsamesék"
              />
            </div>
            <div className={styles.nftCard}>
              <Image
                src="/images/nft/img-6.jpg"
                objectFit="cover"
                layout="fill"
                alt="kacsamesék"
              />
            </div>
          </div>
          <div className={styles.cardColumn} style={evenCardColumnStyle}>
            <div className={styles.nftCard}>
              <Image
                src="/images/nft/img-7.jpg"
                objectFit="cover"
                layout="fill"
                alt="kacsamesék"
              />
            </div>
            <div className={styles.nftCard}>
              <Image
                src="/images/nft/img-8.jpg"
                objectFit="cover"
                layout="fill"
                alt="kacsamesék"
              />
            </div>
            <div className={styles.nftCard}>
              <Image
                src="/images/nft/img-9.jpg"
                objectFit="cover"
                layout="fill"
                alt="kacsamesék"
              />
            </div>
          </div>
        </div>
        <div className={styles.nftInfo}>
          <InfoCard
            title="nft"
            subtitle="armor weapon gem vehicle"
            text="lorem ipsum dolor sit amet conqueirte sa ano delegato te hago grantosan nu diri conqueirte sa ano delegato te hagni batara nobu su lorem ipsum dolor sit amet conqueirte sa ano delegato te hago grantosan nu diri conqueirte sa ano delegato te hagni batara nobu su"
          />
        </div>
      </div>
    </div>
  );
}

export default DiseumNft;
