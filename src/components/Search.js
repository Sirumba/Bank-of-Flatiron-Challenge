import React from "react";

function Search({setSearch}) {
  function handleSearch(e){
    setSearch(e.target.value)
  }
  return (
    // <div className="ui large fluid icon input">
    //   <input
    //     type="text"
    //     placeholder="Search your Recent Transactions"
    //     onChange={handleSearch}
        
    //   />
    //   <i className="circular search link icon"></i>
    // </div>
    <nav class="navbar navbar-light bg-info">
  <form class="form-control input-lg btn-outline-light" type="button">
    <input class="form-control input-lg mr-sm-2 bg-info" type="search" placeholder="Search your Recent Transactions"aria-label="Search" onChange={handleSearch} />
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
  );     
}

export default Search;
