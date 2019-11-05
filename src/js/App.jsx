import React from 'react';
import '../css/App.css';
import ListItem from './ListItem';
import Input from './Input';
import Counter from './Counter';
//import axios from 'axios';

const url = 'https://assets.breatheco.de/apis/fake/todos/user/coni';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: '',
			list: []
		};

		this.newInput = this.newInput.bind(this);
		//this.keyPressed = this.keyPressed.bind(this);
		this.clearInput = this.clearInput.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}

	async componentDidMount() {
		const response = await fetch(url);
		const json = await response.json();

		let data = await json.map((i) => i.label);
		let list = this.state.list;
		list = list.length !== 0 ? [ list, data ] : data;

		this.setState({ list });
	}

	newInput(e) {
		this.setState({ input: e.target.value });
	}

	//OLD FORMULA
	/* 	keyPressed(e) {
		if (e.key === 'Enter') {
			this.setState({ input: e.target.value });

			if (this.state.input !== '') {
				this.setState({ list: [ ...this.state.list, this.state.input ] });
			}

			this.setState({ input: '' });
		}
  } */

	// NEW ATTEMPT

	keyPressed = async (e) => {
		let value = e.target.value;

		if (e.key === 'Enter' && value !== '') {
			if (value !== '') {
				this.setState({ list: [ ...this.state.list, this.state.input ] });
			}

			value = `{label: "${value}", done: false}`;
			let list = this.state.list;
			let body = list.map((i) => `{label: "${i}", done: false}`);
			body = [ ...body, value ];
			console.log(body);

			fetch(url, {
				METHOD: 'PUT',
				BODY: body
			}).then((response) => response.json());

			this.setState({ input: '' });
		}
	};

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
					<Input onChange={this.newInput} onKeyPress={this.keyPressed} value={this.state.input} />
					<ListItem list={this.state.list} delete={this.deleteItem} />
					<Counter quantity={this.state.list.length} />
				</section>
				<div className="stack-box-1" />
				<div className="stack-box-2" />
			</main>
		);
	}
}

export default App;
