
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton, TextField, Avatar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: 'none',
  outline: 'none',
  boxShadow: 24,
  p: 4,
  borderRadius: 4
};

export default function SubscriptionModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
            <div className='flex items-center space-x-3'>
              <IconButton onClick={handleClose} aria-label='delete'>
                <CloseIcon />
              </IconButton>
            
          </div>
          <div className='flex justify-center py-10'>
      <div className='w-[80%] space-y-10'>
    <div className='p-5 rounded-md flex items-center justify-between shadow-lg'>
<h1>Blue subscribers with  a verified phone number will get  a blue checkmark onces approved.</h1>
    </div>
      </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
