// src/FindEmailForm.js
import React, { useState } from 'react';
import "./FindEmailForm.css";

function FindEmailForm() {
  const [userId, setUserId] = useState('');

  const handleFindEmail = () => {
    // Implement find email logic or navigate to the find email page
    console.log('Find email request for:', userId);
    // Code to send userId to the server and find associated email would go here
  };

  return (
    <div className="div-wrapper">
      <div className="div">
        <div className="text-wrapper">ReCode</div>
        <div className="view">
          <div className="text-wrapper-2">아이디를 입력해주세요</div>
          <div className="text-wrapper-3">취소</div>
          <div className="overlap">
            <img className="rectangle" alt="Rectangle" src="rectangle-52.svg" />
            <div className="text-wrapper-4">다음</div>
          </div>
          <div className="text-wrapper-5">ReCode</div>
          <div className="frame">
            <div className="overlap-group">
              <div className="text-wrapper-6">kim1234</div>
            </div>
            <div className="text-wrapper-7">아이디</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindEmailForm;
