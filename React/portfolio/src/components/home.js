import React from 'react';
import Typewriter from 'typewriter-effect';
import Images from '../images/index.js';

export default function Home() {
    return(
        <>
            <div className="text">
                <Typewriter 
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("Hi, I'm Masoud a frontend developer. ")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Welcome.")
                            .start();
                    }}
                />
            </div>
        </>
    );
}