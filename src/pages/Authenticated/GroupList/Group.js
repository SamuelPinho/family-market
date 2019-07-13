import React, { Component } from "react";
import styled from "styled-components";

const GroupContainer = styled.li`
  position: relative;
  margin-top: 20px;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  width: 100%;
  height: 20px;
  justify-content: stretch;
`;

const Start = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  align-self: flex-start;
  align-items: center;
  height: 100%;
`;

const End = styled.div`
  flex: 0;
  display: flex;
  position: relative;
  align-self: flex-end;
  align-items: center;
  height: 100%;
`;

const Input = styled.input`
  flex-grow: 1;
  /* width: 100%; */
  height: 100%;
  border: 3px solid transparent;
  background: #cfccd0;
  border-radius: 5px;
  padding: 1rem 0.2rem 1rem 0.6rem;
  font-weight: 700;
  font-size: 14px;
  font-family: inherit;
  transition: all 0.3s ease-in-out;
  outline: none;
  color: #3d3b3e;

  &:focus {
    border: 3px solid #a7a2a9;
    background: #f6f5f6;
  }
`;

const GroupButton = styled.button`
  flex-grow: 0;
  border-radius: 5px;
  font-weight: 700;
  font-family: inherit;
  padding: 0.2rem 0.5rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

const DeleteButton = styled(GroupButton)`
  border: 2px solid #fe4a49;
  background: white;
  color: #342e37;
  margin-left: 1rem;

  &:hover {
    color: white;
    background: #fe4a49;
  }
`;

const PrimaryButton = styled(GroupButton)`
  border: 2px solid #3ecf8e;
  background: ${props => (props.underline ? "white" : "#3ecf8e")};
  color: ${props => (props.underline ? "#3ecf8e" : "white")};
  margin-right: 1rem;
  cursor: ${props => (props.disabled ? "default" : "")};

  &:hover {
    color: white;
    border: ${props => (props.disabled ? "" : "2px solid #2e9768")};
    background: ${props => (props.disabled ? "" : "#2e9768")};
  }
`;

class Group extends Component {
  handleChange = event => {
    this.props.handleChange(this.props.uid, event.target.value);
  };

  handleChange = event => {
    this.props.handleBlur(this.props.uid, this.state.group);
  };

  render() {
    const { group } = this.props;

    return (
      <GroupContainer>
        <Start>
          <PrimaryButton
            disabled={group.isPrimary}
            underline={!group.isPrimary}
          >
            {group.isPrimary ? "Primary" : "Set as Primary"}
          </PrimaryButton>
          <Input
            value={group.name}
            onChange={this.handleChange}
            name="name"
            onBlur={this.handleBlur}
          />
        </Start>
        <End>
          <DeleteButton>Remove</DeleteButton>
        </End>
      </GroupContainer>
    );
  }
}

export default Group;
