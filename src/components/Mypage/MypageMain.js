import React from "react";
import "../style.css";

const MypageMain = () => {
    return (
      <>
      <div className="div-wrapper">
          <div className="group-wrapper">
              <div className="group">
                  <div className="overlap">
                          <img className="arrow" alt="Arrow" src="https://c.animaapp.com/zD8ocGVr/img/arrow-21.svg" />
                          <div className="frame-3">
                              <img className="account" alt="Account" src="https://c.animaapp.com/zD8ocGVr/img/account-1.png" />
                              <button class="text-wrapper-13 hover:bg-blue-600">홈</button>
                              <button class="text-wrapper-14 hover:bg-blue-600">개인 정보</button>
                              <img className="profile" alt="Profile" src="https://c.animaapp.com/zD8ocGVr/img/profile-1@2x.png" />
                          </div>
                      </div>
                  </div>
                  <div className="frame-4">
                          <div className="text-wrapper-15">김아무개님 환영합니다.</div>
              </div>
          </div>
      </div></>
      );
    };

export default MypageMain;