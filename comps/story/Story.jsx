import styles from "./story.module.scss";
import ScrollSection from "./ScrollSection";
import Characters from "./characters/Characters";
import PromoTexts from "./PromoTexts";
import Lore from "./lore/Lore";
import DiseumNft from "./diseum-nft/DiseumNft";

function Story({ offsetY, scrollSectionRef, progress }) {
  return (
    <section className={styles.Story} id="story">
      <PromoTexts />
      <ScrollSection
        offsetY={offsetY}
        scrollSectionRef={scrollSectionRef}
        progress={progress}
      />
      <Characters />
      <Lore />
      <DiseumNft offsetY={offsetY} />
    </section>
  );
}

export default Story;
