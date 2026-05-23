import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "React",
    "JavaScript",
    "Node.js",
    "Express",
    "REST APIs",
    "Git & GitHub",
    "Deployment",
    "AI Integration",
    "HTML",
    "CSS",
  ];

  return (
    <motion.section
      className="skills"
      id="skills"

      initial={{ opacity: 0, y: 50 }}

      whileInView={{ opacity: 1, y: 0 }}

      transition={{ duration: 0.7 }}

      viewport={{ once: true }}
    >
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </motion.section>
  );
}