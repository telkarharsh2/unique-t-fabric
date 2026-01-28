import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import logoImg from '../assets/images/withoutbg.png';
import Hero from '../components/Hero/Hero';
import Facilities from '../components/Facilities/Facilities';
import AboutUs from '../components/AboutUs/AboutUs';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';

import MissionObjectives from '../components/MissionObjectives/MissionObjectives';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      

      <Navbar />
      <Hero />
      <Facilities />
      <AboutUs />
      <WhyChooseUs />
      <MissionObjectives />
      <Footer />
    </>
  );
};

export default Home;