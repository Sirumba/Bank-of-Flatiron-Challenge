import React from "react";

function AddTransactionForm() {
  return (
    <>
      <form className="row">
        <div className="col-12">
          <input type="date" name="date" />
          <input type="text" name="description" placeholder="Description" />
          <input type="text" name="category" placeholder="Category" />
          <input type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="btn btn-outline-primary" type="submit" style={{backgroundColor: "navyblue", color: "black"}}>
          Add Transaction
</button>
      </form>
    


      



      </>
  );
}

export default AddTransactionForm;
