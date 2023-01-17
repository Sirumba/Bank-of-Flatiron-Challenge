import React from "react";

function Transaction({date, category, description, amount}) {
  return (
   
    <tr >
      <td className="table-primary">{date}</td>
      <td>{description}</td>
      <td>{category} </td>
      <td >{amount}</td>
    </tr>
     
  );
}

export default Transaction;
