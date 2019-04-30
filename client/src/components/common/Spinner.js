import React from "react";
import spinner from "./spinner.gif";

export default function Spinner() {
  return (
    <div>
      <img
        src={spinner}
        style={{ width: "200px", margin: "auto", diplay: "block" }}
        alt="Loading..."
      />
    </div>
  );
}
