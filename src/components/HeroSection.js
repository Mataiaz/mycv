import React from 'react'
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';
import vid from '../assets/videos/video-1.mp4'

function HeroSection() {
  return (
    <div className='hero-container'>
       <video src={vid} autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button className='btns' buttonStyle='btn--outline'
        buttonSize='btn--large'>
          a
        </Button>
        <Button className='btns' buttonStyle='btn--primary'
        buttonSize='btn--large'>
          b <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;