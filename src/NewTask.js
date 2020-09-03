import React from "react";

class NewTask extends React.Component {
  state = {
    taskDetails: "",
    selectedCat: "",
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.submitHandler(this.state);
  };

  changeHandler = (e) => {
    this.setState({ taskDetails: e.target.value });
  };

  catChangeHandler = (e) => {
    this.setState({ selectedCat: e.target.value });
  };

  render() {
    return (
      <form class="new-task-form" onSubmit={this.submitHandler}>
        <input
          type="text"
          placeholder="New Task Details"
          name="taskDetails"
          value={this.state.taskDetails}
          onChange={this.changeHandler}
        />
        <select value={this.state.selectedCat} onChange={this.catChangeHandler}>
          <option value="Code">Code</option>
          <option value="Food">Food</option>
          <option value="Money">Money</option>
          <option value="Misc">Misc</option>
        </select>
        <input type="submit" value="Add Task" />
      </form>
    );
  }
}

export default NewTask;
