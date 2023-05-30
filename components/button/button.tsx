import React from "react";
import "./button.css";

export function PrimaryButton({ txt }) {
  return (
    <div>
      {/* <button
        type="button"
        className="flex background-gradient hover:from-green-600 hover:to-blue-600 focus:outline-none text-white text-base uppercase font-bold shadow-md  p-3"
      >
        {txt}
      </button> */}
      <button type="button" className="button_box">
        <div className="button_frame">
          <h1 className="button_txt">{txt}</h1>
        </div>
      </button>
    </div>
  );
}
