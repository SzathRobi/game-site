import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import styles from "./story.module.scss";
import StoryInfoCard from "./StoryInfoCard";
import ScrollSection from "./ScrollSection";
import Characters from "./Characters";

function Story({ offsetY }) {
  return (
    <section className={styles.Story} id="story">
      <StoryInfoCard />
      <ScrollSection offsetY={offsetY} />
      <Characters />
    </section>
  );
}

export default Story;
