import React from "react";
import "./App.css";
import { CATEGORIES } from "./data";
import Task from "./Task";
import NewTask from "./NewTask";

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
    Food: false,
    Money: false,
    Code: false,
    Misc: false,
  };

  clickHandler = (e) => {
    this.setState({
      Food: false,
      Money: false,
      Code: false,
      Misc: false,
    });
    this.setState({ [e.target.name]: true });
  };

  renderCategories = () => {
    return this.state.categories.map((cat) => (
      <button name={cat} onClick={(e) => this.clickHandler(e)}>
        {cat}
      </button>
    ));
  };

  renderTasks = () => {
    return this.filteredTasks().map((t) => (
      <Task t={t} handleDelete={this.handleDelete} />
    ));
  };

  filteredTasks = () => {
    if (this.state.Food) {
      let taskList = this.state.tasks.filter((t) => t.category === "Food");
      return taskList;
    }
    if (this.state.Money) {
      let taskList = this.state.tasks.filter((t) => t.category === "Money");
      return taskList;
    }
    if (this.state.Code) {
      let taskList = this.state.tasks.filter((t) => t.category === "Code");
      return taskList;
    }
    if (this.state.Misc) {
      let taskList = this.state.tasks.filter((t) => t.category === "Misc");
      return taskList;
    } else {
      return this.state.tasks;
    }
  };

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
