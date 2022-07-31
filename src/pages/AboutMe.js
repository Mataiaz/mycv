import React from 'react';
import '../App.css';
import Footer from '../components/Footer';
import vid from '../assets/videos/y2mate.com - Free Plexus 4K Motion Background Loop_1080p.mp4'
import { Button } from '../components/Button';

function AboutMe() {
  return (
    <>
      <div className='hero-container'>
       <video src={vid} autoPlay loop muted />
      <h1>Hi!</h1>
      <p>My name is Mathias and i love programming</p>
      <p>I have experience in React (java script), Flutter (dart), c/c++, SFML (c++), Java, Firebase and Git</p>
      <p></p>
      <p></p>
      <p>I speak norwegian and english</p>
      <p>My hobby is animation and i also love to challenge myself to new things</p>
      <div className="hero-btns">
        <Button className='btns' buttonStyle='btn--primary' value ='/projects'
        buttonSize='btn--large'>
          Check out my projects!
        </Button>
      </div>
    </div>
      <Footer/>
    </>
  );
}

export default AboutMe;