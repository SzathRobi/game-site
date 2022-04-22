import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import styles from "./landing.module.scss";
import Title from "./Title";

function Landing({ offsetY, isScrolling }) {
  const { ref, inView, entry } = useInView({
    threshold: 1,
  });

  const videoRef = useRef(null);

  const titleStyle = {
    transform: `translateY(${offsetY * 0.6}px)`,
    transition: "500ms",
    opacity: isScrolling ? 1 : 0,
  };

  const btnsStyle = {
    transform: `translate(-50%, ${offsetY * 0.3}px)`,
    transition: "500ms",
    opacity: isScrolling ? 1 : 0,
  };

  const socialStyle = {
    transform: `translate(-50%, ${offsetY * 0.01}px)`,
    transition: "500ms",
    opacity: isScrolling ? 1 : 0,
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
        <h1>
          <Title style={titleStyle} />
        </h1>
        <div className={styles.btns} style={btnsStyle}>
          <Link href="#">
            <a className={styles.presale}>JOIN PRESALE</a>
          </Link>
          <div className={styles.socials}>
            <Link href="#">
              <a style={socialStyle}>
                <FaFacebook />
              </a>
            </Link>
            <Link href="#">
              <a style={socialStyle}>
                <FaYoutube />
              </a>
            </Link>
            <Link href="#">
              <a style={socialStyle}>
                <FaTwitter />
              </a>
            </Link>
            <Link href="#">
              <a style={socialStyle}>
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
