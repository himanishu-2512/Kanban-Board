import { Avatar, Box, Typography } from '@mui/material'
import React from 'react';
import { deepOrange, deepPurple } from '@mui/material/colors';

function AvatarJS(props) {
    
  return (
    <>
    <Box sx={{margin:"15px",padding:"5px" ,display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>{props.name[0].toUpperCase()}</Avatar>
         <Box sx={{marginLeft:"15px",dispaly:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <Typography variant='h6'>
             {props.name[0].toUpperCase()+props.name.slice(1,)}
            </Typography>
            <Typography variant='body2'>
                {props.username}
                </Typography>
         </Box>
         /</Box>
    </>
  )
}

export default AvatarJS;