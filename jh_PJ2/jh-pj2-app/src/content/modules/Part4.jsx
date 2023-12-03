// jh_PJ2 메인페이지 Part4 컴포넌트

// Part4 css 불러오기
import "../css/part4.css";

export function Part4() {
  return (
    <>
      <section className="pt4-1">
        <div className="titlebox">
          <p>SUSTAINABLE BEAUTY</p>
          <p>지속가능한 뷰티</p>
        </div>
        <div className="contbox">
          <p>아로마티카는 제품 기획 단계부터 탄소배출을 줄일 수 있는 패키지를 연구합니다(RETHINK).</p>
          <p>리필스테이션을 운영하여 패키지를 재사용하는(REUSE) 문화를 조성하고, 다 쓴 패키지는 직접</p>
          <p>수거하고 재활용(RECYCLE)하여 잔재 쓰레기를 줄입니다(REDUCE).</p>
          <p>이를 통해 ‘보틀 투 보틀(Bottle-to-bottle)’의 원형적 자원 순환 시스템을 앞당깁니다.</p>
        </div>
        <button className="pt4-1 btn">
          지속가능한 패키지 순서
        </button>


        <div className="pt4-2">
          <img src="./images/pt4_img.png" alt="분리배출이미지" />
          <div className="tbox">
            <p>아로마티카 유리용기는</p>
            <p>소비 후 수거된 유리를 재활용하여</p>
            <p>유리 용기를 만들었습니다.</p>
            <p>일반 유리 대비하여 90% 재활용 유리 용기는</p>
            <p>이산화탄소 배출량을 절감*할 수 있습니다.</p>
          </div>
        </div>
      </section>
    </>
  );
} /////////// Part4 컴포넌트 ///////////