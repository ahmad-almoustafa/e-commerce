import React, { useState } from "react";

const Alert = ({ color, title, message }) => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      {visible ? (
        <div
          className={
            "px-6 py-4 border-0 rounded relative mb-4 bg-"+color+"-500"
          }
        >
          <span className="text-xl inline-block mr-5 align-middle">
            <i className="fas fa-bell" />
          </span>
          <h4 className=" capitalize text-2xl font-medium leading-tight mb-2">
            {title}
          </h4>
          <hr className={"opacity-30 border-" + color + "-600"} />
          <p class="my-4">{message}</p>
          <button
            className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
            onClick={() => setVisible(false)}
          >
            &times;
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Alert;
