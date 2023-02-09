import React from 'react';
import Hero from '../components/Hero/Hero';
import HowToPlay from '../components/HowToPlay/HowToPlay';
import About from '../components/About/About';
import About2 from '../components/About2/About2';
import Social from '../components/Social/Social';
import Footer from '../components/UI/Footer/Footer'

const Main = () => {
    return (
        <>
            <Hero></Hero>
            <HowToPlay></HowToPlay>
            <About></About>
            <About2></About2>
            <Social></Social>
            <Footer></Footer>
        </>
    );
}

export default Main;
