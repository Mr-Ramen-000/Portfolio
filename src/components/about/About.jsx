import React from "react";
import styles from "./About.module.css";
import Wave from "../wave/Wave";
import htmlSvg from "../../assets/skills/html.svg";
import cssSvg from "../../assets/skills/css.svg";
import jsSvg from "../../assets/skills/js.svg";
import reactSvg from "../../assets/skills/react.svg";
import phpSvg from "../../assets/skills/php.svg";
import pythonSvg from "../../assets/skills/py.svg";
import javaSvg from "../../assets/skills/java.svg";
import cPlusPlusSvg from "../../assets/skills/cPlusPlus.svg";
import mysqlSvg from "../../assets/skills/mysql.svg";

function About() {
  let iconsList = [
    { src: htmlSvg, alt: "Html Icon" },
    { src: cssSvg, alt: "Css Icon" },
    { src: jsSvg, alt: "Javascript Icon" },
    { src: reactSvg, alt: "React Icon" },
    { src: phpSvg, alt: "PHP Icon" },
    { src: pythonSvg, alt: "Python Icon" },
    { src: javaSvg, alt: "Java Icon" },
    { src: cPlusPlusSvg, alt: "C++ Icon" },
    { src: mysqlSvg, alt: "MySql Icon" },
  ];

  return (
    <section id="about" className={styles.aboutContainer}>
      <div>
        <div className={styles.about}>
          <h1 className={styles.title}>About Me</h1>
          <p>
  I'm Mark Edison Jayag, an Information Technology graduate from St. Vincent
  College of Cabuyao. I have a strong interest in web development and enjoy
  learning new technologies. I love exploring and building new things, and
  outside of development, I enjoy playing online games.
</p>
        </div>
        <div className={styles.skills}>
          <h1 className={styles.title}>Skills</h1>
          <div className={styles.icons}>
            {iconsList.map((icon, key) => (
              <img key={key} src={icon.src} alt={icon.alt} />
            ))}
          </div>
        </div>
      </div>
      <Wave name={"Edison"} />
    </section>
  );
}

export default About;
