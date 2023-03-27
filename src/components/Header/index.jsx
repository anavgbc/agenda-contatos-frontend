import { Container, BtnLogOut } from "./style";
import { TfiThought } from "react-icons/tfi";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthContext";
import { useNavigate } from "react-router-dom";
import { HomePageContext } from "../../providers/HomeContext";

const Header = () => {
  const { userData, token } = useContext(AuthContext);

  const navigate = useNavigate();

  const { listContacts, setIsFavorites, image } = useContext(HomePageContext);

  return (
    <Container>
      <div
        className="logo-header"
        onClick={() => {
          setIsFavorites(false);
          listContacts(userData);
        }}
      >
        <TfiThought />
        <p>Wuzzup</p>
      </div>

      <div className="user-info">
        {token ? (
          <BtnLogOut
            onClick={() => {
              localStorage.clear();
              navigate("/login", { replace: true });
            }}
          >
            Sair
          </BtnLogOut>
        ) : (
          <BtnLogOut
            className="btn--login"
            onClick={() => {
              navigate("/login", { replace: true });
            }}
          >
            Login
          </BtnLogOut>
        )}
        {token && (
          <>
            <div>
              <figure>
                <img src={userData.img} alt="" />
              </figure>
              <p>{userData.firstName}</p>
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default Header;
