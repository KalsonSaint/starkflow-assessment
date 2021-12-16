import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import * as api from "../apis";
import PageHelmet from "../components/PageHelmet";
import BookIcon from "../components/Book/index";
import Table from "../components/Loader";

const Repositories = () => {
  const [drpd, setDrpd] = useState(false);

  const { data, isLoading } = useQuery("repos", api.getTrendingRepoApi);
  if (data) {
    console.log(data.data);
  }

  if (isLoading) {
    return <Table />;
  }

  return (
    <>
      <PageHelmet title="Trending Repositories" />
      <div className="heading text-center py-10 px-4 border-b-slate-400">
        <h1 className="text-4xl leading-10 py-1 font-medium">Trending</h1>
        <p className="leading-6 py-2">
          See what the GitHub community is most excited about today.
        </p>
      </div>
      <div className="main__section container px-4 py-10 mx-auto max-w-6xl">
        <div className="rounded-t-xl flex justify-between p-6 main__section-heading">
          <div className="button__links inline-flex">
            <Link className="font-medium py-2 px-4 rounded-l active">
              Repositories
            </Link>
            <Link className="font-medium py-2 px-4 rounded-r">Developers</Link>
          </div>
          <div className="nav__links pt-1">
            <ul className="flex flex-row justify-evenly">
              <li className="px-2">
                Spoken Language: English
                <ul className={drpd ? `dropdown` : `hidden`}>
                  <li>Hello</li>
                </ul>
              </li>
              <li className="px-2">
                Language: Any
                <ul className={drpd ? `dropdown` : `hidden`}>
                  <li>Hello</li>
                </ul>
              </li>
              <li className="px-2">
                Date range: Today
                <ul className={drpd ? `dropdown` : `hidden`}>
                  <li>Hello</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="repo__list">
          {data.data?.map((item, i) => (
            <div className="repo__list-details p-6 border-b-slate-400" key={i}>
              <Link to={item.url}>
                {item.username} / {item.repositoryName}
              </Link>
              <p>{item.description}</p>
              <div className="flex p-1">
                <p className="pr-4">{item.language}</p>
                <p className="pr-4">{item.totalStars}</p>
                <p className="pr-4">{item.forks}</p>
                <div className="flex">
                  Built by
                  {item.builtBy.map((b, i) => (
                    <img
                      src={b.avatar}
                      alt=""
                      className="rounded-full"
                      width="20px"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="repo__list-stars">
            <button
              type="button"
              className=" px-6 pt-2.5 pb-2 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
            >
              Button
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Repositories;
