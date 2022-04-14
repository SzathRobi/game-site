import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import styles from "./landing.module.scss";
import Title from "./Title";

function Landing({ offsetY }) {
  /*
   *   RESPONSIVENESS :)
   *   ADD INITIAL ANIMATON :(
   *   ADD PARALLAX SHIT :)
   */

  const { ref, inView, entry } = useInView({
    threshold: 1,
  });

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      inView ? videoRef.current.stop() : videoRef.current.stop();
    }
  }, [inView]);

  const titleStyle = {
    transform: `translateY(${offsetY * 0.8}px)`,
  };

  const btnsStyle = {
    transform: `translate(-50%, ${offsetY * 0.5}px)`,
  };

  const social_1style = {
    transform: `translate(-50%, ${offsetY * 0.1}px)`,
  };
  const social_2style = {
    transform: `translate(-50%, ${offsetY * 0.2}px)`,
  };
  const social_3style = {
    transform: `translate(-50%, ${offsetY * 0.4}px)`,
  };
  const social_4style = {
    transform: `translate(-50%, ${offsetY * 0.3}px)`,
  };

  return (
    <section className={styles.Landing} id="Landing">
      {/*<video ref={ref} muted id="videoBG">
        <source src="./bg.mp4" type="video/mp4" />
  </video>*/}
      <Image
        src="/bg-min.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="left"
        alt="game bg"
        className={styles.bgImg}
        //priority
      />
      <div className={styles.container}>
        <Title style={titleStyle} />
        <div className={styles.btns} style={btnsStyle}>
          <Link href="#">
            <a className={styles.presale}>JOIN PRESALE</a>
          </Link>
          <div className={styles.socials}>
            <Link href="#">
              <a style={social_1style}>
                <FaFacebook />
              </a>
            </Link>
            <Link href="#">
              <a style={social_2style}>
                <FaYoutube />
              </a>
            </Link>
            <Link href="#">
              <a style={social_3style}>
                <FaTwitter />
              </a>
            </Link>
            <Link href="#">
              <a style={social_4style}>
                <FaInstagram />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
