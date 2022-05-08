import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToAddressPage, goToHomePage, goToProfilePage } from "../router/coordinator"


const useRequestData = (url) => {
   const [data, setData] = useState();

   useEffect(() => {
      axios
         .get(url)
         .then((response) => {
            setData(response.data);
         })
         .catch((error) => {
            console.log(error);
            alert("Ocorreu um erro, tente novamente");
         });
   }, [url]);

   return [data];
};



export default useRequestData;

export const SignUp = async (form, navigate) => {

   try {
      const res = await axios.post(`${BASE_URL}/rappi4B/signup`, form)
      localStorage.setItem("token", res.data.token);
      alert("Cadastro realizado com sucesso!");
      goToAddressPage(navigate)
   } catch (error) {
      alert(error)
   }

};


export const addAddress = async (form, navigate) => {
   const token = localStorage.getItem("token");
      try {
         const res = await axios.put(`${BASE_URL}/rappi4B/address`, form,{headers: {auth: token}})
         localStorage.setItem("tokenaddress", res.data.token);
         alert("Endereço cadastrado com sucesso!");   
         goToHomePage(navigate)
      } catch (error) {
         alert(error)
      }
};

export const editRegister = async (form, navigate) => {
   const token = localStorage.getItem("tokenaddress");
      try {
         const res = await axios.put(`${BASE_URL}/rappi4B/profile`, form,{headers: {auth: token}})
         goToProfilePage(navigate)
         alert("Cadastro editado com sucesso!");
      } catch (error) {
         alert(error)
      }

};






