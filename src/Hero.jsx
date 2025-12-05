import './Hero.css';

export default function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-content">


                <h1 className="hero-title">
                    Ojas Mhatre
                    <br />
                    <span className="gradient-text">Developer & Designer</span>
                </h1>

                <p className="hero-description">
                    Crafting beautiful digital experiences with modern technologies
                </p>

                <div className="hero-buttons">
                    <button className="btn btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                        View Work
                    </button>
                    <button className="btn btn-secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                        Get in Touch
                    </button>
                </div>
            </div>
        </section>
    );
}
