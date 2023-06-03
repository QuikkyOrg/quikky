import React from "react";
import { theme } from "../Theme";
const Chat = ({ right, message, time, tick, mode }) => {
  console.log(mode, "&&&&&&&&&&&&&&&&&&&&&");
  console.log(theme[mode], "&&&&  theme[mode] & ");
  return (
    <>
      <div
        className={`chat ${right ? "right_chat" : "left_chat"}`}
        style={right ? theme[mode].rightChat : theme[mode].leftChat}
      >
        <div className="message">{message}</div>
        <div className="extra">
          <div className="time_">{time}</div>
          <div className="tick">
            <img src={tick} className="tick_img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
