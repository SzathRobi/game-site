import React from "react";
import Image from "next/image";
import { FaPenNib } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import styles from "./team.module.scss";

function TeamCard({ teamMember }) {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const decorStyle = {
    transform: inView ? "skew(4deg,4deg)" : "skew(0,0)",
  };

  return (
    <div ref={ref} className={styles.TeamCard}>
      <div className={styles.decor} style={decorStyle}></div>
      <div className={styles.cardDesign}>
        <div className={styles.imageContainer}>
          <Image
            src={teamMember.image}
            layout="fill"
            objectFit="cover"
            alt={teamMember.name}
          />
        </div>
        <h4>Jane Smith Doe</h4>
        <div className={styles.roleContainer}>
          <FaPenNib />
          <p>{teamMember.role}</p>
        </div>
        <p className={styles.bio}>{teamMember.bio}</p>
      </div>
    </div>
  );
}

export default TeamCard;
