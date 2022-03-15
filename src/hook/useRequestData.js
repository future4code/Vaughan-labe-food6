import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToLoginPage} from "../router/coordinator"
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

export const SignUp = (body, clear, navigate) => {
 
  axios
    .post(`${BASE_URL}/rappi4B/signup`)
    .then((response) => {
      localStorage.setItem("token", response.data.token)
      clear()
      goToLoginPage()
      alert("Cadastro realizado com sucesso!");
      console.log(response.data)

    })
    .catch((error) => {
      console.log(error.response);
      alert("Ocorreu um erro, tente novamente");
    });


};
