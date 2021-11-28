import { Component } from 'react';

import css from './TitleStyles.module.css';

class Title extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className={css.container}>
        <h1>{title ? title : "We haven't title"}</h1>
      </div>
    );
  }
}

export default Title;
