import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

/* component styles */
import s from './styles.css';

export default class Home extends Component {
  render() {
    return (
      <section className={s.root}>
        <Helmet
          title="Home"
        />
        Home page
      </section>
    );
  }
}
