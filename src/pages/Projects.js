import React from 'react';
import '../App.css';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import { Button } from '../components/Button';

function Projects() {
  return (
    <>
    <div className='hero-small-container'>
    <h1>
    I can adapt, i will deliver on quality and i will always strive to be a better programmer!
    </h1>
      <p>
        I am currently taking the education course at Noroff that started in august 2022 in backend-development
      </p>
    <Button className='btns' buttonStyle='btn--outline' value='https://github.com/Mataiaz'
        buttonSize='btn--large'>
          my github account!
        </Button>
    </div>
    <Cards/>
      <Footer/>
    </>
  );
}

export default Projects;