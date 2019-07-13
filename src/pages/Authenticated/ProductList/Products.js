import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Icon from "@mdi/react";
import { mdiCheckBoxOutline, mdiCheckboxBlankOutline } from "@mdi/js";

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0.5rem 0.5rem;
`;

const Product = styled.li`
  position: relative;
  margin-top: 20px;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  width: 100%;
  height: 20px;
  justify-content: space-between;
`;

const StyledIcon = styled(Icon)`
  margin-right: 0.5rem;
  fill: ${props => (props.active ? "#adadad" : "#009FB7")};
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    fill: ${props => (props.active ? "" : "#5CC1D1")};
  }
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
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  background: #cfccd0;
  border-radius: 5px;
  padding: 0.2rem 0.2rem 0.2rem 0.6rem;
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

const DeleteButton = styled.button`
  border-radius: 5px;
  border: 2px solid #fe4a49;
  background: white;
  color: #342e37;
  font-weight: 700;
  font-family: inherit;
  margin-left: 1rem;
  padding: 0.2rem 0.5rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: white;
    background: #fe4a49;
  }
`;

const Title = styled.h1`
  color: #342e37;
  font-size: 24px;
  font-family: inherit;
  font-weight: 700;
`;

class Products extends Component {
  render() {
    return (
      <Fragment>
        <List>
          <Title>Products to Buy</Title>
          <Product>
            <Start>
              <StyledIcon path={mdiCheckboxBlankOutline} size={1} />
              <Input placeholder={"Product 1"} />
            </Start>
            <End>
              <DeleteButton>Remove</DeleteButton>
            </End>
          </Product>
          <Product>
            <Start>
              <StyledIcon path={mdiCheckBoxOutline} size={1} active />
              <Input placeholder={"Product 1"} />
            </Start>
            <End>
              <DeleteButton>Remove</DeleteButton>
            </End>
          </Product>
        </List>
      </Fragment>
    );
  }
}

export default Products;
