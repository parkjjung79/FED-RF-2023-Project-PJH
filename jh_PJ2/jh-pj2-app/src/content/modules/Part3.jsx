// jh_PJ2 메인페이지 Part3 컴포넌트

// Part3 css 불러오기
import { useEffect } from "react";
import "../css/part3.css";


import $ from "jquery";
import "jquery-ui-dist/jquery-ui";


export function Part3() {

  useEffect(()=>{
    $(".titlebox3-1-2").click(()=>{
      alert(333);
    })
  },[]);
  return (
    <>
      <section className="pt3-1">
        <div className="ibox">
        <img src="./images/pt3-1.jpg" alt="사용법이미지" />
        </div>
        <div className="titlebox">
          <div className="cbx titlebox3-1-1">
            <p>HOW TO USE</p>
            <p>사용법</p>
          </div>
          <div className="cbx titlebox3-1-2">
            <img src="./images/ico_add_circle.svg" alt="더보기이미지" />
          </div>
        </div>
      </section>

      <section className="pt3-2">
        <div className="ibox">
          <img src="./images/pt3-2.jpg" alt="주요성분이미지" />
        </div>
        <div className="titlebox">
          <div className="cbx titlebox3-2-1">
            <img src="./images/ico_add_circle.svg" alt="더보기이미지" />
          </div>
          <div className="cbx titlebox3-2-2">
            <p>MAIN IGREDENTS</p>
            <p>주요성분</p>
          </div>
        </div>
      </section>

      <section className="pt3-3">
        <div className="ibox">
          <img src="./images/pt3-3.jpg" alt="시너지이미지" />
        </div>
        <div className="titlebox">
          <div className="cbx titlebox3-3-1">
            <p>SYNERGY</p>
            <p>시너지</p>
          </div>
          <div className="cbx titlebox3-3-2">
            <img src="./images/ico_add_circle.svg" alt="더보기이미지" />
          </div>
        </div>
      </section>

    </>
  );
} /////////// Part3 컴포넌트 ///////////
