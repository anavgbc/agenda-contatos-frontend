import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Container } from "./style";
import { useContext, useState } from "react";
import { HomePageContext } from "../../providers/HomeContext";
import BasicMenu from "../CardMenu";
import ModalHome from "../Modal";

const Card = ({ user, id }) => {
  const { favoriteContact, setCardId, cardId } = useContext(HomePageContext);

  return (
    <>
      <Container>
        <div className="container-info">
          <figure className="container-img">
            <img src={user.img} alt="" />
          </figure>

          <div>
            <h2>{user.firstName}</h2>
            <p id="info-email">{user.email}</p>
          </div>
        </div>

        <small>{user.createdAt.split("T")[0]}</small>

        <div className="container-number">
          {user.favorite ? (
            <span className="contact--favorited">
              <span
                id="favorited"
                onClick={() => favoriteContact(user.id, user.favorite)}
              >
                <AiFillStar />
              </span>
              <span
                id="nonFavorited"
                onClick={() => favoriteContact(user.id, user.favorite)}
              >
                <AiOutlineStar />
              </span>
            </span>
          ) : (
            <span className="contact--nonFavorited">
              <span
                id="favorited"
                onClick={() => favoriteContact(user.id, user.favorite)}
              >
                <AiFillStar />
              </span>
              <span
                id="nonFavorited"
                onClick={() => favoriteContact(user.id, user.favorite)}
              >
                <AiOutlineStar />
              </span>
            </span>
          )}
          <p id="info-number">{user.number}</p>
        </div>

        <div className="container-btns">
          <BasicMenu id={id} />
        </div>
      </Container>
    </>
  );
};

export default Card;
