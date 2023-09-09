import React from "react";
import { useState } from "react";
import AddTask from "./AddTask";
import TaskContainers from "./TaskContainers";
import { Box } from "@mui/material";

function Board() {
  const tasks = [
    {
      _id: 0,
      title: "Yoga",
      description: "I want to do yoga daily",
      status: "To DO",
      subTasks: [
        {
          _id: 0,
          content: "Yes this is the first one",
        },
        {
          _id: 1,
          content: "Yes this is the second  one",
        },
        {
          _id: 2,
          content: "Yes this is the third one",
        },
      ],
    },
    {
      _id: 1,
      title: "Yoga and Yogaas",
      status: "To DO",
      description: "I want to do yoga daily",
      subTasks: [
        {
          _id: 0,
          content: "Yes this is the first second",
        },
        {
          _id: 0,
          content: "Yes this is the second  second",
        },
        {
          _id: 0,
          content: "Yes this is the third second",
        },
      ],
    },
    {
      _id: 2,
      title: "Yoga and Chai",
      status: "To DO",
      description: "I want to do yoga daily and drink chai.",
      subTasks: [
        {
          _id: 0,
          content: "Yes this is the first third",
        },
        {
          _id: 0,
          content: "Yes this is the second  third",
        },
        {
          _id: 0,
          content: "Yes this is the third third",
        },
      ],
    },

    {
      _id: 3,
      title: "Yoga",
      status: "Doing",
      description: "I want to do yoga daily",
      subTasks: [
        {
          _id: 0,
          content: "Yes this is the first one",
        },
        {
          _id: 1,
          content: "Yes this is the second  one",
        },
        {
          _id: 2,
          content: "Yes this is the third one",
        },
      ],
    },
    {
      _id: 4,
      title: "Yoga and Yogaas",
      status: "Doing",

      description: "I want to do yoga daily",
      subTasks: [
        {
          _id: 0,
          content: "Yes this is the first second",
        },
        {
          _id: 1,
          content: "Yes this is the second  second",
        },
        {
          _id: 2,
          content: "Yes this is the third second",
        },
      ],
    },
    {
      _id: 5,
      title: "Yoga and Chai",
      status: "Doing",
      description: "I want to do yoga daily and drink chai.",
      subTasks: [
        {
          _id: 0,
          content: "Yes this is the first third",
        },
        {
          _id: 1,
          content: "Yes this is the second  third",
        },
        {
          _id: 2,
          content: "Yes this is the third third",
        },
      ],
    },

    {
      _id: 6,
      title: "Yoga",
      status: "Done",
      description: "I want to do yoga daily",
      subTasks: [
        {
          _id: 0,
          content: "Yes this is the first one",
        },
        {
          _id: 1,
          content: "Yes this is the second  one",
        },
        {
          _id: 2,
          content: "Yes this is the third one",
        },
      ],
    },
    {
      _id: 7,
      title: "Yoga and Yogaas",
      status: "Done",

      description: "I want to do yoga daily",
      subTasks: [
        {
          _id: 0,
          content: "Yes this is the first second",
        },
        {
          _id: 1,
          content: "Yes this is the second  second",
        },
        {
          _id: 2,
          content: "Yes this is the third second",
        },
      ],
    },
    {
      _id: 8,
      title: "Yoga and Chai",
      status: "To DO",

      description: "I want to do yoga daily and drink chai.",
      subTasks: [
        {
          _id: 0,
          content: "Yes this is the first third",
        },
        {
          _id: 1,
          content: "Yes this is the second  third",
        },
        {
          _id: 2,
          content: "Yes this is the third third",
        },
      ],
    },
  ];
  const newTask = {};
  const taskStatus = tasks.reduce(function (values, items) {
    if (!values.includes(items.status)) {
      values.push(items.status);
      newTask[items.status] = [];
      newTask[items.status].push(items);
    } else {
      newTask[items.status].push(items);
    }
    return values;
  }, []);

  const [taskList, setTaskList] = useState(tasks);
  return (
    <>
      <Box sx={{ backgroundColor: "#F4F7FD", width: "100%", height: "100vh" }}>
        <AddTask setTaskList={setTaskList} taskList={taskList} />
        <Box
          sx={{
            display: "flex",
            alignItems:"flex-start"
          }}
        >
          {taskStatus.length > 0
            ? taskStatus.map((item) => {
                return <TaskContainers taskList={newTask[item]} title={item} />;
              })
            : ""}
        </Box>
      </Box>
    </>
  );
}

export default Board;
