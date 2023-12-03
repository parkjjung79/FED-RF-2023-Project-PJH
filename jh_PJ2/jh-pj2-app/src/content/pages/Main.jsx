// jh_PJ2 메인페이지 컴포넌트

import { Part3 } from "../modules/Part3";
import { Part4 } from "../modules/Part4";

export function Main() {
  return (
    <>
      {/* <!-- 2. 메인영역 --> */}
      <div id="main-area">
        <main className="main-area">
          <section className="pt1">
            {/* <!-- 2-1. 배경 비디오넣기 --> */}
            <iframe
              id="myvid"
              src="https://www.youtube.com/embed/OjfwexFtrPU?si=9H0RMTE1RCkp8VSU"
              autoplay="muted"
              frameborder="0"
            />
          </section>
          {/* <!-- 2-2.  --> */}
          <section className="pt2">
            <div className="pt2 cbx2-1">
              <div className="pt2 tbox">
                <p>따스한 온기를 전달하여</p>
                <p>
                  고요한 무드로 이끌어주는
                  <br />
                  바디 오일
                </p>
                <p>서렌 바디오일 라벤터 & 마조람</p>
              </div>
            </div>
            <div className="pt2 cbx2-2 bgi"></div>
          </section>
          {/* <!-- 2-3. 사용법, 성분 등 등장액션 주기 --> */}
            <div className="pt3">
              <Part3 />
            </div>
          {/* <!-- 2-4. 지속가능성 파트 --> */}
            <div className="pt4">
              <Part4 />
            </div>
          {/* <!-- 2-5. 리뷰파트 --> */}
          <section className="pt5">
            <div className="cbx"></div>
          </section>
        </main>
      </div>
    </>
  );
} //////////////////////// Main 컴포넌트 ////////////////////////
