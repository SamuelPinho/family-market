import React, { Component, Fragment } from "react";
import styled from "styled-components";

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

class TextInput extends Component {
  render() {
    return (
      <Fragment>
        <InputContainer>
          <Label>Product Name</Label>
          <Input autoFocus />
          <Button>Add Product</Button>
        </InputContainer>
      </Fragment>
    );
  }
}

export default TextInput;
