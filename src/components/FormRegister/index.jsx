import { useContext } from "react";
import Input from "../Input";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";
import { BsPerson, BsTelephone } from "react-icons/bs";

import Button from "../ButtonSubmit";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormContainer } from "./style";
import { RegisterContext } from "../../providers/RegisterContext";
import { Link } from "react-router-dom";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const FormLogin = () => {
  const { onSubmit, schema, setNumber, number } = useContext(RegisterContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder={"Nome"}
          title="Nome"
          type="text"
          Icon={BsPerson}
          {...register("name")}
          error={errors.name?.message}
        />
        <span id="user--number">
          <label htmlFor="">Telefone</label>
          <PhoneInput
            className="number--input"
            placeholder="+55 00 00000-0000"
            defaultCountry="BR"
            international
            value={number}
            onChange={setNumber}
          />
        </span>
        <Input
          placeholder={"Email"}
          title="Email"
          type="text"
          Icon={HiOutlineMail}
          {...register("email")}
          error={errors.email?.message}
        />
        <Input
          placeholder={"Senha"}
          title="Senha"
          type="password"
          Icon={AiOutlineEye}
          {...register("password")}
          error={errors.password?.message}
        />
        <Button type="submit" text="Cadastrar"></Button>
        <span>
          Ja tem uma conta? <Link to={"/login"}>Login</Link>
        </span>
      </FormContainer>
    </>
  );
};
export default FormLogin;
