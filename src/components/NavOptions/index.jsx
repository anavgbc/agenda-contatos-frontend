import { Container, Option } from "./style";

import { BsPersonPlus, BsStar } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { useContext, useState } from "react";
import { HomePageContext } from "../../providers/HomeContext";
import { AuthContext } from "../../providers/AuthContext";

const NavOptions = () => {
  const { listContacts, listFavorites, setIsFavorites } =
    useContext(HomePageContext);

  const { userData } = useContext(AuthContext);

  return (
    <>
      <Container>
        <Option
          onClick={() => {
            listContacts(userData);
            setIsFavorites(false);
          }}
        >
          <span className="active-bar" />
          <BsPersonPlus />
          <p>Contatos</p>
        </Option>
        <Option
          onClick={() => {
            listFavorites();
            setIsFavorites(true);
          }}
        >
          <span className="active-bar" />
          <BsStar />
          <p>Favoritos</p>
        </Option>
        <Option>
          <span className="active-bar" />
          <AiOutlineMail />
          <p>Mensagens</p>
        </Option>
      </Container>
    </>
  );
};

export default NavOptions;
