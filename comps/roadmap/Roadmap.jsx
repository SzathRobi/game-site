import { useState } from "react";
import YearContainer from "./YearContainer";
import styles from "./roadmap.module.scss";

function Roadmap() {
  const [clickedQuarter, setClickedQuarter] = useState(0);
  const updateClickedQuarter = (year, quarter) => {
    setClickedQuarter(0);
    setTimeout(() => {
      setClickedQuarter(`${year}${quarter}`);
    }, 250);
  };

  return (
    <section className={styles.Roadmap} id="roadmap">
      <h2>Our Journey</h2>
      <div className={styles.roadmapContainer}>
        <YearContainer
          year={2021}
          quarters={[
            {
              quarter: "Q1",
              info: "Az ötlet 2021-ben született. Elkezdtük megírni a Dystopi teljes történetét.",
            },
          ]}
          clickedQuarter={clickedQuarter}
          updateClickedQuarter={updateClickedQuarter}
        />
        <YearContainer
          year={2022}
          quarters={[
            {
              quarter: "Q1",
              info: "Felvettünk grafikusokat és elkezdtük megrajzolni az álltalunk megálmodott világot és annak szereplőit. Felkerestünk több nagy játékstúdiót, blockchain és NFT expert fejlesztőt.",
            },
            {
              quarter: "Q2",
              info: "Elkészűlt a weboldalunk ahol bemutattok az első koncepciós rajzokat. Elstartoltuk a kommunikációs csatornáinkat és belekezdtünk a marketingbe. Partnerséget kötöttünk a Metaplayers, Gamerland, eSportmanagger -el. Kiadtjuk az első animációs teasert. Megnyitjuk az előregisztrációt a Presale-re.",
            },
            {
              quarter: "Q3",
              info: "Élő Dyseum Presale esemény a Gamerlandben amit közvetítünk a kommunikációs csatornáinkon. Elkezdődik a fejlesztés Unreal Engine 5 motorral. Limitált ajándékok a token holdereknek.",
            },
            {
              quarter: "Q4",
              info: "Elkezdjük az NFT kollekciók eladását. Elkezdődik a Food, Ammo, etc értékesítése. Megnyitjuk a marketplace-t. A weboldalon lehetővé tesszük a bányászatot amíg a játék végleges verziója elindul.",
            },
          ]}
          clickedQuarter={clickedQuarter}
          updateClickedQuarter={updateClickedQuarter}
        />
        <YearContainer
          year={2023}
          quarters={[
            {
              quarter: "Q1",
              info: "Megnyitjuk az első várost ahol kipróbálhatod a karakteredet, annak képességeit és megnézheted hogyan állnak a karaktereden a megvásárolt itemek. A webes bányászatot felváltja a végleges játékbeli verzió.",
            },
            {
              quarter: "Q2",
              info: "Elindul az Alfa játék verzió és feloldásra kerül a térkép egy része ahol elkezdhetjük a küldetéseket teljesíteni és küzdhetünk az ellenséggel hogy dyseumot gyűjtsünk jutalommul.",
            },
            {
              quarter: "Q4",
              info: "Megjelennek a kisállatok (Akik velünk együtt tudnak harcolni), járművek (Melyekkel eljuthatunk olyan helyekre is amik speciális, eddig megközelíthetetlen területen helyezkednek el) és feloldjuk a térkép újabb részeit.",
            },
          ]}
          clickedQuarter={clickedQuarter}
          updateClickedQuarter={updateClickedQuarter}
        />
        <YearContainer
          year={2024}
          quarters={[
            {
              quarter: "Q",
              info: "Újabb térkép részeket oldunk fel, új küldetéseket és lehetőségeket vezetünk be. Megjelenik az investment opció a játékban. Folytatjuk a játék fejlesztését, elindítjuk a pvp módot és megrendezzük az első tournament versenyt a partnereink szervezésében. Bemutatkozik egy új faj a játékban.",
            },
          ]}
          clickedQuarter={clickedQuarter}
          updateClickedQuarter={updateClickedQuarter}
        />
      </div>
    </section>
  );
}

export default Roadmap;
