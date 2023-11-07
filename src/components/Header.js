import React from "react";
import "./style.css";

const Main = () => {
    return (
            <div className="div-wrapper">
                <div className="group-wrapper-header">
                    <div className="group">
                        <div className="text-wrapper">ReCode</div>
                        <div className="overlap">
                                <img className="arrow" alt="Arrow" src="https://c.animaapp.com/zD8ocGVr/img/arrow-21.svg" />
                                <div className="view-5">
                                    <div className="overlap-6">
                                        <div className="view-6">
                                            <div className="overlap-group-3">
                                                <div className="ellipse" />
                                                <div className="text-wrapper-5">1</div>
                                            </div>
                                        </div>
                                        <button class="text-wrapper-6 hover:bg-blue-600">마이페이지</button>
                                        <button class="text-wrapper-7 hover:bg-blue-600">알림</button>
                                        <button class="text-wrapper-8 hover:bg-blue-600">로그아웃</button>
                                        <button class="text-wrapper-9 hover:bg-blue-600">채팅</button>
                                        <button class="text-wrapper-10 hover:bg-blue-600">1:1 요청</button>
                                        <button class="text-wrapper-11 hover:bg-blue-600">스터디 목록</button>
                                    </div>
                                    <div className="text-wrapper-12">ReCode</div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Main;
