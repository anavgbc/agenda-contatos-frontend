import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FiMoreVertical, FiEdit3, FiTrash } from "react-icons/fi";
import { HomePageContext } from "../../providers/HomeContext";
import { useContext } from "react";
import { ModalContext } from "../../providers/ModalContext";

export default function BasicMenu({ id }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { setIsEdit, setCardId, searchInput, handleOpen } =
    useContext(HomePageContext);

  const { setOpenDelete } = useContext(ModalContext);

  return (
    <div>
      <FiMoreVertical
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Dashboard
      </FiMoreVertical>
      <Menu
        // sx={{
        //   width: "30%",
        // }}
        className="options--menu"
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          sx={{
            // backgroundColor: "pink",
            svg: {
              marginRight: "10px",
              width: "20%",
            },
            "&:hover": {
              backgroundColor: "red",
            },
          }}
          onClick={() => {
            setIsEdit(true);
            setCardId(id);
            handleOpen();
            handleClose();
          }}
        >
          <FiEdit3 />
          Editar
        </MenuItem>
        <MenuItem
          sx={{
            // backgroundColor: "pink",
            svg: {
              marginRight: "10px",
              width: "20%",
            },
            "&:hover": {
              backgroundColor: "red",
            },
          }}
          onClick={() => {
            setOpenDelete(true);
            setCardId(id);
            handleClose();
          }}
        >
          <FiTrash />
          Excluir
        </MenuItem>
      </Menu>
    </div>
  );
}
