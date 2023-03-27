import { Box, Button, Modal } from "@mui/material";
import Input from "../Input";
import { HiOutlineMail } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ModalBody, ButtonAdd } from "./style";
import * as yup from "yup";
import { BsPerson } from "react-icons/bs";
import { HomePageContext } from "../../providers/HomeContext";
import { useContext, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
};

const ModalHome = ({ id, edit }) => {
  const {
    handleClose,
    open,
    isEdit,
    number,
    setnumber,
    editContact,
    createContact,
  } = useContext(HomePageContext);

  // console.log(number);

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    firstName: yup.string().required("*"),
  });

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <ModalBody>
            {isEdit ? <h3>Editar contato</h3> : <h3>Criar contato</h3>}
            <form
              onSubmit={
                isEdit ? handleSubmit(editContact) : handleSubmit(createContact)
              }
            >
              <div className="contact-name">
                <Input
                  placeholder={"Nome"}
                  title="Nome"
                  type="text"
                  Icon={BsPerson}
                  {...register("firstName")}
                  error={errors.firstName?.message}
                  grayColor
                />
                <Input
                  placeholder={"Sobrenome"}
                  title="Sobrenome"
                  type="text"
                  Icon={BsPerson}
                  {...register("lastName")}
                  error={errors.lastName?.message}
                  grayColor
                />
              </div>
              <span id="contact--number">
                <label htmlFor="">Telefone</label>
                <PhoneInput
                  className="number--input"
                  placeholder="+55 00 00000-0000"
                  defaultCountry="BR"
                  international
                  value={number}
                  onChange={setnumber}
                  // inputComponent={Input}
                />
              </span>

              {/* <Input
                  {...register("number")}
                error={errors.number?.message}
                placeholder={"Numero"}
                title="Numero"
                type="text"
                Icon={BsTelephone}
                grayColor
              /> */}

              <Input
                placeholder={"Email"}
                title="Email"
                type="text"
                Icon={HiOutlineMail}
                {...register("email")}
                error={errors.email?.message}
                grayColor
              />
              <span id="upload-image">
                {/* <label htmlFor="">Imagem</label> */}
                {/* <input
                  type="file"
                  name=""
                  id=""
                  onChange={(e) => {
                    // setimage(e.target.files[0]);
                  }}
                /> */}
              </span>
              <ButtonAdd type="submit">Salvar</ButtonAdd>
            </form>
          </ModalBody>
        </Box>
      </Modal>
    </div>
  );
};
export default ModalHome;
