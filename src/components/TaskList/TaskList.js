import React from "react";
import s from "./TaskList.scss";

import TaskItem from "../TaskItem";

const TaskList = ({ tasks, onRemoveTask, onUpdateTask }) => (
  <ul className={s.TaskList}>
    {tasks.map(({ text, id, completed }) => (
      <TaskItem
        key={id}
        id={id}
        text={text}
        completed={completed}
        onRemove={() => onRemoveTask(id)}
        onUpdate={() => onUpdateTask(id)}
      />
    ))}
  </ul>
);

export default TaskList;
