import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Maha from './Maha';
import Tele from './Tele';
import Andhra from './Andhra';
import Punjab from './Punjab';
import { Nav } from './Nav';

const Landing = () => {
    return (
        <BrowserRouter>
        <Nav/>
            <Routes>
                <Route path="/maharashtra" element={<Maha />} />
                <Route path="/telangana" element={<Tele />} />
                <Route path="/andhrapradesh" element={<Andhra />} />
                <Route path="/punjab" element={<Punjab />} />

            </Routes>
        </BrowserRouter>
    );
};

export default Landing;