import React from "react";
import "../css/Counter.css";

class Input extends React.Component {
  render() {
    return (
      <div className="counter">
        {this.props.quantity > 0
          ? `${this.props.quantity} item left` > 0
          : "No tasks, add a task"}
      </div>
    );
  }
}

export default Input;
