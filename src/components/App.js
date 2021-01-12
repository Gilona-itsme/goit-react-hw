import React, { Component } from "react";

import { v4 as uuidv4 } from "uuid";

import Layout from "./Layout";
import TaskList from "./TaskList";
import TaskEditor from "./TaskEditor";
import Form from "./Form";
import Filter from "./Filter";
//import Counter from "./Counter/Counter";

//import taskListData from "../data/taskList-data.json";

export default class App extends Component {
  state = {
    tasks: [],
    filter: "",
  };

  changeFilter = (filter) => {
    this.setState({
      filter,
    });
  };

  addTask = (text) => {
    const task = {
      id: uuidv4(),
      text,
      completed: false,
    };

    this.setState((prevState) => {
      return {
        tasks: [...prevState.tasks, task],
      };
    });
  };

  removeTask = (taskId) => {
    console.log(taskId);
    this.setState((prevState) => {
      return {
        tasks: prevState.tasks.filter(({ id }) => id !== taskId),
      };
    });
  };

  // updateCompleted = (taskId) => {
  //   this.setState((prevState) => {
  //     return {
  //       tasks: prevState.tasks.map((task) => {
  //         if (task.id === taskId) {
  //           return {
  //             ...task,
  //             completed: !task.completed,
  //           };
  //         }
  //         return task;
  //       }),
  //     };
  //   });
  // };
  updateCompleted = (taskId) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      ),
    }));
  };

  getVisibleTasks = () => {
    const { tasks, filter } = this.state;
    return tasks.filter((task) =>
      task.text.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { tasks, filter } = this.state;

    const visibleTasks = this.getVisibleTasks();
    return (
      <Layout>
        <TaskEditor onAddTask={this.addTask} />
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        {tasks.length > 0 && (
          <TaskList
            tasks={visibleTasks}
            onRemoveTask={this.removeTask}
            onUpdateTask={this.updateCompleted}
          />
        )}

        <Form />
      </Layout>
    );
  }
}
