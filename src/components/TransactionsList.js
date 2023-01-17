import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ transaction, search }) {
  const searchedList = transaction.filter((everyTransaction) =>
    everyTransaction.description.toLowerCase().includes(search.toLowerCase())
  );
  // console.log(transaction)
  return (
    <table className="table table-striped">
      <tbody>
        <tr>
          <th className="table-primary">
            <h3>Date</h3>
          </th>
          <th className="table-primary">
            <h3>Description</h3>
          </th>
          <th className="table-primary">
            <h3>Category</h3>
          </th>
          <th className="table-primary">
            <h3>Amount</h3>
          </th>
        </tr>
        {searchedList.map((transaction) => (
          <Transaction
            key={transaction.id}
            date={transaction.date}
            category={transaction.category}
            amount={transaction.amount}
            description={transaction.description}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsList;
