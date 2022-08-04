import React from 'react';
import { useEffect } from 'react';
import '../App.css';
import HeroSection from '../components/HeroSection';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import CommentDetails from '../components/CommentDetails';
import CommentForm from '../components/CommentForm';
import { useCommentsContext } from '../hooks/useCommentsContext'

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;