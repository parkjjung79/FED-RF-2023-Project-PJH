// jh_PJ2 상단영역 공통 컴포넌트

import { Link } from "react-router-dom";
import React, { useState } from 'react'
import "../css/core.css";

// 컨텍스트 API
import { shpCon } from "./shopContext";
import { useContext } from "react";
import { Logo } from "../modules/Logo";

export function TopArea() {

  // 햄버거 메뉴 움직이는 함수
  // const HamMenu = () => {
  //   const [isOpen, setIsOpen] = useState(false);
    
  //   const toggleMenu = () => {
  //     setIsOpen(!isOpen);
  //   };
  // }; //////////// HamMenu함수 ////////////
  // window.addEventListener("ham", HamMenu);
  

  return (
    // <!-- 1. 상단영역 -->
    <div id="header">
      <header className="header_menu fix">
        <Link to="/introduce">소개</Link>
        {/* <!-- 1-1.상단메뉴 --> */}
        <div className="tmenu">
          {/* <!-- 1-2.왼쪽메뉴 --> */}
          {/* <input type="checkbox" id="menuicon" />
          <label for="menuicon">
              <span></span>
              <span></span>
              <span></span>
          </label> */}
          <div className="left_menu">
            <div className="ham_menu">
            {/* <div className={"ham_menu ${isOpen ? 'open' : ''}"} onClick={toggleMenu}> */}
              <span className="one"></span>
              <span className="two"></span>
              <span className="three"></span>
            </div>
            {/* <!-- 1-2-1.GNB박스 --> */}
            <nav className="side_wrap on">
              <ul>
                <li>
                  <a href="#">소개</a>
                </li>
                <li>
                  <a href="#">사용법</a>
                </li>
                <li>
                  <a href="#">주요성분</a>
                </li>
                <li>
                  <a href="#">지속가능성 뷰티</a>
                </li>
                <li>
                  <a href="#">리뷰</a>
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

