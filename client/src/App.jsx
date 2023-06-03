import React from "react";
import "./App.css";
import { AppBar } from "./components/pages/AppBar";
import ChatInterface from "./components/ChatInterface";
import ChatInterfaceTemplate from "./components/templates/ChatInterfaceTemplate";
import { SelectUser } from "./components/pages/SelectUser";
const App = () => {
  return (
    <>
      {/* <ChatInterface /> */}
      {/* <SelectUser /> */}
      <ChatInterfaceTemplate />

      {/* <AppBar /> */}
    </>
  );
};
export default App;
 
