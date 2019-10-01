import React from "react";
import "../css/Counter.css";

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="counter">{this.props.quantity} item left</div>;
  }
}

export default Input;
