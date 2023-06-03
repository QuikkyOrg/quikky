import React from "react";

const OnlineContact = ({ img }) => {
  return (
    <>
      <div className="onlineContact">
        <div className="online_img">
          <img src={img} alt="person_img" className="_img" />
        </div>
      </div>
    </>
  );
};

export default OnlineContact;
