// jh_PJ2 메인페이지 Part5 컴포넌트 - 제품추천

// Part5 css 불러오기
import { useEffect } from "react";
import "../css/part5.css";


import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

//// Part5 컴포넌트 /////////////
export function Part5() {
  return(
    <>
    <h1>YOU MAY ALSO LIKE</h1>
    <div className="product">
      <div className="pro1">
        <div className="thumbnail">
          <img src="./images/product1.jpg" alt="제품1" />
        </div>
        <div className="name">
          제품명
        </div>
        <div className="price">
          가격
        </div>
      </div>

      <div className="pro2">
        <div className="thumbnail">
          <img src="./images/product1.jpg" alt="제품1" />
        </div>
        <div className="name">
          제품명
        </div>
        <div className="price">
          가격
        </div>
      </div>

      <div className="pro3">
        <div className="thumbnail">
          <img src="./images/product1.jpg" alt="제품1" />
        </div>
        <div className="name">
          제품명
        </div>
        <div className="price">
          가격
        </div>
            </div>
      </div>
    </>
  )
} /////////// Part5 컴포넌트 ///////////
