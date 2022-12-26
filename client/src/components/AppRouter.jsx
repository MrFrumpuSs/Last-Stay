import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "../pages/Main";
import Donate from '../pages/Donate/Donate';
import VK from '../pages/VK/VK';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/donate" element={<Donate />}></Route>
            <Route path="/vk" element={<VK />}></Route>
            <Route path="/*"  element={<Navigate to="/" replace />}></Route>
        </Routes>
    );
}

export default AppRouter;
