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

const FormLogin = () => {
  const { onSubmit, schema } = useContext(RegisterContext);

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
        <Input
          placeholder={"(00) 00000-0000"}
          title="Telefone"
          type="text"
          Icon={BsTelephone}
          {...register("number")}
          error={errors.number?.message}
          // onChange={(e) => {
          //   e.target.value = e.target.value.replace(/(\s)/, "");
          //   e.target.value = e.target.value.replace(/(\D)/, "");
          //   e.target.value = e.target.value.replace(
          //     /(\d{2})(\d{5})(\d{4})/,
          //     "($1) $2-$3"
          //   );
          // }}
          // maxLength={15}
        />
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
          type="text"
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
