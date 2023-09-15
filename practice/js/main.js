// 개인 PJ main js - main.js

// DOM 함수 객체 //////////////
const domFn = {
    // 요소선택함수 ////////
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),
  
    // 이벤트셋팅함수
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
  
    // 바운딩 위치값 함수
    getBCR: (ele) => ele.getBoundingClientRect().top,
  
    // 옵셋탑값 반환함수
    getOT: (ele) => ele.offsetTop,
  }; /////// domFn 객체 /////////////
  
  // 부드러운 스크롤 호출
    startSS();



    // 스페셜관 JS
    
    /* 
      1. 요구사항 : 
      1)스페셜관 이름을 클릭하면
      .sp_menu > .partbox > div > span::after -> width 길이가 100%로 진행됨

      2) width 길이가 100% 되면 스페셜관 화면이 전환됨
        -> width: 100% 되는 시간과 스페셜관 배경 전환시간을 동일하게 지정!
    */
    
    // 2. 대상선정
  
 