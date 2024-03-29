import React from 'react';
import '../css/ListItem.css';

class ListItem extends React.Component {
	render() {
		return (
			<ul className="list">
				{this.props.list.map((item, i) => (
					<li className="list-item" key={i}>
						<span className="delete" onClick={() => this.props.delete(item)}>
							x
						</span>
						{item.label}
					</li>
				))}
			</ul>
		);
	}
}

export default ListItem;
