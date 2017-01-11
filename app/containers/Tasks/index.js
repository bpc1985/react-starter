import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { asyncConnect } from 'redux-connect';

import * as actionCreators from 'redux/modules';
import { apiGetTasks } from 'redux/modules/tasks/tasks';

/* component styles */
import s from './styles.css';

export class Tasks extends Component {
  static propTypes = {
    items: PropTypes.array,
  };

  render() {
    const { items } = this.props;
    return (
      <section className={s.root}>
        <Helmet
          title="Tasks"
        />
        <h1>Tasks page</h1>
        <div className={s.list}>
          { // Render tasks
            items && items.map(tasks =>
              <div className={s.item} key={tasks.id}>
                {tasks.id}) {tasks.description}
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
    if (!getState().tasks.items) {
      // Get items from api server // see: app/redux/modules/tasks
      return dispatch(apiGetTasks());
    }
  },
}])(connect( // Conect to redux tasks store // see: app/redux/modules/tasks
  state => ({ ...state.tasks }),
  dispatch => bindActionCreators({
    ...actionCreators.tasks,
  }, dispatch),
)(Tasks));
