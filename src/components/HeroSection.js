import React from 'react'
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';
import vid from '../assets/videos/y2mate.com - Free Plexus 4K Motion Background Loop_1080p.mp4'

function HeroSection() {
  return (
    <div className='hero-container'>
       <video src={vid} autoPlay loop muted />
      <h1>Hi!</h1>
      <p>My name is Mathias ask me anything at mathias344@live.no</p>
      <div className="hero-btns">
        <Button className='btns' buttonStyle='btn--outline' value='https://github.com/Mataiaz'
        buttonSize='btn--large'>
          my github account!
        </Button>
        <Button className='btns' buttonStyle='btn--primary'
        buttonSize='btn--large'>
          Why you should hire me <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;