import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from 'redux/modules';

import Loading from 'components/Loading';
import Header from 'components/Header';

/* global styles for app */
if (__CLIENT__) {
  require('./styles/app.css');
}

@connect(
  state => ({ ...state.app, ...state.auth }),
  dispatch => bindActionCreators({
    ...actionCreators.app,
    ...actionCreators.auth,
  }, dispatch),
)
export default class Root extends Component {

  static propTypes = {
    location: PropTypes.object,
    children: PropTypes.object,
    params: PropTypes.object,
    history: PropTypes.object,
    spinnerAsyncPage: PropTypes.bool,
    hideSpinnerAsyncPage: PropTypes.func,
    apiPostLogout: PropTypes.func,
    token: PropTypes.string,
  };

  componentDidMount() {
    const { hideSpinnerAsyncPage } = this.props;

    // for server-side-rendering (if we open async page)
    // see in /app/redux/modules/app/index.js, this component and /app/route.js
    hideSpinnerAsyncPage();
  }

  componentDidUpdate(prevProps) {
    const { hideSpinnerAsyncPage } = this.props;

    if (prevProps.spinnerAsyncPage === true) {
      hideSpinnerAsyncPage();
    }
  }

  render() {
    const { spinnerAsyncPage, token, apiPostLogout } = this.props;

    return (
      <section>
        <Header loggedIn={!!token} logout={apiPostLogout} />
        {
          spinnerAsyncPage
            ? <Loading /> // show spinner for async component
            : this.props.children &&
                React.cloneElement(this.props.children, this.props)
        }
      </section>
    );
  }
}
