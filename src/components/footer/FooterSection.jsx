import styles from "./Footer.module.css";
import fbIcon from "../../assets/social/Facebook.svg";
import instaIcon from "../../assets/social/Instagram.svg";
import gmailIcon from "../../assets/social/Gmail.svg";

function FooterSection() {
  const facebook = "https://www.facebook.com/ModernFixer";
  const instagram = "https://www.instagram.com/mr_ramen_gg";
  const recipients = ["macvillaflores000@gmail.com", "ramengamingph@gmail.com"];

  return (
    <div className={styles.footerSection}>
      <div className={styles.leftContainer}>
        <h1>Mark Edison Jayag</h1>
        <h4>Future Developer</h4>
      </div>
      <div className={styles.centerContainer}>
        <p>
          © Copyright 2023. <br /> Made by Mark Edison Jayag
        </p>
      </div>
      <div className={styles.rightContainer}>
        <h3>Social</h3>
        <div>
          <a href={facebook} target="_blank" rel="noopener noreferrer">
            <img src={fbIcon} alt="Facebook Icon" />
          </a>
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <img src={instaIcon} alt="Intagram Icon" />
          </a>
          <a
            href={`mailto:${recipients[0]},${recipients[1]}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gmailIcon} alt="Gmail Icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
