import React from "react";
import Images from "../images";
import 'react-slideshow-image/dist/styles.css';
import {Slide} from 'react-slideshow-image';

  
const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
}

const slideContents = [
    {
        image: Images.WeatherApp,
        alt:'weatherapp',
        info: 'Just a simple weather app website if you want go check it. :)',
        caption: 'Weather App'
    },
    {
        image: Images.Calculator,
        alt:'calculator',
        info: 'another simple project a calculator.',
        caption:'Calculator'
    }

];

export default function Slides() {
    return(
        <>  
            <div className="slide-container">
                <Slide autoplay={false}>
                    {slideContents.map((slidecontent, index)=> (
                        <div key={index}>
                            <div style={{...divStyle}}>
                                <img
                                className="slide-img"
                                src={slidecontent.image}
                                alt={slidecontent.alt}
                                />
                                <div className="overlay">
                                    <div className="info">{slidecontent.info}</div>
                                </div>
                                <p className="caption">{slidecontent.caption}</p>
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>
        </>
    );
}