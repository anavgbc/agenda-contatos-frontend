import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { AuthContext } from "../AuthContext";
import { ModalContext } from "../ModalContext";
import { useForm } from "react-hook-form";

export const HomePageContext = createContext({});

export const HomePageContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setIsEdit(false);
  };

  const { reset } = useForm();

  const [cardId, setCardId] = useState({});
  const [contacts, setContacts] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [refreshList, setRefreshList] = useState(false);
  const [isFavorites, setIsFavorites] = useState(false);

  const [searchContact, setSearchContact] = useState("");

  const { openDelete, setOpenDelete } = useContext(ModalContext);

  const createContact = (data) => {
    api
      .post("/contacts", data)
      .then((response) => {
        setRefreshList(!refreshList);
        handleClose();
        reset();
      })
      .catch((_) => console.log(_));
  };

  const editContact = (data) => {
    const finalData = {};

    const keys = Object.keys(data);
    const values = Object.values(data);

    values.forEach((value, index) => {
      if (value !== "") {
        if (keys[index] === "name") {
          finalData.name = value;
        } else if (keys[index] === "email") {
          finalData.email = value;
        } else {
          finalData.number = value;
        }
      }
    });

    api
      .patch(`/contacts/${cardId}`, finalData)
      .then((response) => {
        setRefreshList(!refreshList);
        handleClose();
        reset();
      })
      .catch((_) => console.error(_));
  };

  const deleteContact = (id) => {
    api
      .delete(`/contacts/${id}`)
      .then((response) => {
        setRefreshList(!refreshList);
        setOpenDelete(false);
      })
      .catch((_) => console.log(_));
  };

  const favoriteContact = (id, status) => {
    api
      .patch(`/contacts/${id}`, {
        favorite: !status,
      })
      .then((response) => {
        setRefreshList(!refreshList);
      });
  };

  const listContacts = (user) => {
    api
      .get(`/users/${user.id}`)
      .then((response) => {
        const list = response.data[0].contacts;
        setContacts(list.sort((a, b) => a.name.localeCompare(b.name)));
      })
      .catch((err) => console.log(err));
  };

  const listFavorites = () => {
    api.get("/contacts/favorites").then((response) => {
      setContacts(response.data);
    });
  };

  const searchInput = () => {
    const result = contacts.filter(
      (elem) =>
        elem.name.toLowerCase().includes(searchContact.toLowerCase()) ||
        elem.number.includes(searchContact)
    );

    setFilterList(result);
  };

  const teste = () => {
    const algo = {
      name: "Ana",
      email: "",
      number: "",
    };

    const chaves = Object.keys(algo);
    const values = Object.values(algo);

    const data = {};

    console.log(chaves, values);

    values.forEach((elem, index) => {
      if (elem !== "") {
        console.log(chaves[index]);
        const chave = chaves[index];

        if (chave === "name") {
          data.name = elem;
        } else if (chave === "email") {
          data.email = elem;
        } else {
          data.number = elem;
        }
        console.log(data);
      }
    });
  };

  teste();

  return (
    <HomePageContext.Provider
      value={{
        createContact,
        deleteContact,
        editContact,
        setCardId,
        cardId,
        refreshList,
        favoriteContact,
        setContacts,
        contacts,
        listFavorites,
        listContacts,
        setSearchContact,
        searchContact,
        searchInput,
        filterList,
        setFilterList,
        handleOpen,
        handleClose,
        open,
        isEdit,
        setIsEdit,
        setIsFavorites,
        isFavorites,
      }}
    >
      {children}
    </HomePageContext.Provider>
  );
};
