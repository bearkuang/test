import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MypageMain from "./components/MypageMain";
import Mypageprivate from "./components/Mypageprivate";
import Practice from "./components/practice";
import Main from "./components/Main";
import FindIdForm from "./components/FindIdForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/mypage" element={<MypageMain />} />
        <Route path="/private" element={<Mypageprivate />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/findId" element={<FindIdForm />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
