
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./pages/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/whychooseus";
import Industries from "./components/industries";
import Process from "./components/Process";
import MissionVision from "./components/MissionVision";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Industries />
      <Process/>
      <MissionVision/>
      <CTA/>
      <Footer/>
    </>
  );
}

export default App;


