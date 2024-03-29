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
        info: 'Weather app website if you want go check it. :)',
        caption: 'Weather App',
        link: 'https://masoudnazarii.github.io/Weather-App/'
    },
    {
        image: Images.Calculator,
        alt:'calculator',
        info: 'Simple project a calculator.',
        caption:'Calculator',
        link: 'https://masoudnazarii.github.io/Calculator/'
    }
];

export default function Slides() {
    return(
        <>  
            <div className="slide-container">
                <Slide autoplay={false}>
                    {slideContents.map((slidecontent, index)=> (
                        <div className="slides" key={index}>
                            <div style={{...divStyle}}>
                                <img
                                className="slide-img"
                                src={slidecontent.image}
                                alt={slidecontent.alt}
                                />
                                <div className="overlay">
                                    <div className="info">{slidecontent.info}</div>
                                    <div><a className="link" href={slidecontent.link} 
                                            target="_blank" rel="noreferrer">Click here</a></div>
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