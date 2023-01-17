import React, { useEffect, useState } from "react";
import AccountContainer from './components/AccountContainer'
import Search from './components/Search';
import "./index.css"
function App() {
  const [transaction, setTransaction] = useState([]);
  const[search, setSearch]=useState('')

  useEffect(() => {
    fetch("https://api.npoint.io/b6661f7c23428e93d3e8/transactions/")
      .then((res) => res.json())
      .then((data) => setTransaction(data));
  }, []);
  const handleTransList = (addTrans) => {
    const newTransList = [...transaction, addTrans];
    setTransaction(newTransList);
  };

  return (
    <div className="ui raised segment">
      <ul className="nav nav-tabs">
      <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href={{setSearch}} role="button" aria-haspopup="true" aria-expanded="false">Search Transactions</a>
    <div className="dropdown-menu">
    <Search setSearch={setSearch} />
    </div>
    </li>
      </ul>
     <div className="left-div">
      <h2 className="h1">Bank of Flatiron</h2>
      <span>
     
      </span>
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
