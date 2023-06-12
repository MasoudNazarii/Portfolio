export function Navbar() {
    return(
        <>
            <nav className="navbar">
                <div className="left-items">
                    <a href="#Home">Home</a>
                    <a href="#Contact">Contact</a>
                    <a href="#About">About</a>
                </div>
                <div className="right-items">
                    <img
                    className="logo"
                    src="../../../images/New Project.png"
                    onmouseover="this.src='../../../images/New Project-light.png';"
                    onmouseout="this.src='../../../images/New Project.png';"
                    alt="logo"
                    />
                </div>
            </nav>
        </>
    );
}

export function Container() {
    return(
        <>
            <div className="container">
                <section id="Home" className="s1">
                    <h1>Hi, I'm Masoud</h1>
                    <h2>a frontend developer.</h2>
                </section>
                <section id="About" className="s2">
                    <img
                    className="prof"
                    src="../../../images/sina-rezakhani-0FpRnQl0IfE-unsplash.jpg"
                    alt="proftest"
                    />
                    <div className="about">
                    <h3>About</h3>
                    <div id="changeText" style={{ color: "rgb(219, 143, 0)" }} />
                    <p style={{ color: "rgb(172, 172, 172)" }}>
                        My name is Masoud Nazari. I'm new frontend developer from Isfahan Iran.
                        I learned HTML, CSS, I'm currently learning JavaScript and I've done
                        some projects you can see it{" "}
                        <a id="link-p" href="#Projects">
                        here
                        </a>
                        .
                    </p>
                    </div>
                </section>
                <section id="Projects" className="s3">
                    <h3 className="pro-h">Projects</h3>
                    <div className="slideshow-container">
                    <div className="slides fade">
                        <img
                        className="slide-img"
                        src="../../../images/WeatherApp.png"
                        alt="Weather-App"
                        />
                        <div className="overlay">
                        <div className="info">
                            Just a simple weather app website if you want go check it. :)
                        </div>
                        </div>
                        <p className="caption">Wheather App</p>
                    </div>
                    <div className="slides fade">
                        <img
                        className="slide-img"
                        src="../../../images/Calculator.png"
                        alt="Calculator"
                        />
                        <div className="overlay">
                        <div className="info">another simple project a calculator.</div>
                        </div>
                        <p className="caption">Calculator</p>
                    </div>
                    <a className="prev" onclick="plusSlides(-1)">
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />U+276e
                    </a>
                    <a className="next" onclick="plusSlides(1)">
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />U+276f
                    </a>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}

export function Sections() {
    return(
        <>

        </>
    );
}

export function Footer() {
    return(
        <>
            <footer id="Contact">
                <h3>Contact</h3>
                <p>For contact to me check out links below.</p>
                <div className="links">
                    <a href="null">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={25}
                        height={25}
                        fill="currentColor"
                        className="bi-discord icons"
                        viewBox="0 0 16 16"
                    >
                        <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                    </svg>
                    </a>
                    <a href="https://github.com/MasoudNazarii">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={25}
                        height={25}
                        fill="currentColor"
                        className="bi-github icons"
                        viewBox="0 0 16 16"
                    >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    </a>
                    <a href="null">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={25}
                        height={25}
                        fill="currentColor"
                        className="bi-envelope icons"
                        viewBox="0 0 16 16"
                    >
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg>
                    </a>
                </div>
            </footer>

        </>
    );
}

export default function All() {
    return(
        <>
            <Navbar />
            <Container />
        </>
    );
}