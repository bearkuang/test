import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MypageMain from "./components/MypageMain";
import Mypageprivate from "./components/Mypageprivate";
import Practice from "./components/practice";
import Main from "./components/Main";
import FindIdForm from "./components/FindIdForm";
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header /> {/* 모든 페이지 상단에 헤더를 렌더링합니다 */}
      <div className="main-content"> {/* 이 div가 헤더와 나머지 컨텐츠 사이의 간격을 조정합니다 */}
        <Routes>
          <Route path="/mypage" element={<MypageMain />} />
          <Route path="/private" element={<Mypageprivate />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/findId" element={<FindIdForm />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
