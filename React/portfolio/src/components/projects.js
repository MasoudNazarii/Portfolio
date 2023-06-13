

export default function Projects() {
    return(
        <>
            <h3 className="pro-h">Projects</h3>
            <div className="slideshow-container">
            <div className="slides fade">
                <img
                className="slide-img"
                src="/images/WeatherApp.png"
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
                src="/images/Calculator.png"
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
        </>
    );
}