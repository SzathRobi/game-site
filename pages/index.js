import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Landing from "../comps/landing/Landing";
import Header from "../comps/header/Header";
import Characters from "../comps/characters/Characters";
import Timeline from "../comps/timeline/Timeline";

export default function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isPageBottom, setIsPageBottom] = useState(false);

  /* useEffect(() => {
    console.log("pageYOffset", window.pageYOffset);
    console.log("scrollY", window.scrollY);
    console.log("innerHeight", window.innerHeight);
    console.log();
    //////
  }, [offsetY]);*/

  const timeIndicator = {
    width: "0.5rem",
    height: "95vh",
    backgroundColor: "blue",
    position: "fixed",
    top: "0",
    left: "calc(50% - 0.25rem)",
    borderBottomRightRadius: "3rem",
    borderBottomLeftRadius: "3rem",
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <Header />
        <Landing offsetY={offsetY} />
        <Characters />
      </div>
      <Timeline offsetY={offsetY} />
      <div style={timeIndicator}></div>
    </div>
  );
}
