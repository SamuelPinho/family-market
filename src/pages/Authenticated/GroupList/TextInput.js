import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { withAuthentication } from "../../../services/Session";

const InputContainer = styled.div`
  margin: 32px 0 22px 0;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: #342e37;
  margin-bottom: 0.3rem;
  font-size: 24px;
`;

const Input = styled.input`
  border: 1px solid #c7c3c8;
  border-radius: 5px;
  width: 100%;
  padding: 1rem;
  display: inherit;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  font-family: inherit;
  font-weight: 700;
  font-size: 18px;
  height: 50px;
  outline: none;

  &:focus {
    border: 3px solid #a7a2a9;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  margin-top: 0.5rem;
  width: 100%;
  border: 3px solid #22549e;
  color: white;
  padding: 0.3rem;
  font-size: 16px;
  font-weight: 700;
  font-family: inherit;
  background: #22549e;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #22549e;
    border: 3px solid #22549e;
    background: white;
  }
`;

const INITITAL_STATE = { groupName: "" };

class TextInput extends Component {
  state = { ...INITITAL_STATE };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.firebase
      .doCreateGroup(this.props.authUser.uid, this.state.groupName)
      .then(() => {
        this.setState({ ...INITITAL_STATE });
      })
      .catch(erro => {
        this.setState({
          erro: erro.message
        });
      });
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <InputContainer>
            <Label>Group Name</Label>
            <Input
              autoFocus
              value={this.state.groupName}
              onChange={this.handleChange}
              name="groupName"
            />
            <Button type="submit">Add Group</Button>
          </InputContainer>
        </form>
      </Fragment>
    );
  }
}

export default withAuthentication(TextInput);
