import './Contact.css';

export default function Contact() {
    const socialLinks = [
        { name: 'GitHub', icon: '⚡', url: '#' },
        { name: 'LinkedIn', icon: '💼', url: '#' },
        { name: 'Twitter', icon: '🐦', url: '#' },
        { name: 'Email', icon: '✉️', url: 'mailto:hello@example.com' }
    ];

    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <div className="section-header">
                    <h2 className="section-title">Get In Touch</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="contact-content">
                    <p className="contact-text">
                        I'm always open to new opportunities and collaborations.
                        Feel free to reach out!
                    </p>

                    <div className="social-links">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                className="social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="social-icon">{link.icon}</span>
                                <span className="social-name">{link.name}</span>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="contact-footer">
                    <p>© 2024 Portfolio. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
}
