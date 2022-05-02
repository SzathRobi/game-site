import styles from "./roadmap.module.scss";
import RoadmapCard from "./RoadmapCard";

function Roadmap() {
  return (
    <section className={styles.Roadmap} id="roadmap">
      <h2>roadmap</h2>
      <div className={styles.cardContainer}></div>
      <RoadmapCard title="achived" />
      <RoadmapCard title="in-progress" />
      <RoadmapCard title="goals" />
    </section>
  );
}

export default Roadmap;
