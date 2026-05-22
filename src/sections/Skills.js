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
    <section className="skills" id="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}