// jh_PJ2 상단영역 공통 컴포넌트

import React, { useContext, useState } from 'react'
import "../css/core.css";

import $ from "jquery";

// 컨텍스트 API
import { shpCon } from "./shopContext";
import { Logo } from "../modules/Logo";

export function TopArea() {
  const myCon = useContext(shpCon);

  const [isSideMenuOpen, setSideMenuOpen] = useState(false);

  const handleHamClick = () => {
    setSideMenuOpen(!isSideMenuOpen);
  };

  const sideWrapStyle = {
    left: isSideMenuOpen ? 0 : -500,
  };

  const oneStyle = {
    transform: isSideMenuOpen ? 'translateY(20px) rotate(45deg)' : '',
  };

  const twoStyle = {
    opacity: isSideMenuOpen ? 0 : 1,
  };

  const threeStyle = {
    transform: isSideMenuOpen ? 'translateY(-15px) rotate(-45deg)' : '',
  };

  const moveToSec = (e) => {
    e.preventDefault();
    const tg = $(e.currentTarget);
      console.log(tg);
      let pos = $(tg.attr('href')).offset().top;
      let upNum = tg.attr('data-pos').split(',');
      // pgNum 업데이트
      myCon.pgNum.current = upNum[1];
      // scNum 업데이트
      myCon.scNum.current = upNum[0];

      console.log('이동시 업데이트:',myCon.scNum.current,myCon.pgNum.current);

      $('html,body').animate({
        scrollTop:pos+"px"
      },600)
  }
  
  return (
    // <!-- 1. 상단영역 -->
    <div id="header">
      <header className="header_menu fix">
        {/********************* 서브페이지 *********************/}
        {/* <Link to="/introduce">소개</Link> */}
        {/* <!-- 1-1.상단메뉴 --> */}
        <div className="tmenu">
          {/* <!-- 1-2.왼쪽메뉴 --> */}
          <div className="left_menu">
            <div className="ham_menu" onClick={handleHamClick}>
              <span className="one" style={oneStyle}  ></span>
              <span className="two" style={twoStyle} ></span>
              <span className="three" style={threeStyle} ></span>
            </div>
            {/* <!-- 1-2-1.GNB박스 --> */}
            <nav className="side_wrap" style={sideWrapStyle}>
              <ul>
                <li>
                  <a href=".pt2" data-pos="1,1" onClick={moveToSec}>소개</a>
                </li>
                <li>
                  <a href=".pt3" data-pos="4,2" onClick={moveToSec}>사용법</a>
                </li>
                <li>
                  <a href=".pt4" data-pos="5,3" onClick={moveToSec}>주요성분</a>
                </li>
                <li>
                  <a href=".pt5" data-pos="6,4" onClick={moveToSec}>지속가능성 뷰티</a>
                </li>
                <li>
                  <a href=".pt6" data-pos="7,5" onClick={moveToSec}>리뷰</a>
                </li>
              </ul>
            </nav>
          </div>
          {/* <!-- 1-3.로고박스 --> */}
          {/* <h1 className="logo"
          onClick={()=> shpCon.chgPage('/', {})}>
              <img src="./images/logo_w.png" alt="메인로고" />
           
            </h1> */}
            <Logo />
            {/* </a> */}
          
          {/* <!-- 1-4.오른쪽메뉴 --> */}
          <div className="right_menu">
            <div className="icons">
              <div className="search">
                <a href="#">
                  <img src="./images/icon_search_w.svg" alt="search" />
                </a>
              </div>
              <div className="member">
                <a href="#">
                  <img src="./images/icon_mypage_w.svg" alt="member" />
                </a>
              </div>
              <div className="spbasket">
                <a href="#">
                  <img src="./images/icon_cart_w.svg" alt="spbasket" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

