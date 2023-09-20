// 따라다니는 원 JS - following.js

// 1. 이벤트 등록 하기
window.addEventListener("DOMContentLoaded", loadFn);

// 2. 함수만들기 -> 할당함수 /////
// DOM선택함수
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

// 2-1. 로드함수 ////
function loadFn() {
  // 호출확인
  console.log("로딩완료!");

  // [1] html 코드 넣기 //////////////////////////////////
  // 1. 대상선정
  // 변경대상: #banner
  const banner_box = qs("#banner");
  console.log("대상:", banner_box);

  // 2. html 태그 만들기
  let hcode = ""; // hcode 부분 이름 변경 가능!! // = ''; 스트링 리터럴이 됨!

  // 3. 대상에 html 넣기
  banner_box.innerHTML = hcode;

  // [2] 따라다니는 원 셋팅하기
  // 1. 대상선정 : .mover
  // (1) 움직일 대상 : .mover
  const mover = qs(".mover");
  // (2) 이벤트 대상 : document.body
  const myBody = document.body;

  console.log("요소:", mover);

  /******************************************
    
    ★[[ 이벤트발생시 위치값 ]]★
    1. clientX, clientY
        -> 현재 보이는 브라우저 화면이 기준
        -> 화면을 기준한 fixed 포지션에서 주로 사용

    2. offsetX, offsetY
        -> 이벤트 대상이 기준
        -> 특정박스의 부모자격박스로부터 위치를 사용할 경우

    3. pageX, pageY
        -> 전체 문서를 기준(스크롤 화면을 포함)
        -> 화면을 기준한 absoulte 포지션에서 주로 사용!


    4. screenX, screenY
        -> 모니터 화면을 기준

    ******************************************/

  // 무버 크기의 절반계산
  let gap = mover.clientHeight / 2;
  // 선택요소의 크기 js
  // width는 clientWidth, height는 clientHeight
  console.log("무버Height:", gap);

  // 2. 이벤트 대상에 마우스 무드 이벤트가 적용될때
  // 무버가 따라다니게 기능구현!
  banner_box.onmousemove = (e) => {
    // e - 이벤트 전달변수
    // 1. 위치값 가져오기(박스중앙위치로 보정)
    let posx = e.pageX - gap;
    let posy = e.pageY - gap;
    // let posy = e.clientY - gap;
    // -> 만약 .mover가 fixed 포지션이면
    // 브라우저 화면에서의 위치인 clientY를 사용한다!

    // 2. 무버에 위치값 적용하기
    mover.style.top = posy + "px";
    mover.style.left = posx + "px";
  };
  
    // 이벤트 구역을 들어올때만 보이기 / 나가면 숨기기
    banner_box.onmouseover = () => {
      mover.style.opacity = 1;
      console.log(33);
      banner_box.style.cursor = 'none';
    }; ////////////// mouseenter //////////////////
    banner_box.onmouseout = () => {
      mover.style.opacity = 0;
      console.log(44);
      
      banner_box.style.cursor = 'auto';
    }; ////////////// mouseleave //////////////////

  // [3] a요소에 오버시 원 크게 만들기! //////////
  // 대상: #banner
  const mbanner = qs("#banner");
  console.log("메인배너:", mbanner);

  // 한번에 셋팅하기!
  mbanner.forEach((ele) => {
    // a 요소에 마우스 들어올때
    ele.onmouseenter = () => (mover.style.transform = "scale(2)");

    // a 요소에 마우스 나갈때
    ele.onmouseleave = () => (mover.style.transform = "scale(1)");
  });
} //////////// loadFn /////////////////
