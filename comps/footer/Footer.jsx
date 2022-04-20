import Link from "next/link";
import styles from "./footer.module.scss";

function Footer() {
  return (
    <footer className={styles.Footer}>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/#story">
            <a>Story</a>
          </Link>
        </li>
        <li>
          <Link href="/#tokemonics">
            <a>Tokemonics</a>
          </Link>
        </li>
        <li>
          <Link href="/team">
            <a>Team</a>
          </Link>
        </li>
        <li>
          <Link href="/#roadmap">
            <a>Roadmap</a>
          </Link>
        </li>
        <li>
          <Link href="/#whitepaper">
            <a>Whitepaper</a>
          </Link>
        </li>
      </ul>
      <ul>
        <li>FAQ</li>
        <li>
          <a href="https://bence-vereb.gitbook.io/whitepaper/" target="blank">
            Wiki
          </a>
        </li>
        <li>Privacy Policy</li>
        <li>Term Of Use</li>
        <li>
          <Link href="/#partners">
            <a>Partners</a>
          </Link>
        </li>
      </ul>
      <ul>
        <li>Social Medias</li>
        <li>Telegram</li>
        <li>Twitter</li>
        <li>Discrod</li>
        <li>Instagram</li>
        <li>TikTok</li>
      </ul>
      <form>
        <h3>Subscribe to our newsletter!</h3>
        <div>
          <input type="email" />
          <button>Subscribe</button>
        </div>
      </form>
    </footer>
  );
}

export default Footer;
