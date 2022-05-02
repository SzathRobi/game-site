import Image from "next/image";
import styles from "./lore..module.scss";

function Lore() {
  return (
    <div className={styles.Lore}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/atlantis.jpg"
          layout="fill"
          objectFit="cover"
          alt="atlantis city in the Distopy game"
        />
      </div>

      <p>
        In the 314th year of the New Age an alien race arrives to the Earth.
        Giant plant-like symbiots, the friendly Meers travelled across the
        galaxy to warm mankind to the soon arrival of a relentless invader:
        Gata&apos;aga! Realizing that this will be the ultimate war, humans ask
        for help from the AI residing on the other side of the planet.
        Preparation for the war makes Atlanteans come to the surface after 12
        thousand years. The alliance of the four races are ready to fight, join
        them to take part in the battle to earn Dyseum token!
      </p>
    </div>
  );
}

export default Lore;
