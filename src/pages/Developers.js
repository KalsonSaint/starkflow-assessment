import React from "react";
import { Link } from "react-router-dom";
import PageHelmet from "../components/PageHelmet";

const Developers = () => {
  return (
    <>
      <PageHelmet title="Trending Developers" />
      <div className="heading text-center py-10 px-4 border-b-slate-400">
        <h1 className="text-4xl leading-10 py-1 font-medium">Trending</h1>
        <p className="leading-6 py-2">
          See what the GitHub community is most excited about today.
        </p>
      </div>
      <div className="main__section container px-4 py-10 mx-auto max-w-7xl">
        <div className="rounded-t-xl flex justify-between p-6 main__section-heading">
          <div className="button__links inline-flex">
            <Link to="/" className="font-medium py-2 px-4 rounded-l">
              Repositories
            </Link>
            <Link
              to="/trending/developers"
              className="font-medium py-2 px-4 rounded-r active"
            >
              Developers
            </Link>
          </div>
          <div className="nav__links pt-1">
            <ul className="flex flex-row justify-evenly">
              <li className="px-3">Language: Any</li>
              <li className="px-3">Date range: Today</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Developers;
