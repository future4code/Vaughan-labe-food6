import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { AddressPage } from "../pages/addressPage/addressPage";
import { CartPage } from "../pages/cartPage/cartPage";
import React from "react";
import { DetailsPage } from "../pages/detailsCard/detailsCard";
import { EditRegister } from "../pages/editRegister/editRegister"
import { LoginPage } from "../pages/LoginPage/LoginPage"
import { ProfilePage } from "../pages/profilePage/profilePage";
import { SeachPage } from "../pages/searchPage/searchPage"
import { SignUpPage } from "../pages/signUpPage/signUpPage"
import { EditAddress } from "../pages/editRegister/editAddress";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/address" element={<AddressPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/details/:id" element={<DetailsPage />} />
                <Route path="/edit-register" element={<EditRegister />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/seach" element={<SeachPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/edit-address" element={<EditAddress />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;