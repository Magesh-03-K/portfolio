import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="hero"
      id="home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
        
      <h1>Hi, I'm Magesh 👋</h1>

      <h2>Full Stack Developer</h2>

      <p>
        I build AI-powered web applications using
        React, Node.js, Express, and APIs.
      </p>
    </motion.section>
  );
}