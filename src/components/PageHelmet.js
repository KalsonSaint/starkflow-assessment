import React from "react";
import { Helmet } from "react-helmet";

const PageHelmet = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content="Starkflow Assessment" />
    </Helmet>
  );
};

export default PageHelmet;
