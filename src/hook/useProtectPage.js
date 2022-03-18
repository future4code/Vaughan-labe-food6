import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useProtectedPage = () => {
    const navigate = useNavigate()
   
    useEffect(() => {
        const token = window.localStorage.getItem('tokenaddress')
        
        if(token === null){
            navigate("/")
            alert("Faça o login")
        }
    }, )
}
