import { motion } from "framer-motion";
import projectImg from "../assets/project.png";

export default function Projects() {
  return (
    <motion.section
      className="projects"
      id="projects"

      initial={{ opacity: 0, y: 50 }}

      whileInView={{ opacity: 1, y: 0 }}

      transition={{ duration: 0.7 }}

      viewport={{ once: true }}
    >
      <h2>Projects</h2>

      <div className="project-card">
        <img
          src={projectImg}
          alt="Smart Learning Assistant"
          className="project-image"
        />
        <h3>Smart Learning Assistant 🚀</h3>

        <p>
          AI-powered learning roadmap generator using
          React, Node.js, Gemini AI, and YouTube API.
        </p>

        <div className="buttons">
          <a
            href="https://smart-learning-assistant-seven.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            🚀 Live Demo
          </a>

          <a
            href="https://github.com/Magesh-03-K/smart-learning-assistant"
            target="_blank"
            rel="noreferrer"
          >
            💻 GitHub
          </a>
        </div>
      </div>
    </motion.section>
  );
}