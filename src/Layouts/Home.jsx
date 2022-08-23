import Header from "../Components/Header/Header";
import HeadSection from "../Components/HeadSection/HeadSection.jsx";
import AboutSection from "../Components/AboutSection/AboutSection.jsx";
import SkillsSection from "../Components/SkillsSection/SkillsSection.jsx";
import Footer from "../Components/Footer/Footer.jsx";

function Home() {

  return (
    <div id="homep">
      {/* Home Page */}
      <Header />
      <HeadSection />
      <AboutSection />
      <SkillsSection />
     
    </div>
  );
}

export default Home;