import React from 'react';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './include/Header';
import Variable from './test/Variable';
import State from './test/State';
import Count from './test/Count';
import Loop from './test/Loop';
import Syntax2 from './test/Syntax2';
import Question from './survey/Question';
import Summary from './survey/Summary';
import ListMemo from './memo/ListMemo';
import DetailMemo from './memo/DetailMemo';
import ListGuestbook from './guestbook/ListGuestbook';
import ListProduct from './shop/ListProduct';
import WriteProduct from './shop/WriteProduct';
import DetailProduct from './shop/DetailProduct';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* 기초문법-길동팀원 */}
          <Route path="/test" element={<Syntax2 />} />
          <Route path="/test/variable" element={<Variable />} />
          <Route path="/test/state" element={<State />} />
          <Route path="/test/count" element={<Count />} />
          <Route path="/test/loop" element={<Loop />} />
          {/* 기초문법-길동팀원 */}
          <Route path="/survey/view" element={<Question />} />
          <Route path="/survey/summary" element={<Summary />} />
          <Route path="/memo" element={<ListMemo />} />
          <Route path="/memo/detail/:product_code" element={<DetailMemo />} />
          <Route path="/guestbook" element={<ListGuestbook />} />
          <Route path="/product/list" element={<ListProduct />} />
          <Route path="/product/write" element={<WriteProduct />} />
          <Route
            path="/product/detail/:product_code"
            element={<DetailProduct />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
