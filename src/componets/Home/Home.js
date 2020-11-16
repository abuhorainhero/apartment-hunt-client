import React from 'react';
import MainContent from './MainContent/MainContent';
import Navbar from './Navbar/Navbar';
import './Home.css';
import Rent from './Rent/Rent';
import Services from './Services/Services';
import Footer from './Footer/Footer';

const Home = () => {
    return (
        <div>
          <Navbar></Navbar>
          <MainContent></MainContent>
          <Rent></Rent>
          <Services></Services>
          <Footer></Footer>
        </div>
    );
};

export default Home;