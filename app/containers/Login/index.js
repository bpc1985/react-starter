import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import * as actionCreators from 'redux/modules';

/* component styles */
import s from './styles.css';

export class Login extends Component {
  static propTypes = {
    auth: PropTypes.object,
    apiPostLogin: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      username: 'admin',
      password: '123',
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const { apiPostLogin } = this.props;
    const { username, password } = this.state;
    apiPostLogin({ username, password });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { username, password } = this.state;

    return (
      <section className={s.root}>
        <Helmet
          title="Login"
        />
        <form>
          <label htmlFor="username">User Name</label>
          <input type="text" id="username" name="username" value={username} onChange={this.handleChange} />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={this.handleChange} />
        
          <input type="submit" value="Login" onClick={this.handleSubmit} />
        </form>
      </section>
    );
  }
}

export default connect( // Conect to redux tasks store // see: app/redux/modules/auth
  state => ({ ...state.auth }),
  dispatch => bindActionCreators({
    ...actionCreators.auth,
  }, dispatch),
)(Login);
