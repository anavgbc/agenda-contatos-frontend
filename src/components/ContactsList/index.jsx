import Card from "../../components/Card";
import { ContainerList, List } from "./style";
import { useContext, useState } from "react";
import { TfiThought } from "react-icons/tfi";
import { FiMoreHorizontal, FiEdit3, FiTrash } from "react-icons/fi";

import { HomePageContext } from "../../providers/HomeContext";
import MenuBar from "../ContactsMenu";

const ContactsList = ({ list }) => {
  const { contacts, filterList, searchContact } = useContext(HomePageContext);

  return (
    <>
      <ContainerList>
        <MenuBar list={filterList.length > 0 ? filterList : contacts} />

        {searchContact !== "" && (
          <p id="searchContent">
            Mostrando resultados para <b>{searchContact}</b>
          </p>
        )}
        <List>
          {contacts.length > 0 ? (
            list.map((contact) => (
              <>
                <Card user={contact} key={contact.id} id={contact.id} />
              </>
            ))
          ) : (
            <div className="empty-list">
              <TfiThought />
              <h3>Ops... Parece que não há nada por aqui.</h3>
              <h2>Adicione um contato</h2>
            </div>
          )}
        </List>
      </ContainerList>
    </>
  );
};

export default ContactsList;
