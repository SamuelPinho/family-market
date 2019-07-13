import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login/Login";
import { GridArea } from "../components/GridArea";
import styled from "styled-components";
import Register from "./Register/Register";
import withAuthentication from "../services/Session/withAuthentication";
import Authenticated from "./Authenticated/Authenticated";

const Title = styled.h1`
  display: flex;
  font-size: 38px;
  color: #22549e;
  margin: 0;
  align-items: center;
  justify-content: space-between;
`;

const Divider = styled.hr`
  border: none;
  border-top: 4px solid #e6e6ea;
`;

const LogoutButton = styled.button`
  border: none;
  padding: 0.5rem 0.8rem;
  height: 50%;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  background: #f25f5c;
  color: white;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #f24b48;
  }
`;

const Pages = ({ authUser, firebase }) => {
  return (
    <Fragment>
      <GridArea area="main">
        <Title>
          Local Family Market
          {authUser ? (
            <LogoutButton onClick={firebase.doSignOut}>Logout</LogoutButton>
          ) : (
            ""
          )}
        </Title>

        <Divider />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/auth" component={Authenticated} />
        </Switch>
      </GridArea>
    </Fragment>
  );
};

export default withAuthentication(Pages);
