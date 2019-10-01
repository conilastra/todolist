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
    this.keyPressed = this.keyPressed.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  newInput(e) {
    this.setState({ input: e.target.value });
  }

  keyPressed(e) {
    if (e.key === "Enter") {
      this.setState({ input: e.target.value });

      if (this.state.input !== "") {
        this.setState({ list: [...this.state.list, this.state.input] });
      }

      this.setState({ input: "" });
    }
  }

  clearInput() {
    this.setState({ input: [] });
  }

  deleteItem(e, i) {
    e.preventDefault();
    this.state.list.splice(i, 1);
    this.setState({ list: this.state.list });
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
          <ListItem list={this.state.list} delete={this.deleteItem} />
          <Counter quantity={this.state.list.length} />
        </section>
        <div className="stack-box-1"></div>
        <div className="stack-box-2"></div>
      </main>
    );
  }
}

export default App;
