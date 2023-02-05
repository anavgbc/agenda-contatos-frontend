import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isAuthenticated, setAuthenticated] = useState(false);

  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem("token"));

  const userData = JSON.parse(localStorage.getItem("user"));

  const onSubmit = (data) => {
    console.log(data);
    api
      .post("/login", data)
      .then((response) => {
        localStorage.setItem("token", JSON.stringify(response.data.token));
        localStorage.setItem("user", JSON.stringify(response.data.user));

        setUser(response.data.user);
        setAuthenticated(true);
        console.log(response);
        navigate("/home", { replace: true });
      })
      .catch((_) => console.log(_));
  };

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    password: yup.string().required("Campo obrigatório"),
    //   .min(8, "Senha inválida"),
  });
  return (
    <AuthContext.Provider
      value={{
        onSubmit,
        schema,
        user,
        token,
        userData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
