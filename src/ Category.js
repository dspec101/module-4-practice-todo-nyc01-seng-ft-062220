import React from "react";

class Category extends React.Component {
  state = {
    clickedCat: " ",
  };

  localClickHandler = (e) => {
    this.props.clickHandler(e);
    this.setState({ clickedCat: e.target.name });
    // console.log(this.state.clickedCat);
  };

//   buttonDecider = () => {
//     if(this.state.clickedCat === this.props.cat){
//       return (<button
//         name={this.props.cat}
//         class="selected"
//         onClick={this.localClickHandler}
//       >
//         {this.props.cat}
//       </button>)} 
//       else { return (
//       <button name={this.props.cat} onClick={(e) => this.props.clickHandler(e)}>
//         {this.props.cat}
//       </button>)
//     }}

  render() {
      return(
        <button
        name={this.props.cat}
        // class="selected"
        onClick={this.localClickHandler}>
         {this.props.cat}
        </button>)
    // return  {this.buttonDecider} 
  }
}

export default Category;
