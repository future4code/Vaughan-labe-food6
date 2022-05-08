import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid white',
  boxShadow: 24,
  p: 4,
};

export const TransitionsModal = (props) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  return (
    <div>
      <Button onClick={handleOpen} sx={{
    width: 100,
    color: 'primary.main',
  }}>{props.topButton}</Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open} >
          <Box sx={style} flexDirection='column' justifyContent='center' display='flex' alignItems='center'>
            <Typography   id="transition-modal-title" variant="h6" component="h2">
              {props.textoModal}
            </Typography>
            <Typography flexDirection='column' justifyContent='center' display='flex' alignItems='center' id="transition-modal-description" sx={{ mt: 2 }}>
              {props.input}<br></br>
              {props.botao}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
