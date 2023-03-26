import { useContext } from "react";
import Input from "../Input";
import { FormContainer } from "./style";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";
import Button from "../ButtonSubmit";
import { AuthContext } from "../../providers/AuthContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

const FormLogin = () => {
  const { onSubmit, schema } = useContext(AuthContext);

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
        <Button type="submit" text="Entrar"></Button>
        <span>
          Ainda não tem uma conta? <Link to={"/register"}>Cadastre-se</Link>
        </span>
      </FormContainer>
    </>
  );
};
export default FormLogin;
