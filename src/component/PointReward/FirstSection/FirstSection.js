import React from 'react';
import left from '../../../Images/Icons/left.svg';
import base from '../../../Images/Images/Base.png';
import game from '../../../Images/Images/game.png';
import './FirstSection.css';

const FirstSection = () => {
    return (
        <div>
            <img src={base} className='iphone-base' alt="" />
            <div className='heading-section'>
            <img src={left} className='left-arrow' alt="left-arrow" />
            <span className='heading-two'>পয়েন্ট রিওয়ার্ড</span>
            </div>
            <img src={game} className='game-level' alt="game-level" />
        </div>
    );
};

export default FirstSection;