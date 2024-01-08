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
                고객센터
                <br />
                <p>1600-3689</p>
              </div>
              <div className="cshours">
                <p>월-금 / 10-17시(점심시간 13-14)</p>
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
          <div className="footer-hr"></div> 
          {/* <!-- 3-2.회사주소 --> */}
          <div className="company_info">
            <h2 className="company_name">(주) 아로마티카</h2>
            <address className="address">
              서울 강남구 강남대로162길 41-4 대표. Kim Young Kyun
            </address>
            <span className="company_number">사업자등록번호. 214-86-75782</span>
            <span className="company_business_number">
              통신판매업신고. 2018-서울강남-00761
            </span>
            <a
              href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=2148675782&amp;apv_perm_no="
              className="company_info_search"
            >
              [사업자정보확인]
            </a>
            <span className="company_info_member">개인정보책임관리자. Jang Jae Hyung</span>
            <a href="tel:1600-3689" className="company_tel">
              유선전화. 1600-3689
            </a>
            <span className="company_fax">팩스. 02-540-5297</span>
            <span className="company_email">이메일. sh.lee@aromatica.co.kr</span>
            <a href="/privacypolicy" className="company_privacy">
              개인정보처리방침
            </a>
            <a href="/termsofuse" className="company_agree">
              이용약관
            </a>
            <p id="copy">© 2023 AROMATICA All rights reserved. In God we trust.</p>
          </div>;
          {/* <address className="addr">
            서울 강남구 강남대로162길 41-4
            <br />
            대표.Kim Young Kyun 사업자등록번호. 214-86-75782
            <br />
            통신판매업신고. 2018-서울강남-00761 개인정보책임관리자. Jang Jae
            Hyung 팩스. 02-540-5297 이메일. sh.lee@aromatica.co.kr © 2023
            AROMATICA All rights reserved. In God we trust.
          </address> */}
        </footer>
      </div>
    </>
  );
}

