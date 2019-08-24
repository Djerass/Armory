import React from "react";

const Selector = ({ label, list, change, selectedId }) => {
  let selectValue;
  if (selectedId === "-1") {
    selectValue = "-1";
  } else {
    selectValue = JSON.stringify(list.find(item => item.id === selectedId));
  }
  const options = list
    ? list.map(item => (
        <option key={item.id} value={JSON.stringify({ ...item })}>
          {item.name}
        </option>
      ))
    : null;
  return (
    <div className="item-group">
      <div className="item-label">{label}</div>
      <select
        className="item-select"
        onChange={e => change(label, JSON.parse(e.target.value))}
        value={selectValue}
      >
        <option disabled value="-1">
          Select item
        </option>
        {options}
      </select>
    </div>
  );
};

export default Selector;
