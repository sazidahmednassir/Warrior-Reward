import React from 'react';
import trophy from '../../../Images/Icons/tr.svg';
import dash from '../../../Images/Images/dash.png';
import header from '../../../Images/Images/header.png';
import user from '../../../Images/Images/user.png';
import './Header.css';

const FirstSection = () => {
  return (
    <div className="section">
      <img src={header} className='header-image' alt="header" />
      <div className="content">
      <img src={user} className="user" alt="user" />
      <div className='info'>
        <span className='userName'>ইশতিয়াক</span>
      <span className='userLevel'>Level-Warrior</span>
      </div>
 
    
     <div className='reward'>
        <img src={trophy} alt="" />
        

        <div>
            <span className='rewardText'>রিওয়ার্ড</span>
            </div>
     </div>
      
      </div>
     
      <div className="dash">
        <img src={dash} className='dash-img' alt="" />
      </div>

      
      
    </div>
  );
};

export default FirstSection;
