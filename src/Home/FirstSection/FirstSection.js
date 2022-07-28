import React from 'react';
import trophy from '../../Images/Icons/tr.svg';
import user from '../../Images/User/user.png';
import './FirstSection.css';
const FirstSection = () => {
  return (
    <div className="section">
      
      <div className="content">
      <img src={user} className="user" alt="user" />
      <div className='info'>
        <span className='userName'>ইশতিয়াক</span>
      <span className='userLevel'>Level-Warrior</span>
      </div>
      <div className='circle'>
        
      </div>
     <div className='reward'>
        <img src={trophy} alt="" />
        

        <div>
            <span className='rewardText'>রিওয়ার্ড</span>
            </div>
     </div>
      
      </div>
    </div>
  );
};

export default FirstSection;
