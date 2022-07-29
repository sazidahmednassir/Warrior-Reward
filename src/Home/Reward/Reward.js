import React from 'react';
import reward from '../../Images/User/Reward.png';
import slider from '../../Images/User/slider.png';
import './Reward.css';

const Reward = () => {
    return (
        <div>
                 <div className='quiz-reward'>
            <div className='reward-img'>
            <img src={reward} alt="" />
            </div>
          
            <div className='content'>
                <span className='head-reward'>কুইজার্স রিওয়ার্ড</span>
                <span className='quiz-content1'>অর্জন করে লুফে নাও দারুন সব</span>
                <span className='quiz-content2'>আকর্ষণীয় অফার</span>
                <button className='quiz-button'>ক্লিক কর</button>
            </div>

           
        </div>
        <div className='slider'>
            <img src={slider} className='slider-img' alt="" />
            
        </div>
        </div>
   
    );
};

export default Reward;