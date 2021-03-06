import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import Blog from '../Blog/Blog';
import Pricing from '../Pricing/Pricing';
import Queries from '../Queries/Queries';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';
import './Home.css';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <Services></Services>
            <Pricing></Pricing>
            <Blog></Blog>
            <Queries></Queries>
            <Footer></Footer>
        </div>
    );
};

export default Home;