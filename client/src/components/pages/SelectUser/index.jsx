import React, { useState } from "react";
import { theme } from "../../Theme";

const createUser = (userName, time, profile, latestMsg) => {
  return { userName, profile, time, latestMsg };
};

const users = [
  createUser("swetha", "5:30  pm", "assets/1.jpg", ["hi", "ddad", "dfd"]),
  createUser("sujatha", "5:30 pm", "", []),
  createUser("sowndarya", "5:30 pm", "assets/3.jpg", ["ok", "ddad"]),
  createUser("susheela", "5:30 pm", "assets/4.jpg", [
    "okies",
    "ddad",
    "dfd",
    "xc",
  ]),
  createUser("supraja", "5:30 pm", "assets/5.jpg", [
    "no",
    "ddad",
    "dfd",
    "sdg",
    "dsd",
  ]),
  createUser("Sweetha", "5:30 pm", "", ["not ok", "ddad", "dfd"]),
  createUser("shakshi", "5:30 pm", "assets/7.jpg", ["iam ok", "ddad"]),
  createUser("sravanthi", "5:30 pm", "assets/8.jpg", ["yes"]),
  createUser("sathwika", "5:30 pm", "assets/1.jpg", [
    "if are ok",
    "ddad",
    "dfd",
    "fgs",
    "dfsd",
    "dsfga",
    "daadd",
  ]),
  createUser("shakeela", "5:30 pm", "assets/3.jpg", [
    "ohhooo",
    "ddad",
    "dfd",
    "dd",
    "dft",
    "r",
  ]),
];

export const SelectUser = ({ mode }) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [search, setSearch] = useState("");

  function handleSearchInput(event) {
    setSearch(event.target.value);
  }
  const handleClick = () => {
    alert("open chat");
  };
  const handleProfile = () => {
    alert("profile opened");
    setProfileOpen(true);
  };
  const handleClearClick = () => {
    setSearch("");
  };
  return (
    <div className="main_container flex flex-row">
      <div className="_container " style={theme[mode].selectUser}>
        <div className=" w-96 p-3 flex justify-center search_bar">
          <div
            className="flex border items-center justify-between rounded-full w-full p-2 shadow-md"
            style={theme[mode].searchBar}
          >
            <input
              className="focus:outline-none pl-3 w-full"
              type="text"
              value={search}
              onChange={handleSearchInput}
              placeholder="find your mate . . . . . . . . "
              style={theme[mode].searchBar}
            />
            <button
              type="submit"
              className="focus:outline-none focus:shadow-outline hover:transform hover:scale-125 transition duration-200 ease-in-out pr-3 pl-2"
            >
              {search === "" && mode === "light" ? (
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M22 22L15.5 15.5M15.5 15.5C17.9853 13.0152 17.9853 8.98479 15.5 6.5C13.0152 4.01472 8.98479 4.01472 6.5 6.5C4.01472 8.98479 4.01472 13.0152 6.5 15.5C8.98479 17.9853 13.0152 17.9853 15.5 15.5Z" />
                </svg>
              ) : search === "" && mode === "dark" ? (
                <img className="w-5 h-5 " src="assets/searchDark.svg" alt="" />
              ) : search != "" && mode === "light" ? (
                <p onClick={handleClearClick}>X</p>
              ) : (
                <p onClick={handleClearClick}>X</p>
              )}
            </button>
          </div>
        </div>
        <div className="  items-center">
          <div
            className={
              mode === "light" ? "w-96 user_item light" : "w-96 user_item dark"
            }
          >
            {users
              .filter((user) => {
                if (search == "") {
                  return user;
                } else if (
                  user.userName.toLowerCase().includes(search.toLowerCase())
                ) {
                  return user;
                }
                
              })
              .map((user) => (
                <div
                  key={user}
                  onClick={handleClick}
                  style={theme[mode].selectUser.user}
                >
                  <div className="flex justify-between h-24 items-center">
                    <div className="flex gap-7 p-3">
                      {user.profile ? (
                        <img
                          className=" object-cover rounded-full w-14 h-14 "
                          src={user.profile}
                          alt="profile"
                          onClick={handleProfile}
                        />
                      ) : (
                        <img
                          className=" object-cover rounded-full w-16 h-16"
                          src="assets/user.png"
                          alt="profile"
                        />
                      )}
                      <div className="pt-1">
                        <div className="text-xl font-bold">{user.userName}</div>
                        <div className=" text-base font-normal text-EAE9E9">
                          {user.latestMsg[0]}
                        </div>
                      </div>
                    </div>
                    <div className=" flex flex-col pr-4 h-[60px] justify-between pb-1">
                      <div>{user.time}</div>
                      {user.latestMsg.length > 0 && (
                        <div
                          className=" w-6 h-6 text-center rounded-full text-white"
                          style={theme[mode].selectUser.user.msgCount}
                        >
                          {user.latestMsg.length}
                        </div>
                      )}
                    </div>
                  </div>
                  <div
                    className="bg-white w-auto h-0.5"
                    style={theme[mode].selectUser}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="w-2 side_bar" style={theme[mode].sideBar} />
    </div>
  );
};
