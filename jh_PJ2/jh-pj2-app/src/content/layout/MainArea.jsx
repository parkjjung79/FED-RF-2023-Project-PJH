// jh_PJ2 메인영역 공통 컴포넌트

import { Outlet } from "react-router-dom";

export function MainArea(){
    return(
        <main className="cont">
            <Outlet />
        </main>
    )
}