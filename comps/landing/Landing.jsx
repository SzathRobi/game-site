import Link from "next/link";
import Image from "next/image";
import styles from "./landing.module.scss";

function Landing({ offsetY, isScrolling }) {
  const titleStyle = {
    top: `calc(50vh + ${offsetY * 0.2}px)`,
    opacity: isScrolling ? 0.6 : 0,
    zIndex: isScrolling ? 2 : -1,
  };

  return (
    <section className={styles.Landing} id="Landing">
      <Image
        src="/bg-min.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="left"
        alt="Distopy character in a fantasy world"
        className={styles.bgImg}
        //priority
      />
      <h1 style={titleStyle}>DISTOPY</h1>
    </section>
  );
}

export default Landing;
