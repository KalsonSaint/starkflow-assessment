import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import PageHelmet from "../components/PageHelmet";
import { MdArrowDropDown } from "react-icons/md";
import * as api from "../apis";
import { IconContext } from "react-icons/lib";
import { GoFlame, GoRepo } from "react-icons/go";

const Developers = () => {
  const { data } = useQuery("repos", api.getTrendingDevApi);
  console.log(data);

  return (
    <>
      <IconContext.Provider
        value={{
          color: "white",
          size: "1rem",
        }}
      >
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
            <div className="nav__links pt-2">
              <ul className="flex flex-row justify-evenly">
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
                <>
                  <div
                    className="repo__list-details p-6 border-b-slate-400 flex justify-between"
                    key={i}
                  >
                    <div className="flex">
                      <p className="mr-6">{item.rank}</p>
                      <img
                        src={item.avatar}
                        alt={item.name}
                        width={80}
                        className="rounded-full mr-4"
                      />
                      <div>
                        <Link
                          to={item.url}
                          className="text-blue-500 text-2xl font-medium tracking-wide"
                        >
                          {item.name}
                        </Link>
                        <p className="block">{item.username}</p>
                      </div>
                    </div>
                    <div className="border px-4 py-2 flex flex-col items-start">
                      <p className="inline-flex">
                        <GoFlame
                          color="#DB6D28"
                          style={{
                            marginRight: "8px",
                            position: "relative",
                            top: "4px",
                          }}
                        />
                        POPULAR REPO
                      </p>
                      <Link
                        to={item.popularRepository?.url}
                        className="text-blue-500 text-xl font-medium tracking-wide inline-flex"
                      >
                        <GoRepo
                          style={{
                            position: "relative",
                            top: ".5rem",
                            marginRight: "0.5rem",
                          }}
                        />
                        {item.popularRepository?.repositoryName}
                      </Link>
                      <p>{item.popularRepository?.description}</p>
                    </div>
                    <div>
                      <div className="justify-self-end inline-flex rounded-md py-1 px-4 star__btn">
                        Follow
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          )}
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Developers;
