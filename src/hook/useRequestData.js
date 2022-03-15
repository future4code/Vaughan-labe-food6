import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToHomePage, goToAddressPage } from "../router/coordinator"
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

      goToHomePage(navigate)
      alert("Endereço cadastrado com sucesso!");
    })
    .catch((error) => {
      alert(error.response.data.message);
    });

};
// export const Profile = () => {
//   const token = localStorage.getItem("token");
  
//   axios
//     .get(`${BASE_URL}/rappi4B/profile`,
//       {
//         headers: {
//           auth: token
//         }
//       })
//     .then((response) => {
      
//        console.log(response.data)
//     })
//     .catch((error) => {
//       console.log(error.message);
//     });
  

// };
