
import React from 'react'
import { Input, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { LoadingButton } from '@mui/lab';
import { useState, useEffect } from 'react';
function SignUp() {


    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState([])
    


    const val = (e) => {
        e.preventDefault();
        const { value, name } = e.target;
        setUser(() => {
            return {
                ...user,
                [name]: value,
            };
        });

     
        console.log(user)
    };

    const handle=()=>{

    }


    return (
        <>
            <Paper sx={{
                width: `${window.innerWidth / 2}`, height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }} elevation={0}>

                <Box sx={{
                    width: "100%", height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}>

                    <Box sx={{
                        padding: "20px", margin: "10px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <Typography variant='h4' sx={{margin: "10px"}}>Welcome to ProTask</Typography>
                    <Typography variant='body1'>Please enter your valid details</Typography>

                    </Box>
                    <Box sx={{
                        padding: "20px", margin: "10px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start"
                    }}>
                        <label for="email">Email</label>
                        <Input autoFocus={true} sx={{ width: "400px", height: "40px" }} type="email" name="email" onChange={val} />
                    </Box>

                    <Box sx={{
                        padding: "20px", margin: "10px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start"
                    }} >
                        <label for="password">Password</label>
                        <Input autoFocus={true} sx={{ width: "400px", height: "40px" }} type="password" name="password" onChange={val} />
                    </Box>

                    <Box sx={{
                        padding: "20px", margin: "10px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start"
                    }} >
                        <label for="confirmPassword">Confirm Password</label>
                        <Input autoFocus={true} sx={{ width: "400px", height: "40px" }} type="password" name="confirmPassword" onChange={val} />
                    </Box>
                    
                    <LoadingButton
                    onClick={handle}
                        loading={isLoading} loadingPosition={'end'}
                        sx={{
                            backgroundColor: "black", width: "300px", height: "50px", ":hover": {
                                background: "green"
                            }
                        }}
                        variant="contained">
                        Signup</LoadingButton>

                </Box>



            </Paper>
        </>
    )
}

export default SignUp