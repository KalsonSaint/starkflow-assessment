import React from "react";
import { useQuery } from "react-query";
import * as api from "../apis";
import PageHelmet from "../components/PageHelmet";

const Repositories = () => {
  const { data, isLoading } = useQuery("repos", api.getTrendingRepoApi);
  console.log(data);

  return (
    <>
      <PageHelmet title="Trending Repositories" />
      <div className="heading text-center py-10 px-4 border-b-slate-400">
        <h1 className="text-4xl leading-10 py-1">Trending</h1>
        <p className="leading-6 py-2">
          See what the GitHub community is most excited about today.
        </p>
      </div>
      <div className="main__section container-md px-4 py-10 mx-auto max-w-3xl">
        <div className="rounded">
          <div className="button__links inline-flex">
            <button className="font-medium py-2 px-4 rounded-l active">
              Repositories
            </button>
            <button className="font-medium py-2 px-4 rounded-r">
              Developers
            </button>
          </div>
          <div className="nav__links"></div>
        </div>
      </div>
    </>
  );
};

export default Repositories;
