import React from 'react'
import TextField from '@mui/material/TextField';
import { Box, Button, MenuItem } from '@mui/material';
import { useState } from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
function TaskForm() {
    const style = {
        margin: "10px",
        width: "400px"
    }
    const status = [
        {
            _id: 0,
            name: "To Do"
        },
        {
            _id: 1,
            name: "Doing"
        }
        , {
            _id: 2,
            name: "Done"
        }
    ]
    const [subTask, setSubTask] = useState([{ _id: 1, value: "" }])
    const removeSubTask = (id) => {
        let arr = subTask;
        const array = arr.filter((item) => {
            return item._id != id;
        })
        setSubTask(array);
    }
    const addSubTask = () => {
        setSubTask([...subTask, {
            _id: Math.floor(Math.random() * 100000),
            value: ""
        }])

    }
    return (
        <>



            <TextField
                sx={style}
                required
                id="outlined-required"
                label="Task Name"
                placeholder="e.g: Yoga and Excercise ."
            />

            <TextField
                sx={style}
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                placeholder="e.g: Yoga can help to maintain physical as well as mental health ."
            />

            <TextField 
                id="outlined-select"
                select
                label="Select"
                helperText="Please select the current status of task"
                sx={{ ...style, marginTop: "15px"}}
            >
                {status.map((option) => (
                    <MenuItem key={option._id} value={option.name}>
                        {option.name}
                    </MenuItem>
                ))}
            </TextField>

            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                {subTask.map((item => {
                    return (
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <TextField
                                sx={{
                                    margin: "10px",
                                    width: "380px"
                                }}
                                required
                                id="outlined-required"
                                label="Subtask"
                                defaultValue={item.value}
                                placeholder="e.g: I will do the pranayams."
                            />
                            <CloseOutlinedIcon sx={{
                                ":hover": {
                                    color: "#6e120b"
                                }
                            }} onClick={() => { removeSubTask(item._id) }} />
                        </Box>
                    )
                }))}
                <Button sx={{...style,
                    background: "#4C5CF4", color: "white", width: "400px", ":hover": {
                        color: "white",
                        background: "#4C5CF4"
                    }
                }} onClick={() => { addSubTask() }}>+ Add a new Subtask</Button>

               <Button sx={{margin:"40px",
                    background: "green", color: "white", width: "200px", ":hover": {
                        color: "white",
                        background: "green"
                    }
                }} onClick={() => { addSubTask() }}>SAVE</Button>

            </Box>


        </>
    )
}

export default TaskForm