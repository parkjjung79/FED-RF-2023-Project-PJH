// 개인 PJ main js - main.js

// 모듈불러오기 ///////////////
// DOM함수 모듈
import dFn from "./dom.js";
// 부드러운 스크롤 모듈
import { startSS, setPos } from "./smoothScroll23.js"


// 부드러운 스크롤 호출
startSS();

// 0. 새로고치면 스크롤바 위치 캐싱후 맨 위로 이동!
setTimeout(() => {
  // 윈도우 스크롤 맨위로!
  window.scrollTo(0,0);
  // 부드러운 스크롤 위치값 반영!
  setPos(0);
  // 안하면 원래 위치로 스크롤 튐!
}, 400);
// 0. 스크롤바 트랙을 잡고 위치이동시 위치값 반영
dFn.addEvt(window,'mouseup',()=>{
  setPos(window.scrollY);   
}); //////// mouseup ///////////

// 0. 키보드 방향키 이동시 위치값 반영
dFn.addEvt(window,'keyup',()=>setPos(window.scrollY));
//////// keyup ///////////

// 부드러운 스크롤 때문에 마우스휠 이벤트 막기가 작동되어
// 캐릭터 설명 박스 작은 스크롤도 작동안됨
// 따라서 이벤트 버블링을 막아줘야함!
// event.stopPropagation()
// 이벤트 객체의 이벤트 버블링 막아주는 메서드임!




  // gr_button 링크걸기 ////////////////////////////////////////

  // 1. 대상선정: .grmenu>ul>li>a 
  // let grbtn = qsa('.grmenu>ul>li>a');
  // console.log('장르영화',grbtn);

  // // 장르 개수
  // let genre_cnt = grbtn.length;

  // // for문으로 버튼들을 click이벤트 설정함!
  // // for(시;한;증){코드}
  // for ( let i = 0; i < genre_cnt; i++) {
  //   grbtn[i].onclick = function(){
  //     let btxt = this.innerText;
  //     console.log('난누구?',btxt);




  //   }; ////////////// click 이벤트함수 //////////////


  // } //////////////////// for //////////////////////////





// 스페셜관 JS

/* 
      1. 요구사항 : 
      1)스페셜관 이름을 클릭하면
      .sp_menu > .partbox > div > span::after -> width 길이가 100%로 진행됨

      2) width 길이가 100% 되면 스페셜관 화면이 전환됨
        -> width: 100% 되는 시간과 스페셜관 배경 전환시간을 동일하게 지정!
    */

// 2. 대상선정





// 메인배너 클릭시 영상 재생
const banner = dFn.qs(".main_banner");

dFn.addEvt(banner,'click',()=>{
  // console.log(33);
  banner.innerHTML = `<iframe width="80%" height="80%" src="https://www.youtube.com/embed/KI322kD7lNk?autoplay=1" title="베놈 메인 예고편" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`


  // 닫기버튼 클릭시 #mv 제거하기
  cbtn.onclick = function(){
    mv.remove();
    // remove()는 DOM 메서드로 선택요소를 제거함!
    document.body.classList.remove('on');
  }; ///// click 이벤트 함수 /////

  // 가림막보이기 body요소에 클래스 on 주기
  document.body.classList.add('on');
}); ///////// click /////////





// 스페셜관 라인/배경 움직임 /////////////////////////////////////
const spMenu = dFn.qsa('.sp_menu .partbox');

let spNum = 0;
setInterval(() => {
  spMenu[spNum].classList.remove('on');

  spNum++;
  if(spNum>3)spNum=0;
  
    spMenu[spNum].classList.add('on');

    // 아래 내용도 여기서 바꿔라명령!
}, 4000);



