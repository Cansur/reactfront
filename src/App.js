import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import Main from './Component/Main';
import Product from './Component/Product';
import "./index.css"
import SideBar from './Component/SideBar';
// import NotFound from ''

const App = () => {

  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <div style={{ backgroundColor: 'black', color: 'white' }}>
          <div className='container-sm padding-top-50'>
            <SideBar/>
            <Routes>
              <Route path="/" element={<Main/>} />
              <Route path="/product" element={<Product />} />
              {/* <Route path="*" element={<NotFound />}/> */}
            </Routes>

          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
