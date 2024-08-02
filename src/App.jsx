import React, { useEffect, useState } from 'react';
import './SCSS/base/reset.scss';
import './SCSS/base/font.scss';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import JavaBurger from './pages/JavaBurger';
import CircleSlider from './pages/CircleSlider';
import CircleSlider_fix from './pages/CircleSlider_fix';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/detail/1' element={<JavaBurger />} />
        <Route path='/CircleSlider' element={<CircleSlider />} />
        <Route path='/CircleSlider/fix' element={<CircleSlider_fix />} />
      </Routes>
    </>
  );
}

export default App;
