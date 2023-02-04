import React, {useState} from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Service from '../components/Service';
import {  
        homeObjOne, 
        homeObjTwo,
        homeObjThree,
        homeObjFour
      } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar'; 
import Footer from '../components/Footer';
  
const Home = () => {
    const[isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <Service />
      <Footer />
    </>
  );
};

export default Home;
