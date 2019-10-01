import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <input
        type="text"
        onChange={props.onChange}
        onKeyPress={props.keyPressed}
        value={props.value}
      />
    );
  }
}

export default Input;
