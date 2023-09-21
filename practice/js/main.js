// 개인 PJ main js - main.js

// 모듈불러오기 ///////////////
// DOM함수 모듈
import dFn from "./dom.js";
// 부드러운 스크롤 모듈
import { startSS, setPos } from "./smoothScroll23.js";
// 따라다니는 원 모듈
import setFollow from "./fllowing.js";

// console.log(dFn);

// 따라다니는 원 호출
setFollow();

// 부드러운 스크롤 호출
startSS();

// 0. 새로고치면 스크롤바 위치 캐싱후 맨 위로 이동!
setTimeout(() => {
  // 윈도우 스크롤 맨위로!
  window.scrollTo(0, 0);
  // 부드러운 스크롤 위치값 반영!
  setPos(0);
  // 안하면 원래 위치로 스크롤 튐!
}, 400);
// 0. 스크롤바 트랙을 잡고 위치이동시 위치값 반영
dFn.addEvt(window, "mouseup", () => {
  setPos(window.scrollY);
}); //////// mouseup ///////////

// 0. 키보드 방향키 이동시 위치값 반영
dFn.addEvt(window, "keyup", () => setPos(window.scrollY));
//////// keyup ///////////

// 부드러운 스크롤 때문에 마우스휠 이벤트 막기가 작동되어
// 캐릭터 설명 박스 작은 스크롤도 작동안됨
// 따라서 이벤트 버블링을 막아줘야함!
// event.stopPropagation()
// 이벤트 객체의 이벤트 버블링 막아주는 메서드임!

const mvId = ["NHA69lCd1ZM","KI322kD7lNk","Vw5euKuTJsE"];

// 메인배너 클릭시 영상 재생 ///////////////////////////
const banner = dFn.qsa(".banner_img");
banner.forEach((ele,idx)=>{
  dFn.addEvt(ele, "click", () => {
  // console.log(33);
  playMovie(mvId[idx]);
  }); ///////// click /////////

})

// 장르버튼 활성화하기 ///////////////////////////

// 1. 대상선정: .grmenu>ul>li>a
// let grbtn = dFn.qsaEl(".grmenu>ul>li>a");
// console.log(grbtn);

// 스페셜관 라인/배경 움직임 /////////////////////////////////////
const spMenu = dFn.qsa(".sp_menu .partbox");

let spNum = 0;
setInterval(() => {
  spMenu[spNum].classList.remove("on");

  spNum++;
  if (spNum > 3) spNum = 0;

  spMenu[spNum].classList.add("on");

  // 아래 내용도 여기서 바꿔라명령!
}, 4000);



//////////////////////////////////////


// 전역변수구역 //////////
// 1. 광클금지상태변수 : 0-허용,1-불허용
let clickSts = 0;
// 2. 슬라이드 이동시간 : 상수로 설정
const TIME_SLIDE = 400;

let CNT_SLIDE = dFn.qsa('.banner_img').length;
const indicBox = dFn.qs('.indic');

// 블릿셋팅하기! //////
for(let i=0;i<CNT_SLIDE;i++){
  indicBox.innerHTML+=`
    <li${i==0?` class="on"`:``}>
      <img src="../images/dot1.png" alt="흰색">
      <img src="../images/dot2.png" alt="회색">
    </li>
  `;
} /////////// for ///////////////

// 1. 대상선정
    // 1-1.이벤트 대상: .abtn
    const abtn = dFn.qsa('.abtn');
    // 1-2.변경 대상: #slide
    const slide = dFn.qs('.banner_box');
    // 1-3.블릿박스 대상:
    const indic = dFn.qsa('.indic li');


    // 대상확인
    console.log('대상',abtn,slide,indic);

    // 1.5. li리스트에 순번속성 만들어 넣기
    // 만드는이유: 블릿변경 등에 현재 슬라이드 순번 필요!
    // 사용자 정의 속성은 반드시 'data-'로시작해야함!(W3C규칙)
    // data-seq 로 순번 속성을 넣을 것임!
    dFn.qsaEl(slide,'.banner_img')
    .forEach((ele,idx)=>ele.setAttribute('data-seq',idx));
    // setAttribute(속성명,속성값) -> 속성셋팅 JS내장메서드


    // 2. 이벤트 설정하기 : 버튼요소들 -> forEach()
    abtn.forEach(ele=>dFn.addEvt(ele,'click',goSlide));

    // 3. 함수만들기
    function goSlide(){
        // 광클금지 //////////////
        if(clickSts) return;//나가!
        clickSts=1;//잠금!
        setTimeout(()=>clickSts=0,TIME_SLIDE);//해제!       


        // 호출확인
        console.log('나야나!',this,
        this.classList.contains('rb'));

        // classList.contains(클래스명)
        // 선택요소에 해당클래스가 있으면 true

        // 1. 오른쪽 버튼 여부 알아내기
        let isRight = this.classList.contains('rb');

        // 2. 슬라이드 li 새로 읽기
        let eachOne = dFn.qsaEl(slide,'.banner_img');

        // 3. 버튼분기하기 '.ab2' 이면 오른쪽버튼
        if(isRight){ // 오른쪽버튼
            // 오른쪽에서 들어오는 슬라이드함수 호출!
            rightSlide();
        } ////// if //////////////
        else{ // 왼쪽버튼
            // 1. 맨뒤li 맨앞으로 이동
            // 놈.놈.놈 -> insertBefore(넣을놈,넣을놈전놈)
            slide.insertBefore(
                eachOne[eachOne.length-1], eachOne[0]);
            // 2. left값 -100% 만들기 : 들어올 준비 위치!
            slide.style.left = '-100%';
            // 3. 트랜지션 없애기
            slide.style.transition = 'none';
            
            // 같은 left값을 동시에 변경하면 효과가 없음!
            // 비동기적으로 처리해야함!
            // -> setTimeout으로 싸주기!
            // 시간은 0이어도 비동기 처리므로 효과있음!

            setTimeout(() => {
                // 4. left값 0으로 들어오기
                slide.style.left = '0';
                
                // 5. 트랜지션주기
                slide.style.transition = 
                    TIME_SLIDE+'ms ease-in-out';
 
            }, 0);


        } /////// else //////////////

        // 4. 블릿순번 변경 함수 호출
        chgIndic(isRight); // 방향값을 보냄!

        // 5. 자동넘김 멈춤함수 호출하기
        clearAuto();
        
    } ////////// goSlide 함수 /////////

    // 블릿순번 변경 함수 /////////////
    function chgIndic(isRight){ // isRight(0-왼쪽,1-오른쪽)
        // 1. 슬라이드 순번과 일치하는 블릿에 클래스 넣기
        // 대상: .indic li -> indic변수
        // 맨앞 슬라이드 li의 'data-seq' 값 읽어오기
        // isRight값이 true이면 오른쪽버튼이고 순번은 [1]
        // isRight값이 false이면 왼쪽버튼이고 순번은 [0]
        let nowSeq = 
        dFn.qsaEl(slide,'.banner_img')[isRight?1:0]
        .getAttribute('data-seq');

        console.log('현재슬라이드 순번:',nowSeq);
        
        // 2. 해당순번 블릿li에 클래스 on넣기
        // 블릿전체순회시 해당순번에 on넣고 나머지는 on빼기
        indic.forEach((ele,idx)=>{
            if(idx==nowSeq) ele.classList.add('on');
            else ele.classList.remove('on');
        }); ///////// forEach ///////////

    } /////////// chgIndic함수 ////////////

    // 슬라이드 오른쪽방향 함수 ////////////
    function rightSlide(){
        //1.대상이동하기
        slide.style.left = '-100%';
        //2.트랜지션주기
        slide.style.transition = 
            TIME_SLIDE+'ms ease-in-out';
        // 이동시간 후 맨앞li 잘라서 맨뒤로 이동하기
        // appendChild(요소)
        setTimeout(() => {
            // 3.맨앞li 맨뒤로 이동
            slide.appendChild(
              dFn.qsaEl(slide,'.banner_img')[0]);
            // 4.slide left값 0
            slide.style.left = '0';
            // 5.트랜지션 없애기
            slide.style.transition = 'none';
        }, TIME_SLIDE);
    } //////////// rightSlide 함수 ////////////


    /********************************** 
        자동넘기기 기능구현
        -> 일정시간간격으로 오른쪽버튼 클릭
        -> 사용JS내장함수 : setInterval()
        -> 버튼클릭 실행 메서드: click()
        대상: 오른쪽버튼 - .ab2 -> abtn[1]
    **********************************/
   // 인터발변수
   let autoI;
   // 인터발타이밍함수를 변수에 할당후
   // clearInterval(할당변수) 해야 멈출 수 있다!

   // 타임아웃변수
   let autoT;
   // 타임아웃함수도 마찬가지임!
   // clearTimeout(할당변수) 해야 실행 쓰나미를 막을 수 있다!
   
   // 인터발호출 함수 //////////
   function slideAuto(){
       autoI= setInterval(() => {
        // 오른쪽이동 슬라이드 함수호출
        rightSlide();
        // 블릿변경함수호출(오른쪽은 1)
        chgIndic(1);

       // console.log('실행!');
       // 오른쪽버튼 클릭이벤트 강제발생!
       // 선택요소.click()
        //  abtn[1].click();   
      }, 3000);

   } ///////// slideAuto 함수 //////////////

   // 인터발함수 최초호출!
   slideAuto();

   // 버튼을 클릭할 경우를 구분하여 자동넘김을 멈춰준다!
   function clearAuto(){
    // 자동넘김 지우기
        // clearInterval(인터발할당변수)
        console.log('멈춤!!!');

        // 1. 인터발 지우기
        clearInterval(autoI);
        // 2. 타임아웃 지우기(재실행호출 쓰나미 방지)
        clearTimeout(autoT);
        // 3. 일정시간후 다시 인터발호출셋팅하기!!!
        autoT = setTimeout(slideAuto,5000);
        // 결과적으로 5초후 인터발재실행은 하나만 남는다!

   } //////////// clearAuto 함수 ///////////





/*************************************** 
  함수명 : playMovie
  기능: 영화예고편 화면 띄우기
***************************************/
function playMovie(mcode) {
  // mcode - 영화아이디
  // 함수호출 및 전달값 확인
  console.log("난진짜야~!", mcode);

  // 1. 동영상 박스 대상선정 : #mvbox
  let mvbox = document.querySelector("#mvbox");

  // 2. 영화박스에 아이프레임 넣기
  mvbox.innerHTML = `
      <div id="mv">
          <!--유튜브 아이프레임-->
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${mcode}?autoplay=1" allow="autoplay"></iframe>
          <!--닫기버튼-->
          <button class="cbtn">×</button>
      </div>
  `;

  // 3. 삽입된 동영상 박스 CSS설정하기
  let mv = document.querySelector("#mv");
  let css = mv.style;

  css.position = "fixed";
  css.top = "0";
  css.left = "0";
  css.width = "100%";
  css.height = "100%";
  css.backgroundColor = "#000";
  css.zIndex = "99999999";

  // 4. 닫기버튼 CSS 셋팅하기
  let cbtn = document.querySelector(".cbtn");
  // console.log(cbtn);
  // style.cssText는
  // css를 직접 style속성값으로 넣음!
  cbtn.style.cssText = `
      position : absolute;
      top : 15%;
      right : 15%;
      width : 50px;
      height : 50px;
      border : none;
      color : #fff;
      background-color : blue;
      font-size : 40px;
      font-weight : bold;
      border-radius: 50%;
      cursor : pointer;
      line-height : 36px;
      text-indent: -10px;
  `;

  // 아이프레임 보더 없앰
  mv.querySelector("iframe").style.border = "none";

  // 5. 닫기버튼 클릭시 #mv 제거하기
  cbtn.onclick = function () {
      mv.remove();
      // remove() 는 DOM 메서드로
      // 선택요소를 제거함!

      // body에 클래스 on 제거하기
      document.body.classList.remove("on");
  }; /////// click이벤트 함수 ///////

  // 6. body요소에 클래스 on 주기
  // 동영상 배경 암전효과
  document.body.classList.add("on");
} //////////////// playMovie 함수 ////////////
//////////////////////////////////////////////





