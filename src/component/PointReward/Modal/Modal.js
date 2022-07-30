import React from 'react';
import star from '../../../Images/Images/star.png';
import './Modal.css';

const Modal = () => {
  return (
    <div
      class="modal fade"
      id="rewardModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="rewardModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-end" style={{"padding": 0, "margin":0}}  role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-center" id="rewardModalLabel">
            পর্যাপ্ত পয়েন্ট নেই 

            </h5>
            
          </div>
          <div class="modal-body">
            <img src={star} className='star-image' alt="starimage" />
          </div>
          <div class="modal-footer">
          রিয়ার্ড সংগ্রহ করার জন্য আপনার পয়েন্ট নেই।  নিয়মিত কুইজাস গেম খেলে পয়েন্ট অর্জন করুন 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
