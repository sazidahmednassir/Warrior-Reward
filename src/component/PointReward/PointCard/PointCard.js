import React from 'react';
import lock from '../../../Images/Icons/lock.svg';
import play from '../../../Images/Icons/play.svg';
import reward from '../../../Images/Icons/reward-icon.svg';
import Modal from '../Modal/Modal';
import './PointCard.css';

const PointCard = () => {
    return (
        <div>
        <div className='card-header-content'>
            <span className='first-content'>পয়েন্ট রিওয়ার্ড</span>
            <span className='second-content'> সব দেখুন</span>
        </div>
        <div className='point-card'>
            <div className='point-single-card'>
                <img src={reward} alt="reward-icon" />
                <div className='point-content'>
                <span className='point-header-content'>মোবাইল রিচার্জ ২০ টাকা </span>
                <span className='points'>১০০০ পয়েন্ট</span>
                </div>
                
                <button className='point-button'>সংগ্রহ করুন </button>
            </div>
            <div className='point-single-card'>
            <img src={lock} alt="reward-icon" />
                <div className='point-content'>
                <span className='point-header-content'>মোবাইল রিচার্জ ৫০ টাকা </span>
                <span className='points'>১৫০০ পয়েন্ট</span>
                </div>
                
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#rewardModal" className='point-button special-button'>সংগ্রহ করুন </button>
            </div>
            <Modal/>
            <div className='point-single-card'>
            <img src={play} alt="reward-icon" />
                <div className='point-content'>
                <span className='point-header-content'>যেভাবে কাজ করে</span>
                <span className='points special'>বিস্তারিত দেখতে ক্লিক করুন</span>
                </div>
                
                <button className='point-button'>ভিডিও দেখুন </button>
            </div>
        </div>
        </div>
    );
};

export default PointCard;