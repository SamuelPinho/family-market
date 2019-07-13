import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { withFirebase } from "../Firebase";
import { actions } from "../../redux/actions/session";

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      this.listener = this.props.firebase.onAuthUserListener(
        authUser => {
          localStorage.setItem("authUser", JSON.stringify(authUser));
          this.props.onSetAuthUser(authUser);
        },
        () => {
          localStorage.removeItem("authUser");
          this.props.onSetAuthUser(null);
        }
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    authUser: state.sessionState.authUser
  });

  const mapDispatchToProps = dispatch => ({
    onSetAuthUser: authUser => dispatch(actions.setAuthUser(authUser))
  });

  return compose(
    withFirebase,
    connect(
      mapStateToProps,
      mapDispatchToProps
    )
  )(WithAuthentication);
};

export default withAuthentication;
