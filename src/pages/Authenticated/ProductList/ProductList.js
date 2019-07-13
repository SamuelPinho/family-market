import React, { Component, Fragment } from "react";
import TextInput from "./TextInput";
import Products from "./Products";

class ProductList extends Component {
  render() {
    return (
      <Fragment>
        <TextInput />
        <Products />
      </Fragment>
    );
  }
}

export default ProductList;
