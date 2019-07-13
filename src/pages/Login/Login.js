import React, { Component } from "react";
import { withFirebase } from "../../services/Firebase";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import LoginForm from "./LoginForm";

const INITIAL_STATE = { email: "", password: "", error: null };

class Login extends Component {
  state = { ...INITIAL_STATE };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(`/auth/products`);
      })
      .catch(error => {
        error.message = "There's no user registered with these credentials";
        this.setState({ error: error.message });
      });
  };

  render() {
    return (
      <LoginForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        {...this.state}
      />
    );
  }
}

export default compose(
  withFirebase,
  withRouter
)(Login);
