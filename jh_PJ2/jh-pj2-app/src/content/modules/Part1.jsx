// jh_PJ2 메인페이지 Part1 컴포넌트

// Part1 css 불러오기
import "../css/part1.css";

export function Part1() {
  return (
    <>
      {/* <!-- 2-1. 배경 비디오넣기 --> */}
      <iframe
        id="myvid"
        src="https://www.youtube.com/embed/OjfwexFtrPU?si=9H0RMTE1RCkp8VSU"
        autoplay="muted"
        frameborder="0"
      />
      <div className="tbox">
        <p>SERENE BODY OIL LAVENDER & MAJORAM</p>
        <p>지치고 긴장된 일상에서 벗어나</p>
        <p>몸과 마음을 평온하게 보듬는</p>
        <p>아로마테라피 마사지로 온전한 휴식을 취해보세요.</p>
      </div>
    </>
  );
} /////////// Part1 컴포넌트 ///////////
