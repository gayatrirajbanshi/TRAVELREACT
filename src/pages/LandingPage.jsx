
import CTA from '@/components/landingComponents/CTA';
import FamousTrips from '@/components/landingComponents/FamousTrips';
import Features from '@/components/landingComponents/Features';
import Footer from '@/components/landingComponents/Footer';
import Hero from '@/components/landingComponents/Hero';
import Navbar from '@/components/landingComponents/Navbar';
import Testimonials from '@/components/landingComponents/Testimonials';
import useAuth from '@/hooks/useAuth';

import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {

  const navigate = useNavigate();
  const { token } = useAuth();

  useEffect(() =>{
    if(token) {
      navigate("/dashboard");
    }
  },[])
   
  
  return (
      <> 
        <Navbar />
        <Hero />
        <Features />
        <FamousTrips />
        <Testimonials />
        <CTA />
        <Footer />

      </>
  )
}

export default LandingPage