import styled from "styled-components";

export const Container = styled.div`
  width: 90%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 15px;

  .menu--contacts__info {
    display: flex;
    width: 20%;
    justify-content: flex-start;
    align-items: center;
    position: relative;

    h1 {
      font-weight: 600;
      font-size: 24px;
    }

    #totalList {
      font-size: 14px;
      margin-left: 20px;
      color: gray;

      position: absolute;
      left: 100px;
      bottom: 4px;
    }

    @media screen and (max-width: 768px) {
      #totalList {
        display: none;
      }
    }
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 20px;

    @media screen and (max-width: 580px) {
      justify-content: flex-end;
      margin-right: 0px;
    }

    .btn--add {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 8px 12px;
      border-radius: 8px;
      margin-right: 25px;

      color: white;
      background-color: #8a86ff;
      font-weight: 500;

      svg {
        margin-right: 8px;
      }

      &:hover {
        background-color: #7e7aef;
        transition: 0.2s;
      }

      @media screen and (max-width: 768px) {
        padding: 8px 10px;
        background-color: transparent;
        font-size: 20px;
        margin-right: 0px;

        svg {
          margin-right: 0px;
          color: #8a86ff;
        }
        p {
          display: none;
        }
      }
    }
  }

  #search-input {
    padding: 8px 15px;
    background-color: transparent;
    border-radius: 10px;
    border: 1px solid #9c99ff;
    color: gray;

    input {
      margin-left: 8px;
      background-color: transparent;

      &:focus::placeholder {
        color: transparent;
        transition: 0.2s;
      }
    }

    svg {
      color: white;
    }

    @media screen and (max-width: 540px) {
      padding: 2px 10px;
      margin-right: 10px;
      width: 60%;

      input {
        width: 100%;
        font-size: 14px;
      }
    }
  }
`;

export const ButtonCreate = styled.button`
  width: 30%;
  display: flex;
  justify-content: center;
  padding: 10px 12px;
  border-radius: 8px;

  color: white;
  background-color: #8a86ff;
  font-weight: 500;

  svg {
    margin-right: 10px;
  }

  &:hover {
    background-color: #7e7aef;
  }
`;
