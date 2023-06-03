import React, { useState } from "react";
import { theme } from "../../components/Theme";
// import { SelectUser } from "../SelectUser";

export const Navbar = ({ mode, setMode }) => {
  // const [mode, setMode] = useState("light");
  const modeHandleClick = () => {
    setMode(mode === "light" ? "dark" : "light");
  };
  const logoutHandleClick = () => {
    alert("logout");
  };
  const settingsHandleClick = () => {
    alert("settings");
  };
  return (
    <>
      <div className="_container p-2 shadow-lg" style={theme[mode].appBar}>
        <div className="_Appbar flex justify-between">
          <div>
            <img
              src="../../../../public/assets/Quikky_logo.png"
              alt="Quikky"
              className=" h-[60px] pl-6"
            />
          </div>
          <div className="_icons flex gap-8 items-center pr-4">
            <div className="group">
              <img
                src={
                  mode === "light"
                    ? "assets/clear_night.svg"
                    : "assets/wb_twilight.svg"
                }
                alt="Mode"
                className=" w-8"
                onClick={modeHandleClick}
              />
              {mode === "light" ? (
                <span
                  class="absolute top-16 scale-0 rounded text-xs p-2 group-hover:scale-100"
                  style={theme[mode].appBar.icons}
                >
                  Dark Mode
                </span>
              ) : (
                <span
                  class="absolute top-16 scale-0 rounded p-2 text-xs group-hover:scale-100"
                  style={theme[mode].appBar.icons}
                >
                  Light Mode
                </span>
              )}
            </div>
            <div className="group">
              <img
                src={
                  mode === "light"
                    ? "assets/settings.svg"
                    : "assets/settingsDark.svg"
                }
                alt="Settings"
                className=" w-8"
                onClick={settingsHandleClick}
              />
              <span
                class="absolute top-16 scale-0 rounded p-2 text-xs group-hover:scale-100"
                style={theme[mode].appBar.icons}
              >
                settings
              </span>
            </div>
            <div className="group">
              <img
                src={
                  mode === "light"
                    ? "assets/logout.svg"
                    : "assets/logoutDark.svg"
                }
                alt="LogOut"
                className=" w-8"
                onClick={logoutHandleClick}
              />
              <span
                class="absolute top-16 scale-0 rounded p-2 text-xs  group-hover:scale-100"
                style={theme[mode].appBar.icons}
              >
                Logout
              </span>
            </div>
            <div>
              <img
                src="../../../../public/assets/4.jpg"
                alt="Profile"
                className="rounded-full w-[60px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
