import React from "react";
import OnlineContact from "../OnlineContact";
import { theme } from "../Theme";

const ShortCutBar = ({ mode }) => {
  const recentEmojis = [
    {
      id: 1,
      emoji: "🤣",
    },
    {
      id: 2,
      emoji: "😃",
    },
    {
      id: 3,
      emoji: "😄",
    },
    {
      id: 4,
      emoji: "😁",
    },
  ];

  return (
    <>
      <div className="shortcutbar" style={theme[mode].shortCutBar}>
        <div className="emojis">
          {recentEmojis.map((emoji) => (
            <div className="emoji" key={emoji.id}>
              {emoji.emoji}
            </div>
          ))}
        </div>

        <div className="more">
          {mode === "light" ? (
            <img class="more_icon" src="assets/more.png" alt="" srcset="" />
          ) : (
            <img
              class="more_icon"
              src="assets/more_dark.png"
              alt=""
              srcset=""
            />
          )}
        </div>

        <div className={`online_contacts ${mode}`}>
          {[...Array(10)].map((e, i) => (
            <OnlineContact key={i} img={`assets/${i + 1}.jpg`} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ShortCutBar;
