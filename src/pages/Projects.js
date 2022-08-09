import React from 'react';
import '../App.css';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import { Button } from '../components/Button';
import { Buttonhref } from '../components/Buttonhref';
import pdf from '../assets/CV - MATHIAS LOMHOLT BJARNASON ENG.pdf'

function Projects() {
  return (
    <>
    <div className='hero-small-container'>
    <h1>
    I can adapt, i will deliver on quality and i will always strive to be a better programmer!
    </h1>
      <p>
        I am currently taking the back-end education course at Noroff that started in august 2022
      </p>
      <div className="hero-btns">
      <Buttonhref className='btns' buttonStyle='btn--outline' hrefvalue='https://github.com/Mataiaz'
        buttonSize='btn--large'>
          my github account!
        </Buttonhref>
        <Buttonhref className='btns' buttonStyle='btn--outline' hrefvalue={pdf}
        buttonSize='btn--large'>
          My CV as a PDF!
        </Buttonhref>
      </div>
    
    </div>
    <Cards/>
      <Footer/>
    </>
  );
}

export default Projects;