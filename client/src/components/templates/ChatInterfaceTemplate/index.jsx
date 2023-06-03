import React, { useState } from "react";
import { Navbar } from "../../Navbar";
import { SelectUser } from "../../pages/SelectUser";
import ChatInterface from "../../ChatInterface";
import { theme } from "../../Theme";
const ChatInterfaceTemplate = () => {
  const [mode, setMode] = useState("light");
  return (
    <>
      <div className="chat_container">
        <div className="navbar_">
          <Navbar mode={mode} setMode={setMode} />
        </div>
        <div className="chats">
          <SelectUser mode={mode} />
        </div>
        <div className="chat_display" style={theme[mode].chat_background}>
          <ChatInterface mode={mode} />
        </div>
      </div>
    </>
  );
};

export default ChatInterfaceTemplate;
