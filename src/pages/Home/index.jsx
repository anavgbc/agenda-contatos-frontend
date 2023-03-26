import Header from "../../components/Header";
import { Container, ContainerPage } from "./style";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthContext";
import { api } from "../../services/api";
import { HomePageContext } from "../../providers/HomeContext";
import NavOptions from "../../components/NavOptions";
import ContactsList from "../../components/ContactsList";
import ModalDelete from "../../components/ModalDelete";

const Home = () => {
  const { token, userData } = useContext(AuthContext);

  const { refreshList, listContacts, contacts, filterList } =
    useContext(HomePageContext);

  useEffect(() => {
    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      listContacts(userData);
    }
  }, [refreshList]);

  return (
    <>
      <ContainerPage>
        <ModalDelete />
        <Header />
        <Container>
          <NavOptions />
          <ContactsList list={filterList.length > 0 ? filterList : contacts} />
        </Container>
      </ContainerPage>
    </>
  );
};

export default Home;
