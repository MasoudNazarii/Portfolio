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
            <h3>ABOUT</h3>
            <div id="changeText">
                <Typewriter 
                    options={{
                        strings: ['Programer', 'Developer', 'Student', 'Front-end Developer'],
                        loop: true,
                        autoStart: true
                    }}
                    
                />
            </div>
            <p>
                I am Masoud, a passionate front-end developer.<br/>I have experience with HTML, CSS, and JavaScript,<br/>and I have worked on several projects.<br/>
                Right now, I am learning React.js to expand my skills.<br/>
                Feel free to check out some of my projects at{" "}
                <a id="link-p" href="#Projects">
                    here
                </a>.
            </p>
            </div>
        </>
    );
}