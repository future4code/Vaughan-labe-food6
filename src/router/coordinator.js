import React from "react";



export const goToHomePage = (navigate) => {
    navigate("/");
};
export const goToAddressPage = (navigate) => {

    navigate(`/address`)
}
export const goToCartPage = (navigate) => {
    navigate(`/cart`)
}
export const goToDetails = (navigate, id) => {
    navigate(`/details/:id`)
}
export const goToEditRegister = (navigate) => {
    navigate("/edit-register")
}
export const goToLoginPage = (navigate) => {
    navigate("/login")
}
export const goToProfilePage = (navigate) => {
    navigate("/profile")
}
export const goToSeachPage= (navigate) => {
    navigate("/seach")
}
export const goToSignup = (navigate) => {
    navigate("/signup")
}
