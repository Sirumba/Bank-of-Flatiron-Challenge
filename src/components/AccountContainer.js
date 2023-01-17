import React from "react";
import TransactionsList from "./TransactionsList";

import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({ transaction,search, setSearch }) {
// console.log(transaction)
  return (
    <div>
      
      <AddTransactionForm />
      <TransactionsList 
          transaction={transaction} search={search}    
      />
    </div>
  );
}

export default AccountContainer;
