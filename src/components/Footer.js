import React from 'react'
import { Button } from './Button'
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-sub'>
                <p className='footer-sub-head'>
                    Wanna leave a comment on my webpage?
                </p>
                <p className='footer-sub-text'>
                    it takes 5 seconds
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder='your Email' className='footer input'></input>
                        <Button buttonStyle='btn--outline'>SUBSCRIBE!</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About me</h2>
                        <Link to='sign-up'>Leave a comment!</Link>
                        <Link to='sign-up'>My Github account</Link>
                        <Link to='sign-up'>My Linkedin account</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About me</h2>
                        <Link to='sign-up'>Leave a comment!</Link>
                        <Link to='sign-up'>My Github account</Link>
                        <Link to='sign-up'>My Linkedin account</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About me</h2>
                        <Link to='sign-up'>Leave a comment!</Link>
                        <Link to='sign-up'>My Github account</Link>
                        <Link to='sign-up'>My Linkedin account</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            Hello <i className='fab fa-typo3' />
                        </Link>
                    </div>
                    <small className='Credit of website'>I made everything in this website, including styling, images, videos and functionality</small>
                    <div className='social-icons'>
                        <Link className='social-icon-link linkedin'
                        to='/'
                        target='_blank'
                        aria-label='Linkedin'
                        >
                            <i className='fab fa-linkedin'></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer