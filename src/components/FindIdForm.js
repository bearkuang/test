// src/FindIdForm.js
import React, { useState } from 'react';
import "./FindIdForm.css"


function FindIdForm() {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // 여기에 아이디 찾기 로직을 구현하거나 백엔드 서버로 요청을 보내는 코드를 작성합니다.
    console.log('ID 찾기 요청:', { nickname, email });
    // 예를 들어 서버로 요청을 보내고 결과를 처리하는 코드:
    // fetch('/api/find-id', { method: 'POST', body: JSON.stringify({ nickname, email }) })
    //   .then(response => response.json())
    //   .then(data => console.log(data));
  };

  return (
    <div className="find-id-container">
     
      <form onSubmit={handleSubmit}>
        <h2>아이디 찾기</h2>
        <div className="form-group">
          <label htmlFor="nickname">닉네임</label>
          <input
            type="text"
            id="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">아이디 찾기</button>
      </form>
    </div>
  );
}

export default FindIdForm;
