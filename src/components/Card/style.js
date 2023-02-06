import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  background-color: #dad8d8;
  display: flex;
  flex-direction: row;
  padding: 15px;
  justify-content: space-between;
  border-radius: 10px;

  @media screen and (min-width: 540px) {
    justify-content: space-evenly;
  }

  @media screen and (min-width: 768px) {
  }

  .container-img {
    width: 15%;

    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 540px) {
      img {
        width: 60px;
        height: 60px;
      }
    }

    @media screen and (max-width: 390px) {
      display: none;
    }
  }

  .container-info {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-direction: column;

    h2 {
      font-size: 18px;
      font-weight: 500;
      border-bottom: 1px solid gray;

      @media screen and (max-width: 390px) {
        width: 90px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }

    #info-number {
      font-weight: 500;
      color: gray;
    }

    #info-email {
      font-size: 16px;
      color: gray;

      @media screen and (max-width: 390px) {
        display: none;
      }
    }

    small {
      color: gray;
      font-size: 14px;
      text-align: start;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    @media screen and (min-width: 540px) {
      /* justify-content: space-evenly; */
      width: 50%;
    }

    @media screen and (min-width: 900px) {
      width: 90%;
      padding: 15px;
      gap: 10px;
      /* background-color: blue; */
      justify-content: space-evenly;
      flex-direction: row;
    }
  }

  .container-btns {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-around;
    gap: 10px;

    @media screen and (min-width: 900px) {
    }
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    /* margin-right: 50px; */
  }
`;
