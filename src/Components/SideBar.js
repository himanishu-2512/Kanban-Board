import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import MailIcon from "@mui/icons-material/Mail";
import AvatarJS from "../SubComponents/Avatar";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useRef } from "react";

function SideBar() {
  const ref=useRef(null)
  const scrollBar = {
    "::-webkit-scrollbar": {
      width: "1px",
    },
    "::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },

    "::-webkit-scrollbar-thumb": {
      background: "#1a205239",
    },

    "::-webkit-scrollbar-thumb:hover ": {
      background: "#555",
    },
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    backdropFilter: "blur(100px)",
    outline: "0",
    p: 4,
    overflow: "auto",
  };

  const [sideBar, setSideBar] = useState(true);
  const [boardName, setBoardName] = useState("");
  const [boards, setBoards] = useState(["DashBoard", "DashBoard", "DashBoard"]);
  const [open, setopen] = useState(false);

  const handleNames = (e) => {
    setBoardName(e.target.value);
  };
  const handleSideBar = () => {
    setSideBar(!sideBar);
  };
  const handleOpen = () => {
    setopen(!open);
  };
  const handleBoards = () => {
    setBoards([...boards, boardName]);
    handleOpen();
  };
  const handleEye=(e)=>{
if(e.clientX>(window.innerWidth/2)){
    // eslint-disable-next-line
  ref.current.style["left"]=`${window.innerWidth-100}`+'px'

}
else{
  ref.current.style["left"]="0px"
  ref.current.style["marginLeft"]="0px"
}
  // eslint-disable-next-line
ref.current.style["top"]=`${e.clientY}`+'px'

  }
  const handleButton=(e)=>{
    // console.log(ref)
    if(ref.current.offsetLeft>(window.innerWidth/2)){
  
      ref.current.style["marginLeft"]="-100px"
    }
    else{
      ref.current.style["marginLeft"]="0px"
    }
  }
 
  return (
    <>
      {!sideBar ? (
        <Button  ref={ref} draggable onDragEnd={handleEye}
        onMouseEnter={handleButton}
        onMouseOut={()=>{
         
          ref.current.style["marginLeft"]="0px"}}
       
          sx={{
            marginLeft:"0",
            positon:"absolute",
            backgroundColor: "#4c5cf4",
            position: "absolute",
            padding:"10px 20px 10px 20px",
            left: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "30px",
            "z-index": "1200",
            width:"100px",
            transition:"0.2s",

            ":hover": {
              transition:"0.5s",
              backgroundColor: "#4c5cf4",
              width: "200px",
              color:"white",
              "&::after":{
                transitionDelay:"0.5s",
                color:"white",
                content:'"show SideBar"'

              }

            },
            
          }}
          onClick={handleSideBar}
        >
          <VisibilityIcon sx={{ color: "white", margin: "10px",pointerEvents:"none" }} />
        </Button>
      ) : (
        <Box sx={{ width: "20vw", ...scrollBar }}>
          <Drawer variant="persistent" open={sideBar} sx={{}}>
            <AvatarJS name={"himanshu singh"} username={"himanshu"} />

            <Button
              onClick={handleOpen}
              variant="outlined"
              elevation={0}
              sx={{
                width: "80%",
                marginLeft: "15px",
                border: "2px solid gray",
                transitionDuration: "0.3s",
                color: "gray",
                ":hover": {
                  transitionDuration: "0.2s",
                  color: "black",
                  border: "2px solid gray",
                },
              }}
            >
              + Add a new Board
            </Button>
            <Modal
              sx={{
                backdropFilter: "blur(1px)",
                overflow: "auto",
                padding: "100px",
              }}
              open={open}
              onClose={handleOpen}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={{ ...style, maxHeight: "90vh" }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Create a New Board
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <TextField
                    sx={{
                      margin: "10px",
                      width: "380px",
                    }}
                    required
                    id="outlined-required"
                    label="Board Name"
                    defaultValue={""}
                    onChange={handleNames}
                    placeholder="e.g: I will do the pranayams."
                  />

                  <Button
                    sx={{
                      margin: "40px",
                      background: "green",
                      color: "white",
                      width: "200px",
                      ":hover": {
                        color: "white",
                        background: "green",
                      },
                    }}
                    onClick={() => {
                      handleBoards();
                    }}
                  >
                    SAVE
                  </Button>
                </Box>
              </Box>
            </Modal>

            <List sx={{ width: "20vw", height: "100vw", ...scrollBar }}>
              {boards.map((text, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <MailIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body1">{text}</Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Button
              sx={{
                width: "80%",
                height: "10vh",
                backgroundColor: "#4c5cf4",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "40px",
                borderRadius: "30px",
                marginLeft: "-30px",
                ":hover": { backgroundColor: "#4c5cf4" },
              }}
              onClick={handleSideBar}
            >
              <VisibilityOffIcon sx={{ color: "white", margin: "10px" }} />
              <Typography sx={{ color: "white" }}>Hide SideBar</Typography>
            </Button>
          </Drawer>
        </Box>
      )}
    </>
  );
}

export default SideBar;
