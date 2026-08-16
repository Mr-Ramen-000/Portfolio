import styles from "./Home.module.css";
import edisonImg from "../../assets/edison.png";
import Wave from "../wave/Wave.jsx";

function Home() {
  return (
    <section id="home" className={styles.homeContainer}>
      <div className={styles.leftContainer}>
        <div>
          <div>
    <h2>Hello, I'm</h2>
    <h1>Mark Edison Jayag</h1>
  </div>
  <h4>IT Graduate</h4>

  <p>
    Bachelor of Science in Information Technology (BSIT) graduate from
    St. Vincent College of Cabuyao.
  </p>
      </div>
      <div className={styles.rightContainer}>
        <img src={edisonImg} alt="Edison Image" />
      </div>
      <Wave name={"Mark"} />
    </section>
  );
}

export default Home;
