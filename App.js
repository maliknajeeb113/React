import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = <h1 className="heading-element">Heading hai bhai</h1>;

// React Function Component
const Title = () => <h1 className="head">Title Hai</h1>;

const HeadingComponent = () => {
  return (
    <div>
      {Title()}
      {heading}
      <h1 className="heading">Hello World</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);

root.render(<HeadingComponent />);
