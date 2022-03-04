import { useInView } from "react-intersection-observer";
import styles from "./timeline.module.scss";

function Milestone({
  date = "2022.01",
  text = "We achived some serius stuff here and of course we really proud of it",
}) {
  const { ref, inView, entry } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  const contentStyle = {
    transition: "800ms",
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(5rem)",
  };

  const circleStyle = {
    transition: "250ms",
    transform: inView ? "scale(1)" : "scale(0)",
  };

  //const textArr = text.split("");
  //const dateArr = date.split("");
  return (
    <div className={styles.Milestone} ref={ref}>
      <div className={styles.circle} style={circleStyle}></div>
      <div className={styles.content} style={contentStyle}>
        <p className={styles.date}>
          {date}
          {/*inView &&
            dateArr.map((letter, index) => (
              <span
                style={{
                  animationDelay: `${(5 + index) * 25}ms`,
                }}
                key={index}
              >
                {letter}
              </span>
              ))*/}
        </p>
        <p className={styles.text}>
          {text}
          {/*inView &&
            textArr.map((letter, index) => (
              <span
                style={{
                  animationDelay: `${(20 + index) * 20}ms`,
                }}
                key={index}
              >
                {letter}
              </span>
              ))*/}
        </p>
      </div>
    </div>
  );
}

export default Milestone;
