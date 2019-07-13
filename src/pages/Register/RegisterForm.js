import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0;
`;

const Label = styled.label`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 0.3rem;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  background-color: #dbdecf;
  color: #45483d;
  border-radius: 6px;
  border: 2px solid #dbdecf;
  font-size: 18px;
  padding: 0.8rem 1rem;
  outline: none;
  transition: all 0.2s ease-in-out;

  &:focus,
  &:hover {
    border: 2px solid #c9ceb7;
    background: white;
  }
`;

const Button = styled.button`
  position: relative;
  width: 100%;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 700;
  padding: 1rem 1.5rem;
  background: #84dd63;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-bottom: 1rem;

  &:hover {
    background: #6db552;
  }
`;

const Error = styled.span`
  color: #c05746;
  margin-top: 1rem;
`;

const RegisterButton = styled(Button)`
  background: white;
  border: 2px solid #247ba0;
  color: #247ba0;

  &:hover {
    background: #247ba0;
    color: white;
  }
`;

const RegisterForm = ({
  firstName,
  email,
  password,
  error,
  handleChange,
  handleSubmit
}) => {
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <Label>First Name</Label>
          <Input
            type="text"
            name="firstName"
            onChange={handleChange}
            value={firstName}
          />
        </InputContainer>
        <InputContainer>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
          />
        </InputContainer>
        <InputContainer>
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
          />
          <Error>{error}</Error>
        </InputContainer>
        <Button>Register</Button>
        <Link to="/login">
          <RegisterButton>I lready have an account</RegisterButton>
        </Link>
      </form>
    </Fragment>
  );
};

export default RegisterForm;
