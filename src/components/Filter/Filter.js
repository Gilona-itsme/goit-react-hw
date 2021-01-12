import React from "react";

export default function Filter({ value, onChangeFilter }) {
  return (
    <div>
      <input
        type="text"
        value={value}
        name="filter"
        onChange={(e) => onChangeFilter(e.target.value)}
        placeholder="Enter name for Search"
      />
    </div>
  );
}
