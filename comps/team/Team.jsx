import React from "react";
import TeamCard from "./TeamCard";
import { teamData } from "./teamData";
import styles from "./team.module.scss";

function Team() {
  return (
    <section className={styles.Team}>
      <h1>Our Team</h1>
      <div className={styles.cardContainer}>
        {teamData &&
          teamData.map((teamMember) => (
            <TeamCard key={teamMember.name} teamMember={teamMember} />
          ))}
      </div>
    </section>
  );
}

export default Team;
