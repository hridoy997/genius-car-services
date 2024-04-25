import React from 'react';
import './Home.css';
import Services from '../Services/Services';
import Experts from '../Experts/Experts';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;