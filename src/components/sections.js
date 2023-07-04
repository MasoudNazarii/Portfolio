import Home from './home';
import About from './about';
import Projects from './projects';

export default function Sections() {
    return(
        <>
            <section id="Home" className="s1">
                <Home />
            </section>
            <section id="About" className="s2">
                <About />
            </section>
            <section id="Projects" className="s3">
                <Projects />
            </section>
        </>
    );
}