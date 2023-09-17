import styles from "./ProjectSection.module.css";
import Wave from "../wave/Wave.jsx";
import Project from "./Project.jsx";
import specialMart from "../../assets/projects/SpecialMart.png";
import minatoEpay from "../../assets/projects/MinatoEpayment.png";
import paylinker from "../../assets/projects/Paylinker.png";
import svcc from "../../assets/projects/SvccPortal.png";

function ProjectSection() {
  const projectList = [
    {
      src: specialMart,
      name: "Special Mart",
      context:
        "A console application that looks like a cash register (Point of Sale or POS) using the C++ programming language. This program uses a CSV file as a database to keep track of product details and sales transactions.",
      source_link: "https://github.com/Mr-Ramen-000/Special_Mart",
    },
    {
      src: minatoEpay,
      name: "Minato E-Payment System",
      context:
        "An electronic bill payment system, designed to enable users to pay their bills from the comfort of their own homes, has been developed using Python, Tkinter for the graphical user interface, and MySQL for managing the database.",
      source_link: "https://github.com/Mr-Ramen-000/Minato_E-Payment_System",
    },
    {
      src: paylinker,
      name: "Paylinker",
      context:
        "This electronic payment using Java Swing and MySQL. This system enables users to make payments both online and in person. Users can start transactions within the application and then finalize payments in person. Its primary objective is to reduce waiting times at the cashier department.",
      source_link: "https://github.com/Mr-Ramen-000/Paylinker",
    },
    {
      src: svcc,
      name: "SVCC Portal (redesign)",
      context:
        "I created a website inspired by the original SVCC portal. My main goal is to improve my skills in HTML, CSS, and JavaScript.",
      haveLive: true,
      source_link: "https://github.com/Mr-Ramen-000/practice001",
      live_link: "https://mr-ramen-000.github.io/practice001/",
    },
  ];

  return (
    <div id="project" className={styles.projectContainer}>
      <div className={styles.heading}>
        <h1>Projects</h1>
        <p>Here are some of the personal projects that I have done</p>
      </div>

      <div className={styles.projects}>
        {projectList.map((p, key) => (
          <Project
            key={key}
            name={p.name}
            context={p.context}
            image={p.src}
            haveLive={p.haveLive}
            source_link={p.source_link}
            live_link={p.live_link}
          />
        ))}
      </div>
      <Wave name="Jayag" />
    </div>
  );
}

export default ProjectSection;
