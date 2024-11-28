import React from "react";

const CheckBox = ({ title, state, onChange }) => {
  return (
    <div>
      <input type="checkbox" onChange={onChange} checked={state} />
      <label>{title}</label>
    </div>
  );
};

export default CheckBox;
