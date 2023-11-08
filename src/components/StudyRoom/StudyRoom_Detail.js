import React from "react";

const StudyRoom_Detail = () => {
    return (
        <div className="study_room">

                <div className="self-stretch h-[1461px] bg-white border-t-2 border-black justify-center items-start inline-flex">
                    <div className="w-[461px] h-[1461px] relative border border-black flex-col justify-start items-start flex">
                        <div className="w-[351px] h-[509px] relative bg-red-600 rounded-[30px] border-2 border-black">
                            <div className="w-[180px] h-[39px] left-[87px] top-[440px] absolute text-black text-2xl font-semibold font-['Inter']">스터디 참가 인원</div>
                            <div className="w-[47px] h-[39px] left-[153px] top-[351px] absolute text-black text-2xl font-semibold font-['Inter']">퀴즈</div>
                            <div className="w-[97px] h-[52px] left-[123px] top-[241px] absolute text-black text-2xl font-semibold font-['Inter']">출석 체크</div>
                            <div className="w-[130px] h-[50px] left-[110px] top-[141px] absolute text-black text-2xl font-semibold font-['Inter']">전체 글 보기</div>
                            <div className="w-[238px] h-11 left-[56px] top-[34px] absolute text-center text-black text-3xl font-bold font-['Inter']">스터디 채팅</div>
                        </div>
                        <div className="pl-[73px] pr-[93px] pt-[30px] pb-[18px] bg-red-600 rounded-[30px] border-2 border-black flex-col justify-end items-center gap-[47px] inline-flex">
                            <div className="w-[185px] h-[35px] text-center text-black text-2xl font-semibold font-['Inter']">관리자</div>
                            <div className="w-[121px] h-[39px] text-black text-2xl font-semibold font-['Inter']">스터디 관리</div>
                        </div>
                    </div>
                    <div className="w-[979px] h-[1461px] relative border-t border-b border-black flex-col justify-start items-start flex">
                        <div className="w-[880px] h-[1311px] relative bg-white rounded-[30px] border-2 border-black" />
                        <div className="w-[129px] h-[31px] bg-white rounded-lg border-2 border-red-600" />
                        <div className="w-[129px] h-[31px] text-center text-red-600 text-[15px] font-normal font-['Itim']">스터디 탈퇴</div>
                    </div>
                </div>
                <div className="w-[1440px] h-[139px] relative bg-white border-t-2 border-black" />
            
        </div>

    );
};

export default StudyRoom_Detail;