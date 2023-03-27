import { ClassNames } from "@emotion/react";
import { forwardRef } from "react";
import { Container, InputBox } from "./style";

const Input = forwardRef(
  (
    { title, identify, error, Icon, type, placeholder, grayColor, ...rest },
    ref
  ) => {
    return (
      <Container>
        <label htmlFor={identify}>{title} </label>
        <span className="error--name">{error && `${error}`}</span>
        {error ? (
          <InputBox grayColor={grayColor} className="error">
            {Icon && <Icon />}
            <input type={type} placeholder={placeholder} {...rest} ref={ref} />
          </InputBox>
        ) : (
          <InputBox grayColor={grayColor}>
            {Icon && <Icon />}
            <input type={type} placeholder={placeholder} {...rest} ref={ref} />
          </InputBox>
        )}
      </Container>
    );
  }
);
export default Input;
