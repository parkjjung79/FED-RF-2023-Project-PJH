// 메인 페이지 JS - index.js
import React from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import './index.css';
import './content/css/main.css';

import { Layout } from '../src/content/layout/Layout';
import { Main } from '../src/content/pages/Main.jsx';
import { Introduce } from './content/pages/Introduce1';


export default function App(){
  return(
    /* basename속성은 package.json의 "homepage" 속성값을 읽어옴 */
    /* 배포용 */
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    {/*  개발용 */}
    {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='introduce' element={<Introduce />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
} //////////// App 컴포넌트 ////////////////////////

// 출력하기 ////////////////////////////////////////
const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />);