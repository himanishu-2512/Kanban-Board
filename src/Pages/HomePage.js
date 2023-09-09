import React from "react";
import SideBar from "../Components/SideBar";
import { Box } from "@mui/material";
import Board from "../Components/Main Component/Board";

function HomePage() {
  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
    
          <SideBar />
        
        <Box
          sx={{
            flexGrow:"1",
            backgroundColor: "#F4F7FD",
            overflow: "auto",
          }}
        >
          <Board />
        </Box>
      </Box>
    </>
  );
}

export default HomePage;
