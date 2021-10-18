import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import Counter from '../Counter/Counter';
import Digital from '../Digital/Digital';
import './About.css';
const About = () => {
    return (
        <div>
            <Header></Header>
            <Digital></Digital>
            <Counter></Counter>
            <Footer></Footer>
        </div>
    );
};

export default About;