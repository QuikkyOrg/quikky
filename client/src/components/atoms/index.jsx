import React, { useState } from "react";
import Picker from "emoji-picker-react";

function SendText(props) {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submit query:", props.value);
  }
  const [inputStr, setInputStr] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (emojiObject) => {
    setInputStr((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };
  return (
    <>
      {showPicker && (
        <Picker pickerStyle={{ width: "100%" }} onEmojiClick={onEmojiClick} />
      )}
      <div className="flex border items-center justify-between rounded-full w-full p-2 shadow-md pl-4">
        <img
          className="w-9 h-9 pl-1"
          src="../../../public/emojji.svg"
          onClick={() => setShowPicker((val) => !val)}
        />
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
    </>
  );
}

export default SendText;
