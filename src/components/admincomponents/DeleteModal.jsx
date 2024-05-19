import React from 'react';
import {
  Modal,
  Backdrop,
  Fade,
  Button,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const DeleteModal = ({ isOpen, onClose, onConfirm, product }) => {
    const classes = useStyles();

    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isOpen}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Confirm Delete</h2>
            <p id="transition-modal-description">Are you sure you want to delete this {product?.name}?</p>
            <div style={{ marginTop: "10px" }}>
            <Button style={{marginRight: "5px"}} variant="contained" color="primary" onClick={onConfirm}>
              Yes
            </Button>
            <Button style={{marginRight: "5px"}} variant="contained" color="secondary" onClick={onClose}>
              No
            </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    );
}

export default DeleteModal
