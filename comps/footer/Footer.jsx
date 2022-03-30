import styles from "./footer.module.scss";

function Footer() {
  return (
    <footer className={styles.Footer}>
      <ul>
        <li>Home</li>
        <li>
          Marketplace <br />
          <span>(coming soon)</span>
        </li>
        <li>Wiki</li>
        <li>The Game</li>
        <li>Tokemonics</li>
        <li>Team</li>
        <li>Roadmap</li>
        <li>News</li>
      </ul>
      <ul>
        <li>FAQ</li>
        <li>White Paper</li>
        <li>Privacy Policy</li>
        <li>Term Of Use</li>
        <li>Partners</li>
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
