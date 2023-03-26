import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 0px 20px;

  .logo-header {
    gap: 20px;
    color: #8a86ff;
    font-weight: 600;

    svg {
      color: pink;
    }

    &:hover {
      transition: 0.2s;
      cursor: pointer;
      color: #7e7aef;

      svg {
        color: #e28091;
      }
    }

    @media screen and (min-width: 390px) {
      margin-left: 15px;
    }
    @media screen and (max-width: 350px) {
      svg {
        display: none;
      }
    }
  }

  div {
    display: flex;
    flex-direction: row;
  }

  .user-info {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    div {
      margin: 0px 20px;
      display: flex;
      align-items: center;
      font-weight: 500;

      @media screen and (max-width: 390px) {
        img {
          display: none;
        }
        p {
          max-width: 5ch;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }

      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 15px;
        border: 2px solid #8a86ff;
        opacity: 1;

        &:hover {
          filter: brightness(90%);
          transition: 0.2s;
        }
      }
    }

    .btn--login {
      padding: 6px 20px;
      margin-right: 10px;

      background-color: #8a86ff;
      color: white;

      &:hover {
        background-color: #7e7aef;
        transition: 0.2s;
      }
    }

    h3 {
      @media screen and (max-width: 390px) {
        width: 60px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
`;
export const BtnLogOut = styled.button`
  padding: 4px 15px;
  border-radius: 5px;
  font-weight: 500;
  background-color: #ececec;
  color: #bfbfbf;

  &:hover {
    background-color: #dedede;
    transition: 0.2s;

    color: white;
  }
`;
