// jh_PJ2 메인페이지 Part3 컴포넌트

// Part3 css 불러오기
import { useEffect } from "react";
import "../css/part3.css";


import $ from "jquery";
import "jquery-ui-dist/jquery-ui";


export function Part3() {

  // useEffect(()=>{
  //   // $(".titlebox3-1-2").click(()=>{
  //   //   alert(333);
  //   $(".titlebox3-1-2").click(()=>{
  //     $(".more3-1").show();
  //   // }, function(){
  //   //   $(".more3-1").hide();
  //   })
  // },[]);

  useEffect(() => {
    // 첫 번째 요구사항: .titlebox3-1-2 클릭하면 .more3-1 위에서 아래로 보이기 (2초 지연)
    const handleClick1 = () => {
      const more3_1 = $('.more3-1');

      // 현재 상태에 따라 토글(toggle)하고, 지연 시간을 설정합니다.
      more3_1.slideToggle(1000);
    };

    // .titlebox3-1-2에 클릭 이벤트 리스너를 추가합니다.
    $('.titlebox3-1-2').on('click', handleClick1);

    // 두 번째 요구사항: .titlebox3-1-2 클릭하면 .more3-1 닫기
    const handleClose1 = () => {
      const more3_1 = $('.more3-1');

      // 현재 상태에 따라 토글(toggle)합니다.
      // more3_1.slideUp();
    };

    // .titlebox3-1-2에 클릭 이벤트 리스너를 추가합니다.
    $('.titlebox3-1-2').on('click', handleClose1);

    // 두 번째 요구사항: .titlebox3-2-1 클릭하면 .more3-2 위에서 아래로 보이기 (2초 지연)
    const handleClick2 = () => {
      const more3_2 = $('.more3-2');

      // 현재 상태에 따라 토글(toggle)하고, 지연 시간을 설정합니다.
      more3_2.slideToggle(1000);
    };

    // .titlebox3-2-1에 클릭 이벤트 리스너를 추가합니다.
    $('.titlebox3-2-1').on('click', handleClick2);

    // 두 번째 요구사항: .titlebox3-2-1 클릭하면 .more3-2 닫기
    const handleClose2 = () => {
      const more3_2 = $('.more3-2');

      // 현재 상태에 따라 토글(toggle)합니다.
      // more3_2.slideUp();
    };

    // .titlebox3-2-1에 클릭 이벤트 리스너를 추가합니다.
    $('.titlebox3-2-1').on('click', handleClose2);

    // useEffect의 clean-up 함수에서 이벤트 리스너를 제거합니다.
    return () => {
      $('.titlebox3-1-2').off('click', handleClick1);
      $('.titlebox3-1-2').off('click', handleClose1);
      $('.titlebox3-2-1').off('click', handleClick2);
      $('.titlebox3-2-1').off('click', handleClose2);
    };
  }, []); // useEffect의 두 번째 매개변수로 빈 배열을 전달하여, 컴포넌트가 마운트될 때만 실행되도록 합니다.



  return (
    <>
      <section className="pt3-1">
        <div className="ibox">
        <img src="./images/pt3-1.jpg" alt="사용법이미지" />
        </div>
        <div className="titlebox">
          <div className="cbx titlebox3-1-1">
            <p>HOW TO USE</p>
            <p>사용법</p>
          </div>
          <div className="cbx titlebox3-1-2">
            <img src="./images/ico_add_circle.svg" alt="더보기이미지" />
          </div>
        </div>
      </section>
      <div className="more3-1">
        <div className="howtext">
          <div className="htxt1">
            <p>1</p>
            <p>겨드랑이, 사타구니와 같이 에너지의<br />
              흐름이 필요한 곳에 바디오일로 부드럽게<br />
              마사지해줌으로 뭉쳐있는 기운을 풀어주고<br />
              릴랙싱에 도움을 줍니다.
            </p>
          </div>
          <hr/>
          <div className="htxt2">
            <p>2</p>
            <p>샤워 후 물기가 살짝 남은 상태에서 사용하면<br />
              더욱 부드럽게 마사지가 가능한 동시에<br />
              유분 보습막을 만들어줍니다.
            </p>
          <hr/>
          </div>
          <div className="htxt3">
            <p>3</p>
            <p>서렌 바디오일 라벤터 & 마조람을 바른 후<br />
                마사저를 사용하면, 고요한 함 온전한 휴식을<br />
                위한 나이트 리추얼을 도와줍니다.
            </p>
          </div>
        </div>
      </div>

      <section className="pt3-2">
        <div className="ibox">
          <img src="./images/pt3-2.jpg" alt="주요성분이미지" />
        </div>
        <div className="titlebox">
          <div className="cbx titlebox3-2-1">
            <img src="./images/ico_add_circle.svg" alt="더보기이미지" />
          </div>
          <div className="cbx titlebox3-2-2">
            <p>MAIN IGREDENTS</p>
            <p>주요성분</p>
          </div>
        </div>
      </section>
      <div className="more3-2">
        <div className="igretext">
          <div className="igtxt1">
            <div className="lavender">
                <img src="./images/lavender.png" alt="라벤더사진" />
                <div className="laventxt">
                  <p>LAVENDER</p>
                  <p>라벤더는 깊은 상태의 명상에 이르도록 도와줍니다.<br />
                      오일 속 리날룰과 리날릴 아세테이트 성분은 뛰어난<br />
                      진정 효능을 가지고 있습니다.<br />
                  </p>
                </div>
            </div>
          </div>
          <div className="igtxt2">
            <div className="majoram">
                <div className="majotxt">
                <p>SWEET MARJORAM</p>
                <p>스윗 마조람은 몸과 마음에 따스한 온기를 불어넣어<br />
                    차갑게 얼어붙은 내면에 포근한 힘을 키워주고 불필요한<br />
                    감정을 정리해줍니다.
                </p>
                </div>
                <img src="./images/majoram.png" alt="마조람사진" />
            </div>
          <div className="igtxt3">
            <div className="jojobar">
                <img src="./images/jojobar.png" alt="호호바사진" />
                <div className="jojotxt">
                  <p>ORGANIC JOJOBA OIL</p>
                  <p>
                  건조한 기후에서 서식하는 호호바 나무의 씨앗에서<br />
                  추출한 오일로, 피부에 보습막을 형성하여 촉촉하고<br />
                  건강한 피부로 케어하는 데 도움을 줍니다.
                  </p>
                </div>
            </div>
          </div>

            
          </div>
        </div>
      </div>

      <section className="pt3-3">
        <div className="ibox">
          <img src="./images/pt3-3.jpg" alt="시너지이미지" />
        </div>
        <div className="titlebox">
          <div className="cbx titlebox3-3-1">
            <p>SYNERGY</p>
            <p>시너지</p>
          </div>
          <div className="cbx titlebox3-3-2">
            <img src="./images/ico_add_circle.svg" alt="더보기이미지" />
          </div>
        </div>
      </section>
      <div className="more3-3">
        <div className="synergy">
          <div className="sgtxt">
            <p>Synergy</p>
            <p>
            식물성 오일과 에센셜 오일의 시너지 효과
            </p>
            <p>
            100% 식물성 오일에 에센셜 오일이 첨가되면 시너지 효과를 발휘할 수 있습니다.<br />
            이때 사용되는 식물성 오일을 캐리어(Carrier)오일이라 부르며,<br />
            피부를 보호하고 영양을 줄 뿐 아니라 에센셜 오일이<br />
            피부로 더 잘 흡수될 수 있도록 전달하는 매개체 역할을 합니다.<br />
            주로 사용되는 식물성 오일로는 호호바, 해바라기, 스위트 아몬드, 올리브 오일 등입니다.
            </p>
          </div>
       
        </div>
      </div>

    </>
  );
} /////////// Part3 컴포넌트 ///////////
