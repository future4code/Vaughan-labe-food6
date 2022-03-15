import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToHomePage, goToLoginPage } from "../router/coordinator"
import { useNavigate } from "react-router-dom";

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
      goToHomePage(navigate)
      alert("Cadastro realizado com sucesso!");
    })
    .catch((error) => {
      alert(error.response.data.message);
    });

};
