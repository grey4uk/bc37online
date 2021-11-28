import { Component } from 'react';

class ListItem extends Component {
  render() {
    const { type, speed } = this.props;
    return (
      <li style={{ border: '2px solid #fff' }}>
        <p>Type of car: {type}</p>
        <p>Max speed: {speed}</p>
      </li>
    );
  }
}

export default ListItem;
