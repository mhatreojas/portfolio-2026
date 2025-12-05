import FloatingLines from './FloatingLines';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import './App.css';

function App() {
    return (
        <div className="app">
            {/* Background */}
            <div className="background-container">
                <FloatingLines
                    enabledWaves={['top', 'middle', 'bottom']}
                    lineCount={[5, 5, 5]}
                    lineDistance={[5, 5, 5]}
                    bendRadius={2.0}
                    bendStrength={-2.5}
                    interactive={true}
                    parallax={true}
                    parallaxStrength={0.3}
                    mouseDamping={0.12}
                />
            </div>

            {/* Content */}
            <div className="content-container">
                <Navbar />
                <Hero />
                <About />
                <Projects />
                <Contact />
            </div>
        </div>
    );
}

export default App;
