import React, { Component } from 'react';
import "./App.css";
import { FaTrashAlt } from 'react-icons/fa';

export default class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      taskList: []
    };
    this.inputRef = React.createRef();
  }

  componentDidMount = () => {
    this.loadLocalStorageTasks();
    this.inputFocus();
  }
  componentDidUpdate = () => this.inputFocus();
  handleChange = e => this.setState({ task: e.target.value });
  inputFocus = () => this.inputRef.current.focus();
  loadLocalStorageTasks = () => {
    const localStorageTasks = JSON.parse(localStorage.getItem('tasks'));
    if(localStorageTasks) this.setState({taskList: localStorageTasks});
  }
  addTask = e => {
    const aux = [...this.state.taskList];
    if (this.state.task) {
      const newTask = {
        task: this.state.task,
        id: Date.now()
      };
      aux.push(newTask);
      this.setState({
        taskList: this.state.taskList.concat(newTask),
        task: ''
      });
    }
    localStorage.setItem('tasks', JSON.stringify(aux));
    e.preventDefault();
  };
  addKeyPress = e => {if (e.key === "Enter") this.addTask()};
  removeTask = id => {
    const updatedTasks = this.state.taskList.filter(value => value.id !== id);
    this.setState({taskList: updatedTasks});
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  render() {
    return (
      <div id="main">
        <h1>ToDo List</h1>
        <label>
          <input
            id="input"
            value={this.state.task}
            onChange={this.handleChange}
            onKeyPress={this.addKeyPress}
            ref={this.inputRef}
          />
          <button id="add-task" onClick={this.addTask}>
            Add
          </button>
        </label>
        {this.state.taskList.map((value) => (
          <ul id="tasks">
            <li>{value.task}</li>
            <button
              className="clean"
              onClick={() => this.removeTask(value.id)}
            >
              <FaTrashAlt id="FaTrashAlt"/>
            </button>
          </ul>
        ))}
      </div>
    );
  }
}
