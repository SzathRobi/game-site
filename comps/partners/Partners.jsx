import Image from "next/image";
import styles from "./partners.module.scss";
import { useInView } from "react-intersection-observer";

function Partners() {
  const { ref, inView, entry } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });
  return (
    <section className={styles.Partners}>
      <h2>Our Partners</h2>
      <div ref={ref} className={styles.partnersGrid}>
        <div className={`${styles.partnerCard} ${inView && styles.scaleUp}`}>
          <div></div>
          <div></div>
          <div></div>
          <Image
            src="/images/partners/partner-1.jpg"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className={`${styles.partnerCard} ${inView && styles.scaleUp}`}>
          <div></div>
          <div></div>
          <div></div>
          <Image
            src="/images/partners/partner-2.jpg"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className={`${styles.partnerCard} ${inView && styles.scaleUp}`}>
          <div></div>
          <div></div>
          <div></div>
          <Image
            src="/images/partners/partner-3.jpg"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className={`${styles.partnerCard} ${inView && styles.scaleUp}`}>
          <div></div>
          <div></div>
          <div></div>
          <Image
            src="/images/partners/partner-4.jpg"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className={`${styles.partnerCard} ${inView && styles.scaleUp}`}>
          <div></div>
          <div></div>
          <div></div>
          <Image
            src="/images/partners/partner-5.jpg"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className={`${styles.partnerCard} ${inView && styles.scaleUp}`}>
          <div></div>
          <div></div>
          <div></div>
          <Image
            src="/images/partners/partner-1.jpg"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className={`${styles.partnerCard} ${inView && styles.scaleUp}`}>
          <div></div>
          <div></div>
          <div></div>
          <Image
            src="/images/partners/partner-2.jpg"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className={`${styles.partnerCard} ${inView && styles.scaleUp}`}>
          <div></div>
          <div></div>
          <div></div>
          <Image
            src="/images/partners/partner-3.jpg"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Partners;
