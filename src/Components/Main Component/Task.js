import { Box, Button, Card,CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'

function Task({props}) {
  // console.log(props,"yes")

  return (
    <>
    <Box  draggable onDragStart={()=>{console.log(props._id,"draaging stated")}} sx={{margin:"20px"}} onDragEnd={()=>{console.log("dropped")}}>
    <Card sx={{minWidth:"300px" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    </Box>
    </>
  )
}

export default Task