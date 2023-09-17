import Navigation from "./components/navigation/Navigation.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import ProjectSection from "./components/project/ProjectSection.jsx";
import ContactSection from "./components/contact/ContactSection.jsx";
import FooterSection from "./components/footer/FooterSection.jsx";

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <About />
      <ProjectSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}

export default App;
