import React from 'react';
import Hero from '../components/Hero/Hero';
import HowToPlay from '../components/HowToPlay/HowToPlay';
import About from '../components/About/About';
import Social from '../components/Social/Social';

const Main = () => {
    return (
        <>
            <Hero></Hero>
            <HowToPlay></HowToPlay>
            <About></About>
            <Social></Social>
        </>
    );
}

export default Main;
