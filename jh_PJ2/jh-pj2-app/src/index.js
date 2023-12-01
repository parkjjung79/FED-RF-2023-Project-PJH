import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import './index.css';

import { Layout } from '../public/content/layout/Layout.jsx';
import { Main } from '../public/content/pages/Main.jsx';

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />);