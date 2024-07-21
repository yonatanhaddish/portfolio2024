import * as React from "react";
import "./index.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CiLink } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "#fee715",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

export default function BasicModal({
  open,
  closeModal,
  selectedSingleProject,
}) {
  console.log("selectedProject", selectedSingleProject);

  return (
    <div>
      <Modal
        open={open}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-parent">
          <Box className="modal-box">
            <h1 className="modal-title">{selectedSingleProject.name}</h1>
            <Typography id="modal-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <Box className="modal-icons">
              <CiLink />
              <FaGithub />
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
