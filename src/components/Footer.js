import React from 'react'
import { Button } from './Button'
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-sub'>
                <div className='input-areas'>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About me</h2>
                        <a href='https://github.com/Mataiaz'>My Github account</a>
                        <a href='https://www.linkedin.com/in/mathias-bjarnason-946187231/'>My Linkedin account</a>
                    </div>
                </div>
            </div>
            <small className='credit-of-website'>I made everything in this website, including styling, images and functionality</small>
            <small className='credit-of-website'>Only exception is the looping royal-free video in the background</small>
        </div>
    )
}

export default Footer