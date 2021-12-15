import React from "react";
import { BrowserRouter, Switch } from "react-router";
import PublicRoutes from "./PublicRoutes";
import Routes from "./Routes";

const KickOff = () => {
  return (
    <BrowserRouter>
      <Switch>
        {Routes.map((route, i) => {
          return <PublicRoutes key={i} {...route} />;
        })}
        <Redirect from="/" to="/trending" />
      </Switch>
    </BrowserRouter>
  );
};

export default KickOff;
