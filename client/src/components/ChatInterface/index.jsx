import React from "react";
import "../../App.css";
import { theme } from "../Theme";
import Chat from "../chat";
import ShortCutBar from "../ShortCutBar";

const ChatInterface = ({ mode }) => {
  return (
    <>
      <div className="whole_interface">
        <div className="chat_interface">
          <img src="phoenix.svg" className="phoenix" />
          <div className="details" style={theme[mode].chatInterface}>
            <div className="user_img">
              <img src="user.jpg" alt="person_img" className="_img" />
            </div>
            <div className="name">Natasha Romanoff</div>
            <div className="options">
              {mode === "light" ? (
                <img src="more.svg" alt="" srcset="" />
              ) : (
                <img src="assets/threeedots_dark.png" alt="" srcset="" />
              )}
            </div>
          </div>

          <div className="chats">
            <Chat
              right={true}
              message="Hey, how are you?"
              time="12:00"
              tick="seenTick.svg"
              mode={mode}
            />
            <Chat
              right={false}
              message="Hey, how are you?"
              time="12:00"
              tick="seenTick.svg"
              mode={mode}
            />
          </div>
        </div>
        <ShortCutBar mode={mode} />
      </div>
    </>
  );
};

export default ChatInterface;
