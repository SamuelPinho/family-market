import React, { Component, Fragment } from "react";
import TextInput from "./TextInput";
import Groups from "./Groups";

class GroupList extends Component {
  render() {
    return (
      <Fragment>
        <TextInput />
        <Groups />
      </Fragment>
    );
  }
}

export default GroupList;
