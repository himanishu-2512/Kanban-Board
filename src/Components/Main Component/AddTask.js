import React from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import TaskForm from './TaskForm';
function AddTask() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        backdropFilter:"blur(100px)",
        outline:"0",
        p: 4,
        overflow:"auto",
        "::-webkit-scrollbar": {
          width: "0px"
        },
        
        /* Track */
        "::-webkit-scrollbar-track" :{
          background: "#f1f1f1" 
        },
        /* Handle */
        "::-webkit-scrollbar-thumb": {
          background:"#1a205239",
        },
        /* Handle on hover */
        "::-webkit-scrollbar-thumb:hover ":{
          background: "#555",
        }
        ,
      };
  return (
    <>
   <Button onClick={handleOpen}>Create a new</Button>
      <Modal
      sx={{backdropFilter:"blur(1px)",overflow:"auto" ,padding:"100px"}}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{...style,maxHeight:"90vh"}} >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create a Task
          </Typography>
          <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <TaskForm/>
          </Box>
        </Box>
      </Modal>
    
    </>
  )
}

export default AddTask