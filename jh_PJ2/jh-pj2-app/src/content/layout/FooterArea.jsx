// jh_PJ2 하단영역 공통 컴포넌트

export function FooterArea() {
  return (
    <>
      {/* <!-- 3. 하단영역 --> */}
      <div id="footer-area">
        <footer className="footer-area">
          <div className="footer_part1">
            <div className="csnum_hours">
              <div className="csnum">
                고객센터<br />
                <p>
                  1600-3689
                </p>
              </div>
              <div className="cshours">
                <p>
                  월-금 / 10-17시(점심시간 13-14)
                </p>
              </div>
            </div>
            {/* <!-- 3-3.하단링크 --> */}
            <ul className="blink">
              <li>
                <a href="#">고객센터</a>
              </li>
              <li>
                <a href="#">주문 및 문의</a>
              </li>
              <li>
                <a href="#">소셜미디어</a>
              </li>
              <li>
                <a href="#">B2B</a>
              </li>
              <li>
                <a href="#">인재채용</a>
              </li>
            </ul>
          </div>
          <hr noshade />
          {/* <!-- 3-2.회사주소 --> */}
          <address className="addr">
            서울 강남구 강남대로162길 41-4<br />
            대표.Kim Young Kyun 사업자등록번호. 214-86-75782<br />
            통신판매업신고. 2018-서울강남-00761 개인정보책임관리자.
            Jang Jae Hyung 팩스. 02-540-5297 이메일. sh.lee@aromatica.co.kr ©
            2023 AROMATICA All rights reserved. In God we trust.
          </address>
        </footer>
      </div>
    </>
  );
}
