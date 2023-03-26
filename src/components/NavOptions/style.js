import styled from "styled-components";

export const Container = styled.ul`
  width: 10%;
  height: 100%;
  background-color: white;
  gap: 5px;
  border-top-left-radius: 9px;

  @media screen and (max-width: 500px) {
    display: none;
  }

  @media screen and (min-width: 760px) {
    width: 20%;
  }
`;

export const Option = styled.li`
  height: 10%;
  background-color: white;
  margin-bottom: 5px;

  display: flex;
  flex-direction: row;
  align-items: center;
  color: #acacac;

  &:nth-child(1) {
    border-top-left-radius: 9px;
    margin-top: 10px;
  }

  p {
    margin-left: 15px;
    font-weight: 500;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  span {
    width: 2%;
    height: 100%;
    background-color: transparent;
    margin-right: 15px;

    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &:hover {
    background-color: #f5f2fe;
    transition: 0.4s;

    cursor: pointer;

    span {
      background-color: #7e7aef;
    }
  }

  &:active {
    span {
      background-color: blue;
    }
  }
`;
