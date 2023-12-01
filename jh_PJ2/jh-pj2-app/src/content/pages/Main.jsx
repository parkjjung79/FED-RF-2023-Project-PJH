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
            <section className="pt3 pt3-1">
              <div className="cbx info1">
                <img src="./images/pt3-1.jpg" alt="사용법이미지" />
              </div>
            </section>
            <section className="pt3 pt3-2">
              <div className="cbx info2">
                <img src="./images/pt3-2.jpg" alt="주요성분이미지" />
              </div>
            </section>
            <section className="pt3 pt3-3">
              <div className="cbx info3">
                <img src="./images/pt3-3.jpg" alt="시너지이미지" />
              </div>
            </section>
          {/* <!-- 2-4. 지속가능성 파트 --> */}
          <section className="pt4">
            <div className="cbx"></div>
          </section>
          {/* <!-- 2-5. 리뷰파트 --> */}
          <section className="pt5">
            <div className="cbx"></div>
          </section>
        </main>
      </div>
    </>
  );
}
