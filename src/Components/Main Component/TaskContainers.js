import { Box,  Typography } from '@mui/material'
import React from 'react'
import Task from './Task'

function TaskContainers(props) {
   
    
  return (
    <>
    <Box onDragEnter={()=>{console.log("going to drop in",props.title )}}   onDrop={()=>console.log("dropped in ",props.title)} sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
    <Typography variant='h6'>{props.title}</Typography>
     <Box sx={{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column"}}>
       { props.taskList.map((item)=>{
        return( <Task props={item}/> )
      
        })
    }
     </Box>

    </Box>
    </>
  )
}

export default TaskContainers