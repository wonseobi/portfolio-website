const projects = [
  {
    title: '🌐 Personal Portfolio',
    desc: 'A modern, responsive site to showcase my work and skills.',
  },
  {
    title: '📱 Mobile App UI',
    desc: 'A sleek UI concept for a task management app.',
  },
  {
    title: '📊 Admin Dashboard',
    desc: 'Built with charts, filters, and dark mode.',
  },
];

export default function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <ul>
        {projects.map((proj, i) => (
          <li key={i}>
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
