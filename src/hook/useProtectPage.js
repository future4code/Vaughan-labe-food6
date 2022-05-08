import { useEffect } from "react";
import { useHistory, useNavigate } from "react-router-dom";

export const useProtectedPage = () => {
    const navigate = useNavigate()
   
    useEffect(() => {
        const token = window.localStorage.getItem('token')
        
        if(token === null){
            navigate("/")
            alert("Faça o login")
        }
    }, )
}
