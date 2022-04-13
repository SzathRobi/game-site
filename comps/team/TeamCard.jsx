import React from "react";
import Image from "next/image";
import { FaPenNib } from "react-icons/fa";
import styles from "./team.module.scss";

function TeamCard({ teamMember }) {
  return (
    <div className={styles.TeamCard}>
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
  );
}

export default TeamCard;
