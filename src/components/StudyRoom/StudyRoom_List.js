import React, { useState, useEffect } from "react";
import StudyRoom_Sidebar from "./StudyRoom_Sidebar";




const StudyRoom_List = () => {

    const posts = [
        { id: 1, title: "밥먹으러 가야지", content: "게시글 내용 1", author: "작성자1", date: "2023-11-10", views: 100 },
        { id: 2, title: "게시글 2", content: "게시글 내용 2", author: "작성자2", date: "2023-11-11", views: 150 },
        { id: 3, title: "게시글 3", content: "게시글 내용 3", author: "작성자3", date: "2023-11-12", views: 200 },
        // 추가적인 게시글 데이터 추가
    ];

    return (
        <div>
            <StudyRoom_Sidebar />
            <div className="max-w-screen-md mx-auto p-4">
                <div className="min-h-screen bg-gray-100">
                    <div className="max-w-4xl mx-auto p-6 bg-white rounded-md shadow-md">
                        <h2 className="text-3xl font-bold mb-10">게시판 목록</h2>
                        <ul>
                            {posts.map((post) => (
                                <li key={post.id} className="mb-6 p-4 bg-gray-200 rounded-md">
                                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                                    <div className="flex flex-col sm:flex-row items-center text-gray-600">
                                        <div>
                                            <span className="text-sm mr-0 font-semibold">작성자</span>
                                            <span className="text-sm p-2 pr-6">{post.author}</span>
                                        </div>
                                        <div>
                                            <span className="text-sm mr-0 font-semibold">작성일</span>
                                            <span className="text-sm p-2 pr-6">{post.date}</span>
                                        </div>
                                        <div>
                                            <span className="text-sm mr-0 font-semibold">조회수</span>
                                            <span className="text-sm p-2 pr-6">{post.views}</span>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default StudyRoom_List;