import styles from "./Navigation.module.css";
import { Link } from "react-scroll";

function Navigation() {
  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.logo}>
          <span>E</span>dison.
        </h1>
        <nav>
          <ul className={styles.menu}>
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                activeClass={styles.active}
              >
                Home
              </Link>
            </li>
            <span></span>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                activeClass={styles.active}
              >
                About
              </Link>
            </li>
            <span></span>
            <li>
              <Link
                to="project"
                spy={true}
                smooth={true}
                duration={500}
                activeClass={styles.active}
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.contact}>
          <div className={styles.contactContainer}>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              activeClass={styles.active}
            >
              <h4>Contact</h4>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navigation;
