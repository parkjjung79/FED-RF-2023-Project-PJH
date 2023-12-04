// jh_PJ2 메인페이지 컴포넌트

import { Part1 } from "../modules/Part1";
import { Part2 } from "../modules/Part2";
import { Part3 } from "../modules/Part3";
import { Part4 } from "../modules/Part4";

export function Main() {
  return (
    <>
      {/* <!-- 2. 메인영역 --> */}
      <div id="main-area">
        <main className="main-area">
          <section className="pt1">
            <Part1 />
          </section>
          {/* <!-- 2-2.  --> */}
          <section className="pt2">
            <Part2 />
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
