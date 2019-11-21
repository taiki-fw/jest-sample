import React, { useState } from "react";

const STATUS = {
  HOVERED: "hovered",
  NORMAL: "normal",
  CLIKED: "clicked"
};

export default function Link(props) {
  const [status, setStatus] = useState(STATUS.NORMAL);

  const onMouseEnter = () => {
    setStatus(STATUS.HOVERED);
  };

  const onMouseLeave = () => {
    setStatus(STATUS.NORMAL);
  };

  const onClicked = () => {
    setStatus(STATUS.CLIKED);
  };

  return (
    <a
      className={status}
      href={props.page || "#"}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClicked}
    >
      {props.children}
    </a>
  );
}
