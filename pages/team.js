import TeamCard from "../comps/team/TeamCard";
import { teamData } from "../comps/team/teamData";
import styles from "../comps/team/team.module.scss";
import Header from "../comps/header/Header";

function Team() {
  return (
    <section className={styles.Team} id="team">
      <Header page="team" />
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
