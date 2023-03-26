import { Box, Modal } from "@mui/material";
import { ModalBody, ButtonDelete, ButtonCancel } from "./style";
import { HomePageContext } from "../../providers/HomeContext";
import { useContext } from "react";
import { ModalContext } from "../../providers/ModalContext";

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

const ModalDelete = () => {
  const { openDelete, setOpenDelete } = useContext(ModalContext);

  const { cardId, deleteContact } = useContext(HomePageContext);

  return (
    <div>
      <Modal open={openDelete} onClose={() => setOpenDelete(false)}>
        <Box sx={style}>
          <ModalBody>
            <h3>Deletar contato</h3>
            <p>
              Essa ação irá excluir o contato do nosso banco de dados. Deseja
              continuar?
            </p>
            <span>
              <ButtonCancel onClick={() => setOpenDelete(false)}>
                Cancelar
              </ButtonCancel>
              <ButtonDelete onClick={() => deleteContact(cardId)}>
                Sim, excluir
              </ButtonDelete>
            </span>
          </ModalBody>
        </Box>
      </Modal>
    </div>
  );
};
export default ModalDelete;
