import React from 'react';
import Typewriter from 'typewriter-effect';
import Images from '../images/index.js';

export default function About() {
    return(
        <>
            <img
            className="prof"
            src={Images.Prof}
            alt="proftest"
            />
            <div className="about">
            <h3>About</h3>
            <div id="changeText" style={{ color: "rgb(219, 143, 0)" }} >
                <Typewriter 
                    options={{
                        strings: ['Programer', 'Gamer', 'Student'],
                        loop: true,
                        autoStart: true
                    }}
                    
                />
            </div>
            <p style={{ color: "rgb(172, 172, 172)" }} >
                Hello, I'm Masoud Nazari, a beginner front-end developer. I have experience with HTML, CSS, and JavaScript, and I've worked on several projects.<br/>
                Right now, I'm learning React.js to expand my skills.<br/>
                Feel free to check out some of my projects at{" "}
                <a id="link-p" href="#Projects">
                    here
                </a>.
            </p>
            </div>
        </>
    );
}