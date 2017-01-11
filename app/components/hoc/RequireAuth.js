import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export default function (ComposedComponent) {
  class Authentication extends Component {
    componentWillMount() {
      this.checkAuth(this.props.token);
    }

    componentWillUpdate(nextProps) {
      this.checkAuth(nextProps.token);
    }

    checkAuth(isAuthenticated) {
      if (!isAuthenticated) {
        let redirectAfterLogin = this.props.location.pathname;
        browserHistory.push(`/login?next=${redirectAfterLogin}`);
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  Authentication.propTypes = { token: PropTypes.string };

  if (ComposedComponent.reduxAsyncConnect) {
    Authentication.reduxAsyncConnect = ComposedComponent.reduxAsyncConnect;
  }

  function mapStateToProps(state) {
    return { token: state.auth.token };
  }

  return connect(mapStateToProps)(Authentication);
}
