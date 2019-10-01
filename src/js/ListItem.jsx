import React from "react";
import "../css/ListItem.css";

class ListItem extends React.Component {
  render() {
    return (
      <>
        {this.props.list.map((item, i) => (
          <div className="list-item" key={i}>
            {item}
          </div>
        ))}
      </>
    );
  }
}

export default ListItem;
