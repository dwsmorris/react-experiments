import React  from "react";
import ReactDOM  from "react-dom";
import Bazinga from "./bazinga";

const spread = (first, ...rest) => first.concat(rest);

ReactDOM.render(
	<Bazinga/>,
	document.getElementById("app")
);
