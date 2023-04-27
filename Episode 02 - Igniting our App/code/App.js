const root = ReactDOM.createRoot(document.getElementById("root"));
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
const heading = React.createElement(
    "h1",
    { className: "someclass" },
    "Hello world"
);
const heading2 = React.createElement("h1", {}, "another hello world");
root2.render(heading2);
root.render(heading);
