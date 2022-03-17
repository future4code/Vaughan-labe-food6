import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToAddressPage, goToProfilePage } from "../router/coordinator"


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

export const SignUp = (form, navigate) => {
  console.log(form)
  axios
    .post(`${BASE_URL}/rappi4B/signup`, form)
    .then((response) => {
      localStorage.setItem("token", response.data.token);

      goToAddressPage(navigate)
      alert("Cadastro realizado com sucesso!");
    })
    .catch((error) => {
      alert(error.response.data.message);
    });

};
export const addAddress = (form, navigate) => {
  const token = localStorage.getItem("token");

  axios
    .put(`${BASE_URL}/rappi4B/address`, form,
      {
        headers: {
          auth: token
        }
      })
    .then((response) => {
      localStorage.setItem("tokenaddress", response.data.token);
      goToProfilePage(navigate)
      alert("Endereço cadastrado com sucesso!");
    })
    .catch((error) => {
      alert(error.response.data.message);
    });

};

export const editRegister = (form, navigate) => {
  const token = localStorage.getItem("tokenaddress");

  axios
    .put(`${BASE_URL}/rappi4B/profile`, form,
      {
        headers: {
          auth: token
        }
      })
    .then((response) => {
     
      goToProfilePage(navigate)
      alert("Cadastro editado com sucesso!");
    })
    .catch((error) => {
      alert(error.response.data.message);
    });

};






