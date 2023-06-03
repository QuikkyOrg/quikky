import React, { useState } from "react";
import Picker from "emoji-picker-react";

function ChatBox({ value, mode }) {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submit query:", value);
  }
  const [inputStr, setInputStr] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (emojiObject) => {
    setInputStr((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };
  return (
    <div className="chatbox">
      {showPicker && (
        <Picker
          className="emoji_picker"
          pickerStyle={{ width: "50%" }}
          onEmojiClick={onEmojiClick}
        />
      )}
      <div className="flex border items-center justify-between rounded-full w-full shadow-md pl-4">
        {mode === "light" ? (
          <img
            className="w-9 h-9 pl-1"
            src="assets/emoji_light.svg"
            onClick={() => setShowPicker((val) => !val)}
          />
        ) : (
          <img
            className="w-9 h-9 pl-1"
            src="assets/emoji_dark.svg"
            onClick={() => setShowPicker((val) => !val)}
          />
        )}
        <input
          className="focus:outline-none px-5 w-full"
          type="textarea"
          placeholder="type your message . . . . . "
          value={inputStr}
          onChange={(e) => setInputStr(e.target.value)}
        />
        <button
          type="submit"
          className="focus:outline-none focus:shadow-outline hover:transform hover:scale-125 transition duration-200 ease-in-out px-5"
          onClick={handleSubmit}
        >
          <img src="../../../public/bird.svg" />
        </button>
      </div>
    </div>
  );
}

export default ChatBox;
