import React from "react";
import Button from "./Button";

const Clear = props => (
  <div className="clear" onClick={props.handleClear}>
    {props.children}
  </div>
);

export default Clear;
