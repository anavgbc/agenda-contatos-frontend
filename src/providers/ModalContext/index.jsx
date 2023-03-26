import { createContext, useContext, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { HomePageContext } from "../HomeContext";

export const ModalContext = createContext({});

export const ModalContextProvider = ({ children }) => {
  const [openDelete, setOpenDelete] = useState(false);
  //   const [isAuthenticated, setAuthenticated] = useState(false);

  const navigate = useNavigate();

  const { setRefreshList, refreshList } = useContext(HomePageContext);

  const token = JSON.parse(localStorage.getItem("token"));
  const userData = JSON.parse(localStorage.getItem("user"));

  const deleteContact = (id) => {
    api
      .delete(`/contacts/${id}`)
      .then((response) => {
        setRefreshList(!refreshList);
        setOpenDelete(false);
      })
      .catch((_) => console.log(_));
  };

  return (
    <ModalContext.Provider
      value={{
        token,
        openDelete,
        setOpenDelete,
        deleteContact,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
