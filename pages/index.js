import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Landing from "../comps/landing/Landing";
import Header from "../comps/header/Header";

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

  return (
    <div className={styles.container} style={{ minHeight: "300vh" }}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Landing offsetY={offsetY} />
      </main>
    </div>
  );
}
