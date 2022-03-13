import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FirstComponent from 'Components/RouterComponent/FirstComponent'
import SecondComponent from 'Components/RouterComponent/SecondComponent'

function MainPage() {
    return (
        <BrowserRouter>
            {/* 1. Switch -> Routes */}
            <Routes>
                {/* 2. component -> element, element형태로 넘겨야함 <Home /> */}
                <Route path='/' element={<FirstComponent />} />
                {/* 3. 속성 사용시 render를 사용해야 했지만 elemnt에서 바로 사용가능 */}
                <Route path='/user' element={<SecondComponent />} />

                {/* 
            4. exact -> 삭제됨 (default로 exact가 적용됨), 적용하지 않으려면 아래처럼 사용
            info 로 시작되는 모든 라우팅 매칭
        */}
                <Route path='/info/*' />
            </Routes>
        </BrowserRouter>
    )
};

export default MainPage;