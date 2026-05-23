import { motion } from "framer-motion";


export default function Contact() {
  return (
    <motion.section
      className="contact"
      id="contact"

      initial={{ opacity: 0, y: 50 }}

      whileInView={{ opacity: 1, y: 0 }}

      transition={{ duration: 0.7 }}

      viewport={{ once: true }}
    >
      <h2>Contact</h2>

      <p>
        Feel free to reach out for collaborations,
        internships, or projects 🚀
      </p>

      <div className="contact-links">
        <a href="mailto:mageshweapon1@gmail.com">
          Email
        </a>

        <a
          href="https://github.com/Magesh-03-K"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/magesh03"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
    </motion.section>
  );
}