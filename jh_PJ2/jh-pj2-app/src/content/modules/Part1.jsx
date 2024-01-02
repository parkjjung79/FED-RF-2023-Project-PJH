// jh_PJ2 메인페이지 Part1 컴포넌트

// Part1 css 불러오기
import { useContext, useEffect } from "react";
import "../css/part1.css";

import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

import { shpCon } from "../layout/shopContext";

//// Part1 컴포넌트 /////////////
export function Part1() {
  const myCon = useContext(shpCon);

  const winH = window.innerHeight;
  // 페이지순번
  let pgNum = myCon.pgNum.current;
  // 스크롤순번
  let scNum = myCon.scNum.current;

  // console.log(pgNum, scNum);
  let protW = 0;

  /// 마우스 휠 함수 ///////////
  const wheelFn = (e) => {
    e.preventDefault();
    console.log("훨~~~!");

    // pgNum = myCon.pgNum.current;
    // scNum = myCon.scNum.current;

    if (protW) return;
    protW = 1;
    setTimeout(() => (protW = 0), 800);

    if (e.wheelDelta < 0) {
      myCon.scNum.current++;
    } else {
      myCon.scNum.current--;
    }

    if (myCon.scNum.current === 1) {
      $(".pt2.tbox p").first().animate({color:'#fff'},500,);
    } 
    //   else if (myCon.scNum.current === 3) {
    //   $(".pt2.tbox p").first().removeClass("on");
    //   $(".pt2.tbox p").eq(1).addClass("on");
    // } else if (myCon.scNum.current === 8) {
    //   $(".pt4 .contbox p").first().addClass("on");
    // } else if (myCon.scNum.current === 9) {
    //   $(".pt4 .contbox p").first().removeClass("on");
    //   $(".pt4 .contbox p").eq(1).addClass("on");
    // } 
    //   else if (myCon.scNum.current === 10) {
    //   $(".pt4 .contbox p").eq(1).removeClass("on");
    //   $(".pt4 .contbox p").eq(2).addClass("on");
    // } 
    //   else if (myCon.scNum.current === 11) {
    //   $(".pt4 .contbox p").eq(2).removeClass("on");
    //   $(".pt4 .contbox p").eq(3).addClass("on");
    // }
      else {
      if (e.wheelDelta < 0) myCon.pgNum.current++;
      else myCon.pgNum.current--;

      $("html,body")
        .stop()
        .animate(
          {
            scrollTop: winH * myCon.pgNum.current + "px",
          },
          800
        );
    }

    console.log("휠scNum:", myCon.scNum.current, "\n휠pgNum:", myCon.pgNum.current);
  }; ///////// wheelFn 함수 /////////////

 
  
  useEffect(() => {
    $(".pt1 .tbox p")
      .css({ position: "relative", top: "74px", opacity: 0 })
      .first()
      .delay(4000)
      .animate({ top: "0px", opacity: 1 }, function () {
        $(this)
          .delay(1500)
          .animate({ top: "-74px", opacity: 0 })
          .next()
          .delay(2000)
          .animate({ top: "-41px", opacity: 1 }, function () {
            $(this)
              .delay(1500)
              .animate({ top: "-41px", opacity: 0 })
              .next()
              .delay(2000)
              .animate({ top: "-82px", opacity: 1 }, function () {
                $(this)
                  .delay(1500)
                  .animate({ top: "-82px", opacity: 0 })
                  .next()
                  .delay(2000)
                  .animate({ top: "-124px", opacity: 1 }, function () {
                    $(this).delay(1500).animate({ top: "-60px", opacity: 0 });
                  });
              });
          });
      });
    window.addEventListener("wheel", wheelFn, { passive: false });
  }, []);

  // 쌤코드
  // useEffect(() => {
  //   $(".pt1 .tbox p")
  //     .css({ position: "relative", top: "50px", opacity: 0 })
  //     .first()
  //      지연시간 4초후 첫번째줄 등장
  //     .delay(4000)
  //     .animate({ top: "0px", opacity: 1 }, function () {
  //       $(this)
  //         .delay(1000)
  //         .animate({ top: "-50px", opacity: 0 })
  //         .next()
  //         .delay(2000)
  //         .animate({ top: "-50px", opacity: 1 }, function () {
  //           $(this)
  //             .delay(1000)
  //             .animate({ top: "-100px", opacity: 0 })
  //             .next()
  //             .delay(2000)
  //             .animate({ top: "-100px", opacity: 1 }, function () {
  //               $(this)
  //                 .delay(1000)
  //                 .animate({ top: "-150px", opacity: 0 })
  //                 .next()
  //                 .delay(2000)
  //                 .animate({ top: "-100px", opacity: 1 }, function () {
  //                   $(this).delay(1000).animate({ top: "-150px", opacity: 0 });
  //                 });
  //             });
  //         });
  //     });

  //   window.addEventListener("wheel", wheelFn, { passive: false });
  // }, []);

  // 리턴 코드 //////////////
  return (
    <>
      {/* <!-- 2-1. 배경 비디오넣기 --> */}
      <video id="myVid" src="./images/main.mp4" autoPlay loop muted></video>
      <div className="tbox">
        <p>SERENE BODY OIL LAVENDER & MAJORAM</p>
        <p>지치고 긴장된 일상에서 벗어나</p>
        <p>몸과 마음을 평온하게 보듬는</p>
        <p>아로마테라피 마사지로 온전한 휴식을 취해보세요</p>
      </div>
    </>
  );
} /////////// Part1 컴포넌트 ///////////
