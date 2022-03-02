import Link from "next/link";
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import styles from "./landing.module.css";

function Landing({ offsetY }) {
  /*
   *   RESPONSIVENESS :)
   *   ADD INITIAL ANIMATON :(
   *   ADD PARALLAX SHIT :/
   */

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
    transform: `translate(-50%, ${offsetY * 0.3}px)`,
  };
  const social_4style = {
    transform: `translate(-50%, ${offsetY * 0.4}px)`,
  };
  return (
    <section className={styles.Landing}>
      <video autoPlay muted loop id="videoBG">
        <source src="./bg.mp4" type="video/mp4" />
      </video>
      <div className={styles.container}>
        <h1 style={titleStyle}>Game Name</h1>
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
