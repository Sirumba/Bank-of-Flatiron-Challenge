import React from "react";
import TransactionsList from "./TransactionsList";

import AddTransactionForm from "./AddTransactionForm";

function addItem(obj){
  setTransactions([...transaction, obj])
}

function AccountContainer({ transaction,search, setSearch }) {
// console.log(transaction)
  return (
    <div>
      
      <AddTransactionForm addItem={addItem}/>
      <TransactionsList 
          transaction={transaction} search={search}    
      />
    </div>
  );
}

export default AccountContainer;
