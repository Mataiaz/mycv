import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img from '../assets/images/img1.jpg'
import img1 from '../assets/images/homepage.jpg'
import img2 from '../assets/images/screenshot4.png'
import img3 from '../assets/images/snip3.png'


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
              path='https://github.com/Mataiaz/Website_Crawler'
            />
            <CardItem
              src={img2}
              text='My 2D game'
              label='SFML (C++)'
              path='https://github.com/SirFischer/Skeletons-and-Traps'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img3}
              text='My personal website'
              label='React (Java Script)'
              path='https://github.com/Mataiaz/mycv/tree/master'
            />
            <CardItem
              src={img1}
              text='My pc application'
              label='Flutter (Dart)'
              path='https://github.com/Mataiaz/My-Demo-App'
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