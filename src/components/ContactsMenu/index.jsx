import { Container, ButtonCreate } from "./style";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPersonPlusFill } from "react-icons/bs";
import { useContext } from "react";
import { HomePageContext } from "../../providers/HomeContext";
import ModalHome from "../Modal";

const MenuBar = ({ list }) => {
  const {
    searchContact,
    setSearchContact,
    searchInput,
    handleOpen,
    isFavorites,
  } = useContext(HomePageContext);
  return (
    <>
      <ModalHome />
      <Container>
        <div className="menu--contacts__info">
          {isFavorites ? <h1>Favoritos</h1> : <h1>Contatos</h1>}
          {list.length > 0 && <p id="totalList">{list.length} total</p>}
        </div>

        <div>
          <div id="search-input">
            <AiOutlineSearch />
            <input
              type="text"
              placeholder="Buscar contato"
              value={searchContact}
              onChange={(e) => {
                setSearchContact(e.target.value);

                console.log(searchContact.length);
                searchContact.length > 1 && searchInput();
              }}
            />
          </div>
          <ButtonCreate
            onClick={() => {
              handleOpen();
            }}
          >
            <BsPersonPlusFill />
            <p>Adicionar</p>
          </ButtonCreate>
        </div>
      </Container>
    </>
  );
};

export default MenuBar;
