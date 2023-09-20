// 개인 PJ data js - data.js



// 현재상영영화 뿌리기 /////////////////////
// 1. 현재상영영화 - 배열데이터안에 객체형식
 
const mvList = {
    드라마:[
      {이미지:"../images/genre/drama/mv_drama1.jpg",제목:"벌새"},
      {이미지:"../images/genre/drama/mv_drama2.jpg",제목:"플로리다프로젝트"},
      {이미지:"../images/genre/drama/mv_drama3.jpg",제목:"그린북"},
      {이미지:"../images/genre/drama/mv_drama4.jpg",제목:"미나리"},
      {이미지:"../images/genre/drama/mv_drama5.jpg",제목:"택시운전사"},],
    로맨스:[
      {이미지:"../images/genre/romance/mv_romance1.jpg",제목:"몽루아"},
      {이미지:"../images/genre/romance/mv_romance2.jpg",제목:"이터널선샤인"},
      {이미지:"../images/genre/romance/mv_romance3.jpg",제목:"블루발렌타인"},
      {이미지:"../images/genre/romance/mv_romance4.jpg",제목:"비포선라이즈"},
      {이미지:"../images/genre/romance/mv_romance5.jpg",제목:"어바웃타임"},],
    공포:[
      {이미지:"../images/genre/horror/mv_horror1.jpg",제목:"미드소마"},
      {이미지:"../images/genre/horror/mv_horror2.jpg",제목:"보이즈어프레이드"},
      {이미지:"../images/genre/horror/mv_horror3.jpg",제목:"유전"},
      {이미지:"../images/genre/horror/mv_horror4.jpg",제목:"랑종"},
      {이미지:"../images/genre/horror/mv_horror5.jpg",제목:"곡성"},],
    판타지:[
      {이미지:"../images/genre/fantasy/mv_fantasy1.jpg",제목:"헝거게임"},
      {이미지:"../images/genre/fantasy/mv_fantasy2.jpg",제목:"해리포터"},
      {이미지:"../images/genre/fantasy/mv_fantasy3.jpg",제목:"신비한동물들과덤블도어의비밀"},
      {이미지:"../images/genre/fantasy/mv_fantasy4.jpg",제목:"트와일라잇"},
      {이미지:"../images/genre/fantasy/mv_fantasy5.jpg",제목:"헬보이"},],
    애니메이션:[
      {이미지:"../images/genre/animation/mv_ani1.jpg",제목:"토이스토리4"},
      {이미지:"../images/genre/animation/mv_ani2.jpg",제목:"코코"},
      {이미지:"../images/genre/animation/mv_ani3.jpg",제목:"센과치히로의생방불명"},
      {이미지:"../images/genre/animation/mv_ani4.jpg",제목:"빅히어로"},
      {이미지:"../images/genre/animation/mv_ani5.jpg",제목:"엘리멘탈"},]
    
    }; ////////////// mvList ///////////////




    // 모듈화 내보내기 ///////
    export {mvList};