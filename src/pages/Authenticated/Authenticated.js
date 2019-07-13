import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import ProductList from "./ProductList/ProductList";
import GroupList from "./GroupList/GroupList";
import { withAuthorization } from "../../services/Session";

const Pages = () => {
  return (
    <Fragment>
      <Switch>
        <Route path="/auth/products" component={ProductList} />
        <Route path="/auth/groups" component={GroupList} />
      </Switch>
    </Fragment>
  );
};

export default withAuthorization()(Pages);
