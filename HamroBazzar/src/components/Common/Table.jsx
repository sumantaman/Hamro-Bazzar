import React from "react";
import "./Table.css";
const Table = ({ heading, children }) => {
  return (
    <table className="common_table">
      <thead>
        {heading.map((item, index) => (
          <th key={index}>{item} </th>
        ))}
      </thead>
      {children}
    </table>
  );
};

export default Table;
