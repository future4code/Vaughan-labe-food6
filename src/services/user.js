import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToHomePage, goToSignup } from "../router/coordinator";

export const login = (body, navigate) => {
  axios
    .post(`${BASE_URL}/rappi4B/login`, body)
    .then((res) => {
      localStorage.setItem("tokenaddress", res.data.token);
      goToHomePage(navigate);
    })
    .catch((err) => {
      alert(err.response.data.message + ", crie sua conta!");
      goToSignup(navigate);
    });
};
