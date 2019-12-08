import React, { useState } from "react";

export default function CheckboxWithLabel({ labelOn, labelOff }) {
  const [isChecked, toggleCheck] = useState(false);

  const handleChange = () => {
    toggleCheck(!isChecked);
  };
  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      {isChecked ? labelOn : labelOff}
    </label>
  );
}
