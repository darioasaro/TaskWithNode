import React from "react";
import Task from "./Task";

const List = ({ onChangeTaskStatus, onEditTask,onDeleteTask, tasksList, title,user }) => (
  <>
    <h3>{title}</h3>
    {tasksList.map((task, key) =>
      (<Task
        task={task}
        onChangeState={() => onChangeTaskStatus(task)}
        onEditTask={() => onEditTask(task)}
        onDeleteTask={() => onDeleteTask(task)}
        key={key}
        userLog={user}
      />)
    )}
  </>
)

export default List