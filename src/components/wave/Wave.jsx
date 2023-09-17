import waveSvg from "../../assets/wave.svg";
import styles from "./Wave.module.css";

function Wave({name}) {
  return (
    <div>
      <h1 className={styles.name}>{name}</h1>
      <img className={styles.wave} src={waveSvg} alt="Wave SVG" />
    </div>
  );
}

export default Wave;
