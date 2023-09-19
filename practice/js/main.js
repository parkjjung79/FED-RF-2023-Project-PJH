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

// 모달창 js 
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.getElementById("close-modal");

// // 모달창 열기
// openModalBtn.addEventListener("click", () => {
//   modal.style.display = "block";
//   document.body.style.overflow = "hidden"; // 스크롤바 제거
// });

// // 모달창 닫기
// closeModalBtn.addEventListener("click", () => {
//   modal.style.display = "none";
//   document.body.style.overflow = "auto"; // 스크롤바 보이기
// });

// 스페셜관 JS

/* 
      1. 요구사항 : 
      1)스페셜관 이름을 클릭하면
      .sp_menu > .partbox > div > span::after -> width 길이가 100%로 진행됨

      2) width 길이가 100% 되면 스페셜관 화면이 전환됨
        -> width: 100% 되는 시간과 스페셜관 배경 전환시간을 동일하게 지정!
    */

// 2. 대상선정


const banner = domFn.qs("#banner");

domFn.addEvt(banner,'click',()=>{
  // console.log(33);
  banner.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/KI322kD7lNk?autoplay=1" title="그녀 메인 예고편" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`


}); ///////// click /////////

// domFn.addEvt(banner,'wheel',()=>{
//   event.preventDefault();
//   console.log(22);
  
// })

const spMenu = domFn.qsa('.sp_menu .partbox');

let spNum = 0;
setInterval(() => {
  spMenu[spNum].classList.remove('on');

  spNum++;
  if(spNum>3)spNum=0;
  
    spMenu[spNum].classList.add('on');

    // 아래 내용도 여기서 바꿔라명령!
}, 4000);
