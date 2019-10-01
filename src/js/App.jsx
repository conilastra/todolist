import React from "react";
import "../css/App.css";
import ListItem from "./ListItem";
import Input from "./Input";
import Counter from "./Counter";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      list: []
    };

    this.newInput = this.newInput.bind(this);
    this.submitItem = this.submitItem.bind(this);
    this.keyPressed = this.keyPressed.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  newInput(e) {
    this.setState({ input: e.target.value });
  }

  keyPressed(e) {
    if (e.key === "Enter") {
      this.submitItem();
      this.setState({ input: e.target.value });
      this.setState({ input: "" });
    }
  }

  submitItem() {
    this.setState({ list: [...this.state.list, this.state.input] });
  }

  clearInput() {
    this.setState({ input: [] });
  }

  render() {
    return (
      <main>
        <h1>todos</h1>
        <section>
          <Input
            onChange={this.newInput}
            onKeyPress={this.keyPressed}
            value={this.state.input}
          />
          <ListItem list={this.state.list} />
          <Counter quantity={this.state.list.length} />
        </section>
      </main>
    );
  }
}

export default App;
