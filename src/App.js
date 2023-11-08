import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MypageMain from "./components/Mypage/MypageMain";
import Main from "./components/Main";
import FindIdForm from "./components/Client/FindIdForm";
import FindPasswordForm from "./components/Client/FindPasswordForm";
import ChangePasswordForm from './components/Client/ChangePasswordForm';
import TermsofService from './components/Client/TermsOfService';
import Header from "./components/Fix/Header";
import Mypage_Myprofile from "./components/Mypage/Mypage_Myprofile";
import Login from "./components/Client/Login";
import Join from "./components/Client/Join";
import StudyRecruitment from "./components/Study/StudyRecruitment";
import MultiSelect from "./components/Study/MultiSelect";
import ModifyProfile from "./components/Mypage/ModifyProfile";
import Essay from "./components/Mypage/Essay";

function App() {
  return (
    <Router>
      <Header /> {/* 모든 페이지 상단에 헤더를 렌더링합니다 */}
      <div className="main-content">
        {" "}
        {/* 이 div가 헤더와 나머지 컨텐츠 사이의 간격을 조정합니다 */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/recruitment" element={<StudyRecruitment />} />
          <Route path="/mypage" element={<MypageMain />} />
          <Route path="/mypage/myprofile" element={<Mypage_Myprofile />} />
          <Route path="/mypage/myprofile/essay" element={<Essay />} />
          <Route path="/mypage/myprofile/modifyProfile" element={<ModifyProfile />} />
          <Route path="/findId" element={<FindIdForm />} />
          <Route path="/findPassword" element={<FindPasswordForm />} />
          <Route path="/changePassword" element={<ChangePasswordForm/>} />
          <Route path="/termsofService" element={<TermsofService/>} />
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
