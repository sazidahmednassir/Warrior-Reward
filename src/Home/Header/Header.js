import React from 'react';
import trophy from '../../Images/Icons/tr.svg';
import dash from '../../Images/User/dash.png';
import backgroundelipse from '../../Images/User/fi.svg';
import user from '../../Images/User/user.png';
import './Header.css';

const FirstSection = () => {
  return (
    <div className="section">
      
      <div className="content">
      <img src={user} className="user" alt="user" />
      <div className='info'>
        <span className='userName'>ইশতিয়াক</span>
      <span className='userLevel'>Level-Warrior</span>
      </div>
      <div className='backgroundelipse'>
        <img className='backgroundelipse--img' src={backgroundelipse} alt=""/>
      </div>
    
     <div className='reward'>
        <img src={trophy} alt="" />
        

        <div>
            <span className='rewardText'>রিওয়ার্ড</span>
            </div>
     </div>
      
      </div>
      {/* <div className="rewardPoint">
        <div className='levelPoint'>
            <span className='rewardLevel'>আপনার লেভেল :  Warrior</span>
           <img src={point} alt="" />
        </div>
        <div className='bigTrophy'>
            <img src={big} className='big' alt="" />
            <img src={bigdown} className='bigDown' alt="" />

        </div>
        
      </div> */}
      <div className="dash">
        <img src={dash} className='dash-img' alt="" />
      </div>

      
      
    </div>
  );
};

export default FirstSection;
