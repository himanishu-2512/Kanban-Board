import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import { Box } from "@mui/material";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <Box sx={{width:"100vw",height:"100vh",margin:'0px',padding:'0px'}}>
      
      <BrowserRouter>
				<Routes>

        <Route exact="/" path="/" element={<LogIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
         <Route path="/home" element={<HomePage/>} />
					
				</Routes>
			</BrowserRouter>
    </Box>
  );
}

export default App;
