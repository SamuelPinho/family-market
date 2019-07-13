import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { withAuthentication } from "../../../services/Session";
import Group from "./Group";

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0.5rem 0.5rem;
`;

const Title = styled.h1`
  color: #342e37;
  font-size: 24px;
  font-family: inherit;
  font-weight: 700;
`;

class Groups extends Component {
  state = { groups: {} };

  componentDidMount() {
    this.props.firebase
      .doGetUserGroups(this.props.authUser.uid)
      .then(groups => {
        this.setState({ groups });
      })
      .catch(error => {
        this.setState({
          error: error.message
        });
      });
  }

  handleChange = (uid, name) => {
    let groups = this.state.groups;
    groups[uid].name = name;

    this.setState({
      groups
    });
  };

  handleBlur = (uid, group) => {
    console.log(group);
    // this.props.firebase.onEditGroup(uid, group);
  };

  render() {
    const { groups } = this.state;

    return (
      <Fragment>
        <List>
          <Title>Your Groups</Title>
          {Object.keys(groups).map(key => (
            <Group
              group={groups[key]}
              key={key}
              uid={key}
              handleChange={this.handleChange}
              handleBlur={this.handleBlur}
            />
          ))}
        </List>
      </Fragment>
    );
  }
}

export default withAuthentication(Groups);
