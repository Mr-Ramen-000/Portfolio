import styles from "./Project.module.css";

function Project({ ...props }) {
  const openInNewTab = (e) => {
    let url;
    if (e.target.name == "sourceBTN") {
      url = props.source_link;
    } else if (e.target.name == "liveBTN") {
      url = props.live_link;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div key={props.key} className={styles.projectContainer}>
      <div className={styles.imgContainer}>
        <img src={props.image} alt="meow" />
      </div>
      <div className={styles.context}>
        <h1>{props.name}</h1>
        <p>{props.context}</p>
        <div>
          <button
            className={styles.source}
            name="sourceBTN"
            onClick={openInNewTab}
          >
            Source Code
          </button>
          {props.haveLive && (
            <button
              name="liveBTN"
              className={styles.live}
              onClick={openInNewTab}
            >
              Live Version
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
