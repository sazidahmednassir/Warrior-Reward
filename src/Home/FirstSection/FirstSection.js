import React from 'react';
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
     
      
      </div>
    </div>
  );
};

export default FirstSection;
