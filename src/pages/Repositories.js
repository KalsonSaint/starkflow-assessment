import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import * as api from "../apis";
import PageHelmet from "../components/PageHelmet";
import BookIcon from "../components/svgs/BookIcon/index";
import StarIcon from "../components/svgs/StarIcon";
import Table from "../components/Loader";

const Repositories = () => {
  const [drpd, setDrpd] = useState(false);

  const { data, isLoading } = useQuery("repos", api.getTrendingRepoApi);

  if (isLoading) {
    return <Table />;
  }

  return (
    <>
      <PageHelmet title="Trending Repositories" />
      {isLoading ? (
        <Table />
      ) : (
        <>
          <div className="heading text-center py-10 px-4 border-b-slate-400">
            <h1 className="text-4xl leading-10 py-1 font-medium">Trending</h1>
            <p className="leading-6 py-2">
              See what the GitHub community is most excited about today.
            </p>
          </div>
          <div className="main__section container px-4 py-10 mx-auto max-w-7xl">
            <div className="rounded-t-xl flex justify-between p-6 main__section-heading">
              <div className="button__links inline-flex">
                <Link className="font-medium py-2 px-4 rounded-l active">
                  Repositories
                </Link>
                <Link className="font-medium py-2 px-4 rounded-r">
                  Developers
                </Link>
              </div>
              <div className="nav__links pt-1">
                <ul className="flex flex-row justify-evenly">
                  <li className="px-2">Spoken Language: English</li>
                  <li className="px-2">Language: Any</li>
                  <li className="px-2">Date range: Today</li>
                </ul>
              </div>
            </div>
            <div className="repo__list">
              {data.data?.map((item, i) => (
                <div
                  className="repo__list-details p-6 border-b-slate-400 flex justify-between"
                  key={i}
                >
                  <div>
                    <Link
                      to={item.url}
                      className="text-2xl inline-flex text-blue-500"
                    >
                      <BookIcon />
                      {item.username} /
                      <span className="font-medium">{item.repositoryName}</span>
                    </Link>
                    <p className="py-2 w-7/12 text-md">{item.description}</p>
                    <div className="flex p-1">
                      <p className="pr-4">{item.language}</p>
                      <p className="pr-4">{item.totalStars}</p>
                      <p className="pr-4">{item.forks}</p>
                      <div className="flex">
                        Built by {"  "}
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
                  <div className="flex flex-col w-60 items-end justify-between">
                    <div className="justify-self-end inline-flex">
                      <StarIcon />
                      Star
                    </div>
                    <p className="inline-flex">
                      <StarIcon />
                      {item.starsSince} stars today
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Repositories;
