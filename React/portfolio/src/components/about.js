import React from 'react';
import Typewriter from 'typewriter-effect';
import Images from '../images/index.js';

export default function About() {
    return(
        <>
            <img
            className="prof"
            src={Images.Sina}
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
                My name is Masoud Nazari. I'm new frontend developer from Isfahan Iran.
                I learned HTML, CSS, I'm currently learning JavaScript and I've done
                some projects you can see it{" "}
                <a id="link-p" href="#Projects">
                here
                </a>
                .
            </p>
            </div>
        </>
    );
}