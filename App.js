// for multiple elements

const multiple = React.createElement(
  "div",
  { id: "outerDiv" },
  [React.createElement("div", { id: "innerDiv1" }, [
    React.createElement("h1", { id: "insideH1" }, "This is H1"),
    React.createElement("h2", { id: "insideH2" }, "This is H2"),
  ]),React.createElement("div", { id: "innerDiv2" }, [
    React.createElement("h1", { id: "insideH1" }, "This is H1"),
    React.createElement("h2", { id: "insideH2" }, "This is H2"),
  ])]
);

const single = React.createElement("h1", { id: "one" }, "Goodbye World");


//code will become full F
// Hence we have jsx

// for single element

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(multiple);
