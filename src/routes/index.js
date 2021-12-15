import React from "react";
import { Switch } from "react-router";
import { Redirect } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
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
