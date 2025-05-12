"use client";

import React from 'react';
import { useTypewriter, Cursor } from 'nextjs-simple-typewriter';

const TypewriterComponent = () => {
    const [text] = useTypewriter({
        words: ['Welcome to Next.js', 'Creating Typewriter Effects', 'Enjoy Coding!', 'Ankur Das'],
        loop: Infinity,
        typeSpeed: 100,
        deleteSpeed: 50,
        delaySpeed: 2000,
    });

    return (
        <div className='typewriterContainer'>
            <h1 className='typewriterText'>{text}</h1>
            <span className='cursor'>
                <Cursor cursorStyle="|" />
            </span>
        </div>
    );
};

export default TypewriterComponent;