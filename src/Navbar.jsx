import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-content">
                <div className="navbar-logo">
                    <span className="logo-icon">✦</span>
                    <span className="logo-text">Ojas M.</span>
                </div>

                <ul className="navbar-links">
                    <li>
                        <button onClick={() => scrollToSection('home')} className="nav-link">
                            Home
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('about')} className="nav-link">
                            About
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('projects')} className="nav-link">
                            Projects
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('contact')} className="nav-link">
                            Contact
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
