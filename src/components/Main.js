import React from "react";
import Slider from 'react-slick';
import "./style.css";
import Layout from './LayoutGrid';
import Searchbar from './Searchbar';
import Skilldropdown from './Skilldropdown';
import Checkbox from "./Checkbox";

const Main = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'theClass',
        arrows: false
    };
    return (
        <>
            <div className="div-wrapper">
                <div className="group-wrapper">
                    <div className="group">
                        <div className="text-wrapper">ReCode</div>
                        <div className="overlap">
                            <div className="overlap-5">
                                <img className="arrow" alt="Arrow" src="https://c.animaapp.com/zD8ocGVr/img/arrow-21.svg" />
                                <br /><br /><br /><br /><br /><br />
                                <Layout>
                                    <section>
                                        <div
                                            id="slider-container"
                                            class="w-1800px mx-auto 
      mt-12"
                                        >
                                            <Slider {...settings}>
                                                <article
                                                    style={{ display: 'grid !important' }}
                                                    className="shadow-2xl drop-shadow-xl w-80  p-3 rounded-lg  gap-2"
                                                >
                                                    <h2 className="text-2xl font-bold">공지사항</h2>
                                                    <p className="text-gray-800">
                                                        - 자세한 내용은 클릭
                                                    </p>
                                                </article>
                                                <article
                                                    style={{ display: 'grid !important' }}
                                                    className="shadow-2xl drop-shadow-xl w-80  p-3 rounded-lg  gap-2"
                                                >
                                                    <h2 className="text-2xl font-bold">
                                                        채용 공고
                                                    </h2>
                                                    <p className="text-gray-800">
                                                        - 클릭하면 채용 사이트와 연결
                                                    </p>
                                                </article>
                                            </Slider>
                                        </div><br /><br /><br />
                                        <div className="grid grid-rows-1 grid-flow-col">
                                            <Skilldropdown className="inline-block"></Skilldropdown>
                                            <Searchbar className="inline-block"></Searchbar>
                                            {/* <Checkbox className="inline-block"></Checkbox> */}
                                        </div>
                                    </section>
                                </Layout>
                                <div className="view-5">
                                    <div className="overlap-6">
                                        <div className="view-6">
                                            <div className="overlap-group-3">
                                                <div className="ellipse" />
                                                <div className="text-wrapper-5">1</div>
                                            </div>
                                        </div>
                                        <button className="text-wrapper-6 hover:bg-blue-600">마이페이지</button>
                                        <button className="text-wrapper-7 hover:bg-blue-600">알림</button>
                                        <button className="text-wrapper-8 hover:bg-blue-600">로그아웃</button>
                                        <button className="text-wrapper-9 hover:bg-blue-600">채팅</button>
                                        <button className="text-wrapper-10 hover:bg-blue-600">1:1 요청</button>
                                        <button className="text-wrapper-11 hover:bg-blue-600">스터디 목록</button>
                                    </div>
                                    <div className="text-wrapper-12">ReCode</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
