import React from "react";




function Search({setSearch}) {
  function handleSearch(e){
    setSearch(e.target.value)
  }
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleSearch}
        
      />
      
   </div>
//     <nav class="navbar navbar-light bg-info">
//   <form class="form-control input-lg btn-outline-light bg-" type="button">
//     <input class="form-control my-1 mr-sm-2 bg-info" type="search" placeholder="Search your Recent Transactions"aria-label="Search" onChange={handleSearch} />
//     <button class="btn btn-outline-info" type="submit">Search</button>
//   </form>
// </nav>

  );     
}

export default Search;
