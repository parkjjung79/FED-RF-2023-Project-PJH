// jh_PJ2 메인페이지 Part5 컴포넌트 - 제품추천

// Part5 css 불러오기
import { useEffect } from "react";
import "../css/part5.css";

// 스와이퍼 사용하기
import { SwiperApp } from "../plugin/SwiperApp";

import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

//// Part5 컴포넌트 /////////////
export function Part5() {
  return(
    <>
    <h1>YOU MAY ALSO LIKE</h1>
    {/* Swiper */}
      <div classNameName="swiper mySwiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide"><img src="./images/product1.jpg" alt="제품1" /></div>
          <div classNameName="name">제품명</div>
          <div classNameName="price">가격</div>
        </div>

        <div className="swiper-wrapper">
          <div className="swiper-slide"><img src="./images/product1.jpg" alt="제품1" /></div>
          <div classNameName="name">제품명</div>
          <div classNameName="price">가격</div>
        </div>

        <div className="swiper-wrapper">
          <div className="swiper-slide"><img src="./images/product1.jpg" alt="제품1" /></div>
          <div classNameName="name">제품명</div>
          <div classNameName="price">가격</div>
        </div>
          
        </div>
        {/* 양쪽 이동버튼 */}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        {/* 블릿 인디케이터 */}
        <div className="swiper-pagination"></div>


    {/* <div classNameName="porduct">
      <div classNameName="thumbnail">
        <img src="./images/product1.jpg" alt="제품1" />
      </div>
      <div classNameName="name">
        제품명
      </div>
      <div classNameName="price">
        가격
      </div>

      <div classNameName="thumbnail">
        <img src="./images/product1.jpg" alt="제품1" />
      </div>
      <div classNameName="name">
        제품명
      </div>
      <div classNameName="price">
        가격
      </div>

      <div classNameName="thumbnail">
        <img src="./images/product1.jpg" alt="제품1" />
      </div>
      <div classNameName="name">
        제품명
      </div>
      <div classNameName="price">
        가격
      </div>
    </div> */}
    </>
  )
} /////////// Part5 컴포넌트 ///////////
