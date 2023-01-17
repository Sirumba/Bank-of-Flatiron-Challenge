import React, { useEffect, useState } from "react";
import AccountContainer from "./AccountContainer";
import "../index.css"
function App() {
  const [transaction, setTransaction] = useState([]);
  const[search, setSearch]=useState('')

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((res) => res.json())
      .then((data) => setTransaction(data));
  }, []);
  const handleTransList = (addTrans) => {
    const newTransList = [...transaction, addTrans];
    setTransaction(newTransList);
  };

  return (
    <div className="ui raised segment">
     <div className="left-div">
      <h2 className="h1">Bank of Flatiron</h2>
    </div>
      <AccountContainer 
        getTransactions={handleTransList} 
        transaction={transaction} 
        search={search}
        setSearch = {setSearch}
        />
    </div>
  );
}

export default App;
