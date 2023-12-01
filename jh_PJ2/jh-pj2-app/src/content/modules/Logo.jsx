// jh_PJ2 로고 컴포넌트
import React from "react";
// import { useNavigate } from "react-router-dom";

// 컨텍스트 API를 사용하는 컴포넌트 파일에서 불러옴!
import { shpCon } from "../layout/shopContext";
import { useContext } from "react";

export function Logo() {
  const myCon = useContext(shpCon);
  return (
    <>
      <h1 className="logo" onClick={() => myCon.chgPage("/",{})}>
        <img src="./images/logo_w.png" alt="메인로고" />
      </h1>
    </>
  );
}
