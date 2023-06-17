import Images from '../images/index.js';

export default function Projects() {
    return(
        <>
            <h3 className="pro-h">Projects</h3>
            <div className="slideshow-container">
                <div className="slides fade">
                    <img
                    className="slide-img"
                    src={Images.WeatherApp}
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
                    src={Images.Calculator}
                    alt="Calculator"
                    />
                    <div className="overlay">
                        <div className="info">another simple project a calculator.</div>
                    </div>
                    <p className="caption">Calculator</p>
                </div>
                
            </div>
        </>
    );
}