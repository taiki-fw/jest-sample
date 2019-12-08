import React, { useState } from "react";

const STATUS = {
  HOVERED: "hovered",
  NORMAL: "normal"
};

export default function Link({ page, children }) {
  const [status, setStatus] = useState(STATUS.NORMAL);
  const mouseEnter = () => {
    setStatus(STATUS.HOVERED);
  };
  const mouseLeave = () => {
    setStatus(STATUS.NORMAL);
  };
  return (
    <a
      className={status}
      href={page || "#"}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      {children}
    </a>
  );
}
