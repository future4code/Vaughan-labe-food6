import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToHomePage, goToSignup } from "../router/coordinator";

export const login = async (body, navigate) => {

  try {
    const res = await axios.post(`${BASE_URL}/rappi4B/login`, body)
    console.log(res.data.token)
    localStorage.setItem("token", res.data.token);
    goToHomePage(navigate);

  } catch (error) {
    alert(error)
  } 
};
