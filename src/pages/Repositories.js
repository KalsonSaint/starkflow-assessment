import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import * as api from "../apis";
import PageHelmet from "../components/PageHelmet";
import { GoRepo, GoRepoForked } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { IconContext } from "react-icons/lib";

const Repositories = () => {
  const { data } = useQuery("repos", api.getTrendingRepoApi);

  return (
    <>
      <IconContext.Provider
        value={{
          color: "white",
          size: "1rem",
        }}
      >
        <PageHelmet title="Trending Repositories" />
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
                <Link to="/" className="font-medium py-2 px-4 rounded-l active">
                  Repositories
                </Link>
                <Link
                  to="/trending/developers"
                  className="font-medium py-2 px-4 rounded-r"
                >
                  Developers
                </Link>
              </div>
              <div className="nav__links pt-2">
                <ul className="flex flex-row justify-evenly">
                  <li className="px-2 inline-flex">
                    Spoken Language: English{" "}
                    <MdArrowDropDown
                      style={{ position: "relative", top: "5px" }}
                    />
                  </li>
                  <li className="px-2 inline-flex">
                    Language: Any{" "}
                    <MdArrowDropDown
                      style={{ position: "relative", top: "5px" }}
                    />
                  </li>
                  <li className="px-2 inline-flex">
                    Date range: Today{" "}
                    <MdArrowDropDown
                      style={{ position: "relative", top: "5px" }}
                    />
                  </li>
                </ul>
              </div>
            </div>
            {data && (
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
                        <GoRepo
                          style={{
                            position: "relative",
                            top: "1rem",
                            marginRight: "0.5rem",
                          }}
                        />
                        {item.username} /
                        <span className="font-medium">
                          {item.repositoryName}
                        </span>
                      </Link>
                      <p className="py-2 w-7/12 text-md">{item.description}</p>
                      <div className="flex flex-row p-1">
                        <p className="pr-4">{item.language}</p>
                        <p className="pr-4 inline-flex">
                          <FaRegStar
                            style={{
                              position: "relative",
                              top: "3px",
                              marginRight: "5px",
                            }}
                          />
                          {item.totalStars}
                        </p>
                        <p className="pr-4 inline-flex">
                          <GoRepoForked
                            style={{
                              position: "relative",
                              top: "4px",
                              marginRight: "5px",
                            }}
                          />
                          {item.forks}
                        </p>
                        <div className="inline-flex">
                          Built by
                          {item.builtBy.map((b, i) => (
                            <img
                              src={b.avatar}
                              alt=""
                              className="rounded-full"
                              width="25px"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col w-60 items-end justify-between">
                      <div className="justify-self-end inline-flex rounded-md py-1 px-4 star__btn">
                        <FaRegStar
                          style={{
                            position: "relative",
                            top: "3px",
                            marginRight: "5px",
                          }}
                        />{" "}
                        Star
                      </div>
                      <p className="inline-flex">
                        <FaRegStar
                          style={{
                            position: "relative",
                            top: "3px",
                            marginRight: "5px",
                          }}
                        />
                        {item.starsSince} stars today
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      </IconContext.Provider>
    </>
  );
};

export default Repositories;
