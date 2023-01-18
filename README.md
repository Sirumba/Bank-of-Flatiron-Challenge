# The Bank Of Flariton
This application allows for a user to fill the bank transactions and be able to search for the transactions that have been made in the Bank of Flatiron 
# Development requirements
- Visual studio code
- Live server  extension
- npm
- json-sever
To get the code,
```bash
 click on this link: https://github.com/Sirumba/Bank-of-Flatiron-Challenge
 
- fork and git clone the code to you local machine.
- Navigate to this folder by running this command:
```bash
 cd code-challenge-Bank-of-flatiron/
 ```
- open the code using this command,
```bash
   code .
```
- Below at the bottom of your vs code click on the Go live to display the questions on the browser.
## Setup
After cloning the project:
1. Run `npm install` in your terminal.
2. Run `npm start`in your terminal.
2. Run `npm run server`. This will run your backend on port `8001`.
3. In a new terminal, run `npm start`. This will run the app on port `8000`.
Make sure to open
[http://localhost:8001/transactions](http://localhost:8001/transactions) in the
browser to verify that your backend is working before you proceed!
## Endpoints
The base URL for the backend is: `http://localhost:8001`
The base URL for the frontend is: `http://localhost:8080`
As a user, I should be able to:
- See a table of the transactions.
- Fill out and submit the form to add a new transaction. This should add the new
  transaction to the table **as well as post the new transaction to the backend
  API for persistence**.
- Filter transactions by typing into the search bar. Only transactions with a
  description matching the search term should be shown in the transactions
  table.
### Core Deliverables
Example Response:
```json
[
  {
    "id": 1,
    "date": "2019-12-01",
    "description": "Paycheck from Bob's Burgers",
    "category": "Income",
    "amount": 1000
  },
  {
    "id": 2,
    "date": "2019-12-01",
    "description": "South by Southwest Quinoa Bowl at Fresh & Co",
    "category": "Food",
    "amount": -10.55
  }
]
```
#### POST `/transactions`
Required Headers:
```js
{
  "Content-Type": "application/json"
}
```
Request Object:
```json
{
  "date": "string",
  "description": "string",
  "category": "string",
  "amount": "number"
}
```
Example Response:
```json
{
  "id": 1,
  "date": "2019-12-01",
  "description": "Paycheck from Bob's Burgers",
  "category": "Income",
  "amount": 1000
}
```
## Author

Simon Sirumba