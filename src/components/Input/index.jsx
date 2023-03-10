import { forwardRef } from "react";
import { Container, InputBox } from "./style";

const Input = forwardRef(
  (
    { title, identify, error, Icon, type, placeholder, grayColor, ...rest },
    ref
  ) => {
    return (
      <Container>
        <label htmlFor={identify}>{title}</label>
        <span>{error && `- ${error}`}</span>
        <InputBox grayColor={grayColor}>
          {Icon && <Icon />}
          <input type={type} placeholder={placeholder} {...rest} ref={ref} />
        </InputBox>
      </Container>
    );
  }
);
export default Input;
