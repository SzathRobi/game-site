import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import styles from "./story.module.scss";
import StoryInfoCard from "./StoryInfoCard";

function Story() {
  return (
    <section className={styles.Story} id="story">
      <StoryInfoCard />
    </section>
  );
}

export default Story;
