import React from "react";
import ReactDOM from "react-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
const heading = React.createElement(
    "h1",
    { className: "someclass" },
    "Hello world"
);
root.render(heading);
