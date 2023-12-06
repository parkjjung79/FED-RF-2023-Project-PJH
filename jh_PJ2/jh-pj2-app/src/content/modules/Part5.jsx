// jh_PJ2 메인페이지 Part5 컴포넌트

// Part5 css 불러오기
import { useEffect } from "react";
import "../css/part5.css";

import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

//// Part5 컴포넌트 /////////////
export function Part5() {
  const winH = window.innerHeight;
  let pgNum = 0;
  let scNum = 0;

  let protW = 0;

  /// 마우스 휠 함수 ///////////
  const wheelFn = (e) => {
    e.preventDefault();
    console.log("훨~~~!");

    if (protW) return;
    protW = 1;
    setTimeout(() => (protW = 0), 800);

    if (e.wheelDelta < 0) {
      scNum++;
    } else {
      scNum--;
    }

    if (scNum === 2) {
      $(".pt2.tbox p").first().addClass("on");
    }
    else if(scNum===3){
      $(".pt2.tbox p").first().removeClass("on");
      $(".pt2.tbox p").eq(1).addClass("on");

    } 
    else if(scNum===8){
      $(".pt4 .contbox p").first().addClass("on");
    } 
    else if(scNum===9){
      $(".pt4 .contbox p").first().removeClass("on");
      $(".pt4 .contbox p").eq(1).addClass("on");
    } 
    else if(scNum===10){
      $(".pt4 .contbox p").eq(1).removeClass("on");
      $(".pt4 .contbox p").eq(2).addClass("on");
    } 
    else if(scNum===11){
      $(".pt4 .contbox p").eq(2).removeClass("on");
      $(".pt4 .contbox p").eq(3).addClass("on");
    } 
    
    else {
      if (e.wheelDelta < 0) pgNum++;
      else pgNum--;

      $("html,body")
        .stop()
        .animate(
          {
            scrollTop: winH * pgNum + "px",
          },
          800
        );
    }

    console.log('scNum스크롤순번:',scNum,'\npgNum페이지순번:',pgNum)
  }; ///////// wheelFn 함수 /////////////

  useEffect(()=>{
    $(".pt1 .tbox p")
        .css({position: "relative", top: "74px", opacity: 0})
        .first()
        .delay(4000)
        .animate({ top: "0px", opacity: 1 }, function () {
          $(this)
           .delay(1500)
           .animate({ top: "-74px", opacity: 0 })
           .next()
           .delay(2500)
           .animate({ top: "-41px", opacity: 1 }, function () {
          $(this)
            .delay(1500)
            .animate({ top:"-41px", opacity: 0 })
            .next()
            .delay(2500)
            .animate({ top: "-82px", opacity: 1}, function (){
            $(this)
            .delay(1500)
            .animate({ top: "-82px",
            opacity: 0})
            .next()
            .delay(2500)
            .animate({ top: "-124px",
            opacity: 1}, function (){
            $(this)
            .delay(700)
            .animate({ top: "-60px",
            opacity: 0});
            });
            });
            });
        });
        window.addEventListener("wheel", wheelFn, { passive: false });
  },[]);


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
      <div className="cbx"></div>
    </>
  );
} /////////// Part5 컴포넌트 ///////////
