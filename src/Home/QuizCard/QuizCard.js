import React from 'react';
import arrow from '../../Images/Icons/arrow.svg';
import bangladesh from '../../Images/User/bangladesh.png';
import book from '../../Images/User/books.png';
import bulb from '../../Images/User/bulb.png';
import globe from '../../Images/User/globe.png';
import voltage from '../../Images/User/high.png';
import medal from '../../Images/User/Medal.png';
import './QuizCard.css';

const QuizCard = () => {
  return (
    <div>
      <div className="headLine">
        <span className="head-section">কুইজ ক্যাটাগরি পছন্দ করুন</span>

        <img src={arrow} className="arrow" alt="arrow-icon" />
      </div>
      <div className="card-container">
        <div className="card sp">
          <img src={medal} alt="medal" />
          <span>খেলাধুলা</span>
        </div>
        <div className="card sp">
          <img src={book} alt="medal" />
          <span>তথ্যমূলক</span>
        </div>
        <div className="card sp">
          <img src={bulb} alt="medal" />
          <span>গুগলি</span>
        </div>
        <div className="card sp">
        <img src={globe} alt="medal" />
          <span>আন্তর্জাতিক</span>
        </div>
        <div className="card sp">
        <img src={bangladesh} alt="medal" />
          <span>বাংলাদেশ</span>
        </div>
        <div className="card sp">
        <img src={voltage} alt="medal" />
          <span>এন্টারটেইন</span>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
