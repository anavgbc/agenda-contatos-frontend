import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

export const RegisterContext = createContext({});

export const RegisterContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    api
      .post("/users", data)
      .then((response) => {
        // localStorage.setItem("token", JSON.stringify(response.data.token));
        // localStorage.setItem("user", JSON.stringify(response.data.user));

        // console.log(response.data.user);
        console.log(response);
        navigate("/login", { replace: true });
      })
      .catch((_) => console.log(_));
  };

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    number: yup.string().required("Campo obrigatório"),
    //   .max(13, "Numero invalido")
    //   .min(13, "Numero invalido"),
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    password: yup.string().required("Campo obrigatório"),
    //   .min(8, "Senha inválida"),
  });
  return (
    <RegisterContext.Provider
      value={{
        onSubmit,
        schema,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
