import React from 'react';
import right from '../../../Images/Icons/round-right-arrow.svg';
import './PointRules.css';

const PointRules = () => {
  return (
    <div className="rules-section">
      <div class="card card-width">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div className="rule">
              <div className="img">
                <img src={right} className="right-arrow" alt="" />
              </div>
              <div>
                <span className="rule-text">
                  নিয়মিত কুইজার্স গেম খেলে পয়েন্ট অর্জন করুন
                </span>
              </div>
              
            </div>
           
          </li>
          <li class="list-group-item">
            <div className="rule">
              <div className="img">
                <img src={right} className="right-arrow" alt="" />
              </div>
              <div>
                <span className="rule-text">
                  বিস্তারিত দেখতে আপনার কুইজার্স রিওয়ার্ড এ ট্যাপ করুন
                </span>
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <div className="rule">
              <div className="img">
                <img src={right} className="right-arrow" alt="" />
              </div>
              <div>
                <span className="rule-text special-text">
                  পয়েন্ট ব্যবহার করে বিভিন্ন রিওয়ার্ড সংগ্রহ করুন 
                </span>
                <br />
                <span className='special-text'>এবং তার সুবিধা
                  উপভোগ করুন</span>
              </div>
            </div>
          </li>
          <li class="list-group-item"><div className="rule">
              <div className="img">
                <img src={right} className="right-arrow" alt="" />
              </div>
              <div>
                <span className="rule-text special-text">
                পরবর্তী রিওয়ার্ড লেভেল এবং দারুন সব অফার

                </span>
                <br />
                <span className='special-text'>আনলক করতে বেশি বেশি পয়েন্ট অর্জন করুন</span>
              </div>
            </div></li>
        </ul>
      </div>
 
    </div>
  );
};

export default PointRules;
