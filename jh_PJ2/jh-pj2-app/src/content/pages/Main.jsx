// jh_PJ2 메인페이지 컴포넌트

import { Part1 } from "../modules/Part1";
import { Part2 } from "../modules/Part2";
import { Part3 } from "../modules/Part3";
import { Part4 } from "../modules/Part4";
import { Part5 } from "../modules/Part5";
import { Part6 } from "../modules/Part6";

export function Main() {
  return (
    <>
      {/* <!-- 2. 메인영역 --> */}
      <div id="main-area">
        <main className="main-area">
          <section className="pt1 page">
            <Part1 />
          </section>
          {/* <!-- 2-2.  --> */}
          <section className="pt2 page">
            <Part2 />
          </section>
          {/* <!-- 2-3. 사용법, 성분 등 등장액션 주기 --> */}
            <div className="pt3">
              <Part3 />
            </div>
          {/* <!-- 2-4. 지속가능성 파트 --> */}
            <div className="pt4 page">
              <Part4 />
            </div>
          {/* <!-- 2-5. 제품추천파트 --> */}
          <section className="pt5 page">
              <Part5 />
          </section>
          {/* <!-- 2-6. 리뷰파트 --> */}
          <section className="pt6 page">
              <Part6 />
          </section>
        </main>
      </div>
    </>
  );
} //////////////////////// Main 컴포넌트 ////////////////////////
