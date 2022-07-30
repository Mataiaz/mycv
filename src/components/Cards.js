import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img from '../assets/images/img1.jpg'
import img1 from '../assets/images/homepage.jpg'
import img2 from '../assets/images/screenshot4.png'


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out my projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img}
              text='Webcrawler'
              label='Java'
              path='/services'
            />
            <CardItem
              src={img2}
              text='My 2D game'
              label='SFML (C++)'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              text='COMING SOON! My personal website'
              label='React (Java Script)'
              path='/services'
            />
            <CardItem
              src={img1}
              text='My pc application'
              label='Flutter (Dart)'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='COMING SOON! My mobile application'
              label='Flutter (Dart)'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;