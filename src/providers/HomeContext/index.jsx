import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { AuthContext } from "../AuthContext";

export const HomePageContext = createContext({});

export const HomePageContextProvider = ({ children }) => {
  const [cardId, setCardId] = useState({});
  const [refreshList, setRefreshList] = useState(false);

  const navigate = useNavigate();
  const { token } = useContext(AuthContext);

  const createContact = (data) => {
    console.log(data);

    api
      .post("/contacts", data)
      .then((response) => {
        console.log(response);
        setRefreshList(!refreshList);
      })
      .catch((_) => console.log(_));
  };

  const editContact = (data) => {
    // const filteredData = data.filter((info) => info);

    console.log(data);
    api
      .patch(`/contacts/${cardId}`, data)
      .then((response) => {
        console.log(response);
        setRefreshList(!refreshList);
      })
      .catch((_) => console.log(_));
  };

  const deleteContact = (id) => {
    api
      .delete(`/contacts/${id}`)
      .then((response) => {
        console.log(response);
        setRefreshList(!refreshList);
      })
      .catch((_) => console.log(_));
  };

  return (
    <HomePageContext.Provider
      value={{
        createContact,
        deleteContact,
        editContact,
        setCardId,
        cardId,
        refreshList,
      }}
    >
      {children}
    </HomePageContext.Provider>
  );
};
