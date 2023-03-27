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

  const [number, setnumber] = useState();

  const { openDelete, setOpenDelete } = useContext(ModalContext);

  // console.log(typeof number);

  const createContact = (data) => {
    if (number) {
      data.number = number;
      console.log(number);
    }

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

    if (number) {
      finalData.number = number;
      console.log(number);
    }

    const keys = Object.keys(data);
    const values = Object.values(data);

    values.forEach((value, index) => {
      if (value !== "") {
        if (keys[index] === "firstName") {
          finalData.firstName = value;
        } else if (keys[index] === "email") {
          finalData.email = value;
        } else if (keys[index] === "lastName") {
          finalData.lastName = value;
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
        setContacts(
          list.sort((a, b) => a.firstName.localeCompare(b.firstName))
        );
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
        elem.firstName.toLowerCase().includes(searchContact.toLowerCase()) ||
        elem.number.includes(searchContact)
    );

    setFilterList(result);
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
        setnumber,
        number,
      }}
    >
      {children}
    </HomePageContext.Provider>
  );
};
