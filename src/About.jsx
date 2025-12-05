import './About.css';

export default function About() {
    const skills = [
        'React', 'JavaScript', 'TypeScript', 'Node.js',
        'Three.js', 'CSS', 'HTML', 'Git'
    ];

    return (
        <section id="about" className="about">
            <div className="about-container">
                <div className="section-header">
                    <h2 className="section-title">About Me</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="about-content">
                    <p className="about-text">
                        I'm a passionate developer who loves creating beautiful and functional web experiences.
                        With a focus on modern technologies and clean design, I bring ideas to life through code.
                    </p>

                    <div className="skills-section">
                        <h3 className="skills-title">Skills & Technologies</h3>
                        <div className="skills-grid">
                            {skills.map((skill, index) => (
                                <div key={index} className="skill-card">
                                    <span className="skill-name">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
