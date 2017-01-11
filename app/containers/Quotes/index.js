import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { asyncConnect } from 'redux-connect';

import * as actionCreators from 'redux/modules';
import { apiGetQuotes } from 'redux/modules/quotes/quotes';

/* component styles */
import s from './styles.css';

export class Quotes extends Component {
  static propTypes = {
    items: PropTypes.array,
  };

  render() {
    const { items } = this.props;
    return (
      <section className={s.root}>
        <Helmet
          title="Quotes"
        />
        <h1>Quotes page</h1>
        <div className={s.list}>
          { // Render quotes
            items && items.map(quotes =>
              <div className={s.item} key={quotes.id}>
                {quotes.id}) {quotes.description}
              </div>
            )
          }
        </div>
      </section>
    );
  }
}

export default asyncConnect([{
  promise: ({ store: { dispatch, getState } }) => {
    if (!getState().quotes.items) {
      // Get items from api server // see: app/redux/modules/quotes
      return dispatch(apiGetQuotes());
    }
  },
}])(connect( // Conect to redux quotes store // see: app/redux/modules/quotes
  state => ({ ...state.quotes }),
  dispatch => bindActionCreators({
    ...actionCreators.quotes,
  }, dispatch),
)(Quotes));
