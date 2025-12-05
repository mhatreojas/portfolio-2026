import './Projects.css';

export default function Projects() {
    const projects = [
        {
            title: 'Project Alpha',
            description: 'A modern web application with stunning visuals',
            tech: ['React', 'Three.js', 'CSS']
        },
        {
            title: 'Project Beta',
            description: 'Interactive dashboard with real-time data',
            tech: ['TypeScript', 'Node.js', 'React']
        },
        {
            title: 'Project Gamma',
            description: 'Beautiful portfolio website with animations',
            tech: ['React', 'CSS', 'JavaScript']
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="projects-container">
                <div className="section-header">
                    <h2 className="section-title">Featured Projects</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-number">0{index + 1}</div>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tech">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
