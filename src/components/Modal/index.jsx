import { Box, Button, Modal } from "@mui/material";
import Input from "../Input";
import { HiOutlineMail } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ModalBody, ButtonAdd } from "./style";
import * as yup from "yup";
import { BsPerson, BsTelephone } from "react-icons/bs";
import { HomePageContext } from "../../providers/HomeContext";
import { useContext, useState } from "react";
import { api } from "../../services/api";

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
  const { handleClose, open, isEdit, cardId, editContact, createContact } =
    useContext(HomePageContext);

  const schema = yup.object().shape({
    // email: yup.string().email("E-mail inválido"),
  });

  const {
    register,
    handleSubmit,
    reset,
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
              <Input
                placeholder={"Nome"}
                title="Nome"
                type="text"
                Icon={BsPerson}
                {...register("name")}
                error={errors.name?.message}
                grayColor
              />
              <Input
                placeholder={"Email"}
                title="Email"
                type="text"
                Icon={HiOutlineMail}
                {...register("email")}
                error={errors.email?.message}
                grayColor
              />
              <Input
                placeholder={"Numero"}
                title="Numero"
                type="text"
                Icon={BsTelephone}
                {...register("number")}
                error={errors.number?.message}
                grayColor
              />
              <ButtonAdd type="submit">Salvar</ButtonAdd>
            </form>
          </ModalBody>
        </Box>
      </Modal>
    </div>
  );
};
export default ModalHome;
