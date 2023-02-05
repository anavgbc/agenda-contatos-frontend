import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { HiOutlineMail } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { BsPerson, BsTelephone } from "react-icons/bs";
import Input from "../Input";
import { HomePageContext } from "../../providers/HomeContext";
import { useContext } from "react";
// import Button from "../ButtonSubmit";

const ModalHome = ({ children, id, isAdd }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { createContact, editContact, setCardId, cardId } =
    useContext(HomePageContext);

  const schema = yup.object().shape({
    email: yup.string().email("E-mail inválido"),
  });
  console.log(cardId);
  console.log(isAdd);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <Button
        type="button"
        onClick={() => {
          onOpen();
          setCardId(id);
        }}
      >
        {children}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{children} contato</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {isAdd ? (
              <form onSubmit={handleSubmit(createContact)}>
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
                <button type="submit">Salvar</button>
              </form>
            ) : (
              <form onSubmit={handleSubmit(editContact)}>
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
                <button type="submit">Salvar</button>
              </form>
            )}
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ModalHome;
