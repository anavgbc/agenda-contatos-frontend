import Card from "../../components/Card";
import Header from "../../components/Header";
import { Container, ContainerPage, MenuBar } from "./style";
import { AiOutlineSearch, AiOutlineUserAdd } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthContext";
import { api } from "../../services/api";

const Home = () => {
  const { token, userData } = useContext(AuthContext);

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    }

    api
      .get(`/users/${userData.id}`)
      .then((response) => setContacts(response.data[0].contacts))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <ContainerPage>
        <Container>
          <MenuBar>
            <HiMenuAlt1 />
            Contatos
            <button>
              <AiOutlineUserAdd />
              Adicionar
            </button>
            <AiOutlineSearch />
          </MenuBar>
          {contacts.length > 0 ? (
            contacts.map((contact) => <Card user={contact} key={contact.id} />)
          ) : (
            <div>Ops.. não há nada por aqui.</div>
          )}
        </Container>
      </ContainerPage>
    </>
  );
};

export default Home;
