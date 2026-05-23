import "./App.css";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";
import Footer from "./sections/Footer";
import { motion, useScroll } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      
      <Footer />
      
    </div>
  );
}

export default App;