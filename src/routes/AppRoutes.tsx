import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import DefaultLayoutHome from '../config/layout/DefaultLayoutHome';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Notes from '../pages/Notes';

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayoutHome component={Home} />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/notes" element={<Notes />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
