import React from "react";
import { Route, Switch } from "react-router";
import { useAuth } from "../firebase/authContext";
import app from "../firebase/firebase";
// Components
import Home from "../components/Home";
import AuthView from "../components/auth/login";
import PrivateRoute from "../components/auth/PrivateRoute";
const Routes = () => {
  const { login, register } = useAuth();
  return (
    <Switch>
      <PrivateRoute exact component={Home} path="/" />
      <Route
        exact
        render={() => <AuthView title="register" action={register} />}
        path="/register"
      />
      <Route
        exact
        render={() => <AuthView title="login" action={login} />}
        path="/login"
      />
    </Switch>
  );
};

export default Routes;
