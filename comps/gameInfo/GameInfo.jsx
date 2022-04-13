import Image from "next/image";
import { FaHeart, FaBeer, FaSun, FaMoon, FaFan } from "react-icons/fa";
import styles from "./gameInfo.module.scss";

function GameInfo() {
  return (
    <section className={styles.GameInfo} id="theGame">
      <div className={styles.topContainer}>
        <Image
          src="/images/game/game-1.jpg"
          layout="fill"
          objectFit="cover"
          alt=""
        />
        <div className={styles.infoContainer}>
          <h4>Some Title</h4>
          <h5>Some SubTitle</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            enim facilis omnis molestiae atque magnam nisi tempore, ea ab dolor
            dolorem similique aut necessitatibus, ut provident, earum sapiente
            nostrum dolores?
          </p>
        </div>
        <div className={styles.decorImageContainer}>
          <Image src="/images/characters/pokemon.svg" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.middleContainer}>
        <Image
          src="/images/game/game-2.jpg"
          layout="fill"
          objectFit="cover"
          alt=""
        />
        <div className={styles.infoContainer}>
          <h4>Some Title</h4>
          <ul>
            <li>
              <p>Some Stuff 1</p>
              <FaFan />
            </li>
            <li>
              <p>Some Other Stuff 2</p>
              <FaHeart />
            </li>
            <li>
              <p>Some Stuff 3</p>
              <FaMoon />
            </li>
            <li>
              <p>Some Cool Stuff 4</p>
              <FaBeer />
            </li>
            <li>
              <p>Some Long Named Stuff 5</p>
              <FaSun />
            </li>
          </ul>
          <div className={styles.decorImageContainer}>
            <Image src="/images/characters/pokemon.svg" layout="fill" alt="" />
          </div>
          <div className={styles.decorImageContainer}>
            <Image src="/images/characters/pokemon.svg" layout="fill" alt="" />
          </div>
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <Image
          src="/images/game/game-3.jpg"
          layout="fill"
          objectFit="cover"
          alt=""
        />
        <div className={styles.infoContainer}>
          <h4>Some Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            enim facilis omnis molestiae atque magnam nisi tempore, ea ab dolor
            dolorem similique aut necessitatibus, ut provident, earum sapiente
            nostrum dolores?
          </p>
        </div>
        <div className={styles.decorImageContainer}>
          <Image src="/images/characters/pokemon.svg" layout="fill" alt="" />
        </div>
      </div>
    </section>
  );
}

export default GameInfo;
