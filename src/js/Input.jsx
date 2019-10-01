import React from "react";
import "../css/Input.css";

class Input extends React.Component {
  render() {
    return (
      <input
        type="text"
        className="list-item"
        onChange={this.props.onChange}
        onKeyPress={this.props.onKeyPress}
        value={this.props.value}
        placeholder="What needs to be done?"
      />
    );
  }
}

export default Input;
