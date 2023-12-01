import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import './index.css';
import './content/css/main.css';

import { Layout } from '../src/content/layout/Layout';
import { Main } from '../src/content/pages/Main.jsx';
import { Introduce } from './content/pages/Introduce1';


export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='introduce' element={<Introduce />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />);