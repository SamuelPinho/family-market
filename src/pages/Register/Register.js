import React, { Component } from "react";
import { withFirebase } from "../../services/Firebase";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import RegisterForm from "./RegisterForm";

const INITIAL_STATE = { email: "", password: "", firstName: "", error: null };

class Register extends Component {
  state = { ...INITIAL_STATE };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password, firstName } = this.state;

    this.props.firebase
      .doCreateUser(email, password, firstName)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(`/auth/products`);
      })
      .catch(error => {
        error.message = "There's was a problem with your registaration";
        this.setState({ error: error.message });
      });
  };

  render() {
    return (
      <RegisterForm
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
)(Register);
