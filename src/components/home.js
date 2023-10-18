import React from 'react';
import Typewriter from 'typewriter-effect';


export default function Home() {
    return(
        <>
            <div className="text">
                <Typewriter 
                    onInit={(typewriter) => {
                        typewriter
                            .pauseFor(1000)
                            .typeString("Front-end Web Development")
                            .start();
                    }}
                />
            </div>
        </>
    );
}