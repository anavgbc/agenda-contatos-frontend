import { ButtonBox } from "./style";

const Button = ({ text, type }) => {
  return (
    <>
      <ButtonBox type={type}>{text}</ButtonBox>
    </>
  );
};
export default Button;
