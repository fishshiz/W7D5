import { connect } from 'react-redux';
import { login, logout, signup } from '../actions/session_actions';
import SessionForm from './session_form';

const mapStatetoProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors,
  formType: ownProps.location.pathname
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  
});
