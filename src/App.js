import React from "react";
import "./App.css";
import { CATEGORIES } from "./data";
import Task from "./Task";
import NewTask from "./NewTask";
import Category from "./ Category"

class App extends React.Component {
  state = {
    tasks: [
      {
        text: "Buy rice",
        category: "Food",
      },
      {
        text: "Save a tenner",
        category: "Money",
      },
      {
        text: "Build a todo app",
        category: "Code",
      },
      {
        text: "Build todo API",
        category: "Code",
      },
      {
        text: "Get an ISA",
        category: "Money",
      },
      {
        text: "Cook rice",
        category: "Food",
      },
      {
        text: "Tidy house",
        category: "Misc",
      },
    ],
    categories: CATEGORIES,
    selectedCat: 'All'
  };

  clickHandler = (e) => {
    this.setState({selectedCat: e.target.name})
  };

  renderCategories = () => {
    console.log(this.state.categories)
    return this.state.categories.map(cat => <Category cat={cat} clickHandler={this.clickHandler} selectedCat={this.state.selectedCat}/> )
  };

  renderTasks = () => {
    return this.filteredTasks().map((t) => (
      <Task t={t} handleDelete={this.handleDelete} />
    ));
  };

  filteredTasks = () => {
    let selectedObj = this.state.selectedCat
    if (selectedObj === 'All'){
      return this.state.tasks}
    else {
      let taskList = this.state.tasks.filter((t) => t.category === selectedObj)
      return taskList  }}
    

  submitHandler = (object) => {
    let newObject = { text: object.taskDetails, category: object.selectedCat };
    let newArray = [...this.state.tasks, newObject];
    this.setState({ tasks: newArray });
  };

  handleDelete = (textObj) => {
    let newArray = [...this.state.tasks];
    let updatedArray = newArray.filter((t) => t.text !== textObj.text);
    this.setState({ tasks: updatedArray });
  };

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <div className="categories">
          <h5>Category filters</h5>
          {this.renderCategories()}
        </div>
        <div class="tasks">
          <h5> Tasks </h5>
          <NewTask submitHandler={this.submitHandler} />
          {this.renderTasks()}
        </div>
      </div>
    );
  }
}

export default App;
