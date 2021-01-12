import React from "react";
import s from "./TaskItem.scss";

const TaskItem = ({ text, completed, onRemove, onUpdate }) => (
  <li className={s.TaskList__item}>
    <p className={s.TaskList__text}>{text}</p>

    <label>
      <input type="checkbox" checked={completed} onChange={onUpdate} />
      Completed
    </label>
    <button type="button" onClick={onRemove}>
      Delete
    </button>
  </li>
);

export default TaskItem;
