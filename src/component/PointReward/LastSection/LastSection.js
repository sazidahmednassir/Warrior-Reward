import React from 'react';
import doc from '../../../Images/Icons/doc.svg';
import question from '../../../Images/Icons/question.svg';
import './LastSection.css';

const LastSection = () => {
  return (
    <div className="last-rule-section">
      <div class="card" className="last-section-width">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div className="rule">
              <div className="img">
                <img src={question} className="question" alt="" />
              </div>
              <div>
                <span className="rule-text">সচরাচর জিজ্ঞাসা</span>
              </div>
            </div>
          </li>
          <li class="list-group-item"><div className="rule">
              <div className="img">
                <img src={doc} className="documents" alt="" />
              </div>
              <div>
                <span className="rule-text">শর্তাবলী</span>
              </div>
            </div></li>
        </ul>
      </div>
    </div>
  );
};

export default LastSection;
