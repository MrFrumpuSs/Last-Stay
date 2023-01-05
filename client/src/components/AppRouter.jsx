import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "../pages/Main";
import Donate from '../pages/Donate/Donate';
import VK from '../pages/VK/VK';
import PublicOffer from '../pages/PublicOffer';
import PrivacyPolicy from '../pages/PrivacyPolicy'
import PaymentMethods from '../pages/PaymentMethods';
import InformationSecurity from '../pages/InformationSecurity';
import RefundPolicy from '../pages/RefundPolicy';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/donate" element={<Donate />}></Route>
            <Route path="/vk" element={<VK />}></Route>
            <Route path="/public-offer" element={<PublicOffer />}></Route>
            <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
            <Route path="/payment-methods" element={<PaymentMethods />}></Route>
            <Route path="/information-security" element={<InformationSecurity />}></Route>
            <Route path="/refund-policy" element={<RefundPolicy />}></Route>
            <Route path="/*"  element={<Navigate to="/" replace />}></Route>
        </Routes>
    );
}

export default AppRouter;
