import React from 'react';
import Hero from './Hero.jsx';
import Awards from './Awards.jsx';
import States from './States.jsx';
import Pricing from './Pricing.jsx';
import Education from './Education.jsx';
import OpenAccount from '../OpenAccount.jsx';
import Navbar from '../Navbar.jsx';
import Footer from '../Footer.jsx';



function HomePage() {
    return (  <>
    
    <Hero></Hero>
    <Awards></Awards>
    <States></States>
    <Pricing></Pricing>
    <Education></Education>
    <OpenAccount></OpenAccount>
    
    </>);
}

export default HomePage;