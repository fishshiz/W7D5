import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import {login, logout, signup} from './actions/session_actions';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  const store = configureStore();

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
