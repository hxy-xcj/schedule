import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "../views/login/login";
import Register from "../components/Login/register";
import SandBox from "../views/sandbox/sandbox";


export default function IndexRouter() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        {/*<Route path="/" component={SandBox} /> */}
        <Route
          path="/"
          render={() =>
          window.sessionStorage.getItem("token")?<SandBox />: <Redirect to="/login" />
          }
        />
      </Switch>
    </HashRouter>
  );
}