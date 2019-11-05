import React from 'react';
import '../css/App.css';
import ListItem from './ListItem';
import Input from './Input';
import Counter from './Counter';
//import axios from 'axios';

const url = 'https://assets.breatheco.de/apis/fake/todos/user/hola';

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

		let list = json;
		console.log(list);
		this.setState({ list });
	}

	newInput(e) {
		this.setState({ input: e.target.value });
	}

	keyPressed = async (e) => {
		let value = e.target.value;

		if (e.key === 'Enter' && value !== '') {
			if (value !== '') {
				this.setState({ list: [ ...this.state.list, this.state.input ] });
			}

			value = { label: value, done: false };
			let list = [ ...this.state.list, value ];
			this.setState({ list });
			console.log(list);

			fetch(url, {
				method: 'PUT',
				body: JSON.stringify(list),
				headers: {
					'Content-Type': 'application/json'
				}
			})
				.then((resp) => {
					return resp.json();
				})
				.then((data) => {
					console.log(data);
				})
				.catch((error) => {
					console.log(error);
				});

			this.setState({ input: '' });
		}
	};

	clearInput() {
		this.setState({ input: [] });
	}

	deleteItem(item) {
		let list = this.state.list.filter((i) => i.label !== item.label);
		this.setState({ list });

		fetch(url, {
			method: 'PUT',
			body: JSON.stringify(list),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((resp) => {
				return resp.json();
			})
			.then((data) => {
				console.log(data);
			})
			.catch((error) => {
				console.log(error);
			});

		this.setState({ input: '' });
	}

	clearAll() {}

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
