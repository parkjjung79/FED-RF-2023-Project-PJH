// 개인 PJ data js - data.js



// 현재상영영화 뿌리기 /////////////////////
// 1. 현재상영영화 - 배열데이터안에 객체형식
 
const mvList = {
    "전체보기":[
      {이미지:"./images/genre/drama/mv_drama1.jpg",제목:"벌새"},
      {이미지:"./images/genre/romance/mv_romance1.jpg",제목:"몽루아"},
      {이미지:"./images/genre/horror/mv_horror1.jpg",제목:"미드소마"},
      {이미지:"./images/genre/fantasy/mv_fantasy1.jpg",제목:"헝거게임"},
      {이미지:"./images/genre/animation/mv_ani1.jpg",제목:"토이스토리4"},
    ],
    "드라마":[
      {이미지:"./images/genre/drama/mv_drama1.jpg",제목:"벌새"},
      {이미지:"./images/genre/drama/mv_drama2.jpg",제목:"플로리다프로젝트"},
      {이미지:"./images/genre/drama/mv_drama3.jpg",제목:"그린북"},
      {이미지:"./images/genre/drama/mv_drama4.jpg",제목:"미나리"},
      {이미지:"./images/genre/drama/mv_drama5.jpg",제목:"택시운전사"},],
    "로맨스/멜로":[
      {이미지:"./images/genre/romance/mv_romance1.jpg",제목:"몽루아"},
      {이미지:"./images/genre/romance/mv_romance2.jpg",제목:"이터널선샤인"},
      {이미지:"./images/genre/romance/mv_romance3.jpg",제목:"블루발렌타인"},
      {이미지:"./images/genre/romance/mv_romance4.jpg",제목:"비포선라이즈"},
      {이미지:"./images/genre/romance/mv_romance5.jpg",제목:"어바웃타임"},],
    "공포":[
      {이미지:"./images/genre/horror/mv_horror1.jpg",제목:"미드소마"},
      {이미지:"./images/genre/horror/mv_horror2.jpg",제목:"보이즈어프레이드"},
      {이미지:"./images/genre/horror/mv_horror3.jpg",제목:"유전"},
      {이미지:"./images/genre/horror/mv_horror4.jpg",제목:"랑종"},
      {이미지:"./images/genre/horror/mv_horror5.jpg",제목:"곡성"},],
    "판타지":[
      {이미지:"./images/genre/fantasy/mv_fantasy1.jpg",제목:"헝거게임"},
      {이미지:"./images/genre/fantasy/mv_fantasy2.jpg",제목:"해리포터"},
      {이미지:"./images/genre/fantasy/mv_fantasy3.jpg",제목:"신비한동물들과\n덤블도어의비밀"},
      {이미지:"./images/genre/fantasy/mv_fantasy4.jpg",제목:"트와일라잇"},
      {이미지:"./images/genre/fantasy/mv_fantasy5.jpg",제목:"헬보이"},],
    "애니메이션":[
      {이미지:"./images/genre/animation/mv_ani1.jpg",제목:"토이스토리4"},
      {이미지:"./images/genre/animation/mv_ani2.jpg",제목:"코코"},
      {이미지:"./images/genre/animation/mv_ani3.jpg",제목:"센과치히로의행방불명"},
      {이미지:"./images/genre/animation/mv_ani4.jpg",제목:"빅히어로"},
      {이미지:"./images/genre/animation/mv_ani5.jpg",제목:"엘리멘탈"},]
    
    }; ////////////// mvList ///////////////




    
    
    
    // 스페셜관 구성 데이터
    /******************************************** 
      [ 데이터 항목 : ]
      1. 순번(기본키) : idx
      2. 스페셜관이름 : title
      3. 스페셜관정보 : story
      4. 스페셜관이미지 : spimg
      ********************************************/
    const spList = [
      {
        idx: 0,
        title: "DOLBY<span>CINEMA</span>",
        story: `단지, 보고, 듣는 영화에 만족할 수 없는 당신을 위해! 드라마틱한 이미지, 입체적인 사운드, 몰입에 최적화 된 공간까지! 최상의 영화를 경험하는 단 하나의 시네마, Dolby Cinema 를 메가박스에서 만나보세요.
        `,
        spimg: "./images/cinema_710.png",
      },
      {
        idx: 1,
        title: "BOUTIQUE<span>CINEMA</span>",
        story: `당신의 특별한 순간을 빛나게 해줄 프리미엄 어메니티와 룸서비스를 메가박스에서 만나보세요.`,
        spimg: "./images/cinema2.png",
      },
      {
        idx: 2,
        title: "PPUPY<span>CINEMA</span>",
        story: `세계 최초 반려동물 동반 멀티플렉스! 강아지와 영화는 물론 미용,목욕,보딩,식사까지 모든 것을 오롯이 함께 즐길 수 있는 우리들의 공간을 메가박스에서 만나보세요.`,
        spimg: "./images/cinema3.png",
      },
      {
        idx: 3,
        title: "KIDS<span>CINEMA</span>",
        story: `아이와 가족이 함께 머물며 삶의 소중한 가치를 배우는 더 행복한 놀이공간을 메가박스에서 만나보세요.`,
        spimg: "./images/cinema4.png",
      },
      
    ]; //////////////// spList ////////////////////////
    
    /* 
      스페셜관 이미지
      1. 돌비
      "./images/cinema_710.png"

      2. 더프라이빗
      "./images/cinema2.png"

      3. 퍼피
      "./images/cinema3.png"

      4. 키즈
      "./images/cinema4.png"
    
    */


    // 모듈화 내보내기 ///////
    export {mvList, spList};
