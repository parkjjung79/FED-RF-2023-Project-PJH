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


// 메인배너 클릭시 영상 재생 ///////////////////////////
const banner = dFn.qs(".banner_img");

dFn.addEvt(banner,'click',()=>{
  // console.log(33);
  banner.innerHTML = `
  <div id="mv">
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/KI322kD7lNk?autoplay=1" title="베놈 메인 예고편" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <!--닫기버튼-->
  <button class="cbtn">×</button>
  </div>
  `;


  // 닫기버튼 클릭시 #mv 제거하기
  cbtn.onclick = function(){
    mv.remove();
    // remove()는 DOM 메서드로 선택요소를 제거함!
    document.body.classList.remove('on');
  }; ///// click 이벤트 함수 /////

  // 가림막보이기 body요소에 클래스 on 주기
  document.body.classList.add('on');
}); ///////// click /////////





  // 장르버튼 활성화하기 ///////////////////////////

  // 1. 대상선정: .grmenu>ul>li>a 
  let grbtn =  dFn.qsaEl('.grmenu>ul>li>a');
  console.log(grbtn);

  

 










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



// 메인배너 버튼으로 이미지 슬라이드 ///////////////////////////////

// 1. 기능정의: 버튼클릭시 갤러리박스를 잘라서 앞/뒤로 이동함!
// 1-1. 오른쪽 버튼 클릭시 - 맨앞div 맨뒤로 이동
// -> 갤러리부모박스.appendChild(맨앞자식div)
// 1-2. 왼쪽버튼 클릭시 - 맨뒤 div 맨앞으로 이동
// -> 갤러리부모박스.insertBefore(맨뒤자식div,맨앞자식div)

// 2. 대상선정 
// 2-1. 이벤트대상 : .abtn(이동버튼들)
const abtn = dFn.qsa('.abtn');
// 2-2. 변경대상 : .gbx(갤러리부모박스)
const gbx = dFn.qs('.gbx');

// console.log('대상:',abtn,gbx);

// 3. 이벤트 설정하기! //////////////////
abtn.forEach(ele=>{
    dFn.addEvt(ele,'click',goSlide);
})

// 광클금지변수(0-허용,1-금지)
let stsClick = 0;
// 잠금시간
const TIME_SLIDE = 400;

// 4. 함수만들기! //////////////////////
function goSlide(){
    // 0. 광클금지
    if(stsClick) return; // 돌아가!
    stsClick=1; // 잠금!
    setTimeout(()=>stsClick=0,TIME_SLIDE);//해제! -> 이게어려움



    // 1. 버튼구분하기
    let isR = this.classList.contains('rb');

    console.log('고고씽',this,isR);
    
    // 현재 갤러리 하위자식 div 요소 집합 새로읽기
    // 매번 순서가 바뀌니까 매번 새로 읽어야함!
    let newList = dFn.qsaEl(gbx,'div');

    // 2. 기능 분기하기
    // 2-1. 오른쪽 버튼 : 맨앞div 맨뒤로 이동
    if(isR){
        //갤러리부모박스.appendChild(맨앞자식div)
        gbx.appendChild(newList[0]);


    } ///// if ////
    // 2-2. 왼쪽 버튼 : 맨뒤div 맨 앞으로 이동
    else{
        // 갤러리부모박스.insertBefore(맨뒤자식div,맨앞자식div)
        // 마지막 컬렉션 번호는 [개수-1]
        gbx.insertBefore(newList[newList.length-1],newList[0])

    } ///// else ////

} //////////// goSlide 함수 ////////////


// 자동넘김용 호출함수 //////////////////
const goRight = () =>  gbx.appendChild(dFn.qsaEl(gbx,'div')[0]);

// 자동넘김용 변수(인터발용:autoI,타임아웃용:autoT)
let autoI, autoT;

// 인터발호출함수 ///////
const autoSlide = () => autoI = setInterval(goRight,3000);

// 인터발함수 최초호출
autoSlide();

// 인터발지우기함수 //////////////
const clearAuto = () => {
    // 인터발 지우기
    clearInterval(autoI);

    // 타임아웃 지우기
    clearTimeout(autoT);
    
    // 일정시간후 작동
    autoT = setTimeout(autoSlide,5000);
};


// 버튼 클릭시 clearAuto함수 호출하기
abtn.forEach(ele=>dFn.addEvt(ele,'click',clearAuto));
