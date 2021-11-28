import React, { Component } from 'react';

import css from './ListStyles.module.css';
import ListItem from '../ListItem/ListItem';
import Button from '../Button/Button';
import ValuePainter from '../ValuePainter/ValuePainter';

// const styles = {
//   container: {
//     backgroundColor: 'yellow',
//   },
// };

class List extends Component {
  state = { value: 0 };

  handleClick = () => {
    this.setState((state) => ({
      value: state.value + 1,
    }));
  };

  render() {
    const { cars, isOnline } = this.props;
    const { value } = this.state;
    const { handleClick } = this;
    return (
      <>
        <div
          className={css.container}
          //   style={styles.container}
          //   style={{
          //     backgroundColor: this.props.isOnline
          //       ? 'green'
          //       : 'red',
          //   }}
        >
          <ul
            className={
              isOnline ? css.listOnline : css.listOffline
            }>
            {cars.map((el) => (
              <ListItem key={el.id} {...el} />
            ))}
          </ul>
          <Button handleClick={handleClick} />
          <ValuePainter value={value} />
        </div>
      </>
    );
  }
}

export default List;
