import React from "react";
import { Route, Switch } from "react-router";

// Components
import Home from "../components/Home";
import AuthView from "../components/auth/login";
const Routes = () => {
  return (
    <Switch>
      <Route exact component={Home} path="/" />
      <Route
        exact
        render={() => <AuthView title="register" />}
        path="/register"
      />
      <Route exact render={() => <AuthView title="login" />} path="/login" />
    </Switch>
  );
};

export default Routes;
