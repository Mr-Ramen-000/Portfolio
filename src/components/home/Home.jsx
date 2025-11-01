import styles from "./Home.module.css";
import edisonImg from "../../assets/edison.png";
import Wave from "../wave/Wave.jsx";

function Home() {
  return (
    <section id="home" className={styles.homeContainer}>
      <div className={styles.leftContainer}>
        <div>
          <h2>Hello, I'm</h2>
          <h1>Mark Edison Jayag</h1>
        </div>
        <h4>Future Developer</h4>

        <p>
          Fourth year student in St. Vincent College of Cabuyao taking Bachelor
          of Science in Information Technology (BSIT)
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
