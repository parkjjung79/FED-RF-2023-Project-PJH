// jh_PJ2 하단영역 공통 컴포넌트

export function FooterArea() {
  return (
    <>
      {/* <!-- 3. 하단영역 --> */}
      <div id="footer-area">
        <footer className="footer-area">
          <div className="flogo">
            <img src="./images/logo_w.png" alt="하단로고" />
          </div>
          {/* <!-- 3-2.회사주소 --> */}
          <address className="addr">
            서울 강남구 강남대로162길 41-4 대표. Kim Young Kyun 사업자등록번호.
            214-86-75782 통신판매업신고. 2018-서울강남-00761 개인정보책임관리자.
            Jang Jae Hyung 팩스. 02-540-5297 이메일. sh.lee@aromatica.co.kr ©
            2023 AROMATICA All rights reserved. In God we trust.
          </address>
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
        </footer>
      </div>
    </>
  );
}
