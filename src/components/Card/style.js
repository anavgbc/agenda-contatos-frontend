import styled from "styled-components";

export const Container = styled.li`
  width: 100%;
  background-color: white;
  padding: 10px;

  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 10px;

  margin-bottom: 10px;

  &:hover {
    background-color: #f5f2fe;
    cursor: pointer;
    transition: 0.2s;
  }

  .options--menu {
    li {
      background-color: pink;
    }
  }

  .container-info {
    display: flex;
    flex-direction: row;
    align-items: center;

    max-width: 35%;

    h2 {
      font-weight: 500;
      font-size: 18px;
    }
    h2 {
      width: 14ch;

      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    #info-email {
      font-size: 14px;
      margin-top: 5px;
      width: 20ch;

      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;

      color: rgb(172, 172, 172);
      @media screen and (max-width: 480px) {
        display: none;
      }
    }
  }

  small {
    color: rgb(172, 172, 172);
    font-size: 14px;
    text-align: start;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .container-img {
    width: 35px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 25px;

    img {
      width: 100%;
      /* height: 25%; */
      border-radius: 50%;
    }

    @media screen and (max-width: 390px) {
      display: none;
    }
  }

  .container-number {
    display: flex;
    flex-direction: row;
    align-items: center;

    @media screen and (max-width: 390px) {
      margin: 0px 8px;
    }

    .contact--favorited {
      color: #9c99ff;
      margin-right: 15px;

      #nonFavorited {
        display: none;
      }

      &:hover {
        transition: 0.2s;
        #favorited {
          display: none;
        }

        #nonFavorited {
          display: flex;
        }
      }
    }

    .contact--nonFavorited {
      color: #9c99ff;
      margin-right: 15px;

      #favorited {
        display: none;
      }

      &:hover {
        transition: 0.2s;
        #nonFavorited {
          display: none;
        }

        #favorited {
          display: flex;
        }
      }
    }

    #info-number {
      font-weight: 500;
    }
  }
  .container-btns {
    margin: 0px 10px;
    padding: 5px 8px;
    border-radius: 50%;

    &:hover {
      background-color: #eeeeee;
    }
  }
`;
