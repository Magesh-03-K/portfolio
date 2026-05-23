import { motion } from "framer-motion";
import bg from "../assets/bg.jpg";

export default function Hero() {
  return (
    <motion.section
      className="hero"
      id="home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}

      style={{
        backgroundImage: `linear-gradient(
          rgba(15, 23, 42, 0.4),
          rgba(15, 23, 42, 0.22)
        ), url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        
      }}
    >
      <div className="hero-content">
        <h1>Hi, I'm Magesh 👋</h1>

        <h2>Full Stack Developer</h2>

        <p>
          I build AI-powered full-stack applications
          using React, Node.js, Express, and APIs.
        </p>

        <div className="hero-buttons">
          <a href="#projects">View Projects</a>

          <a href="#contact">Contact Me</a>
        </div>
      </div>
    </motion.section>
  );
}