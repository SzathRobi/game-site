import { useRef } from "react";
import Milestone from "./Milestone";
import styles from "./timeline.module.scss";

function Timeline({ offsetY }) {
  return (
    <section className={styles.Timeline} style={{ minHeight: "100vh" }}>
      <Milestone />
      <Milestone />
      <Milestone />
      <Milestone />
      <Milestone />
      <Milestone />
      <Milestone />
      <Milestone />
    </section>
  );
}

export default Timeline;
