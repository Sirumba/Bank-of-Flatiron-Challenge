# The Bank Of Flariton
This application allows for a user to fill the bank transactions and be able to search for the transactions that have been made in the Bank of Flatiron 

## Development Requirements

- Visual Studio Code.
- npm 
- Browser(Chrome or any other Chromium based Browser)
- Live server  extension
- json-server

-To get the code..

1. Go to the following github repository to access the files.
```bash
 https://github.com/Sirumba/Bank-of-Flatiron-Challenge
```

2. Fork and Clone the repository above to your local computer.


3. Move to the folder where you cloned the files and install requirements and make sure you are in the below directory:

```bash
cd Galaxy-Films-/
```
4. Open the folder in `VS Code` using the command 
```bash
code .
```
## User Story
- the user is able to view a list of previous transaction
- the user is able to search within list of previous transaction
- the user is able to add transaction 


## Setup
After cloning the project:
1. Run `npm install` in your terminal.
2. Run `npm start`in your terminal.
2. Run `json-server --watch db.json --port 8001`. This will run your backend on port `8001`.
3. In a new terminal, run `npm start`. This will run the app on port `3000`.
Make sure to open
[http://localhost:8001/transactions](http://localhost:8001/transactions) in the
browser to verify that your backend is working before you proceed!
## Endpoints
The base URL for the backend is: `http://localhost:8001`
The base URL for the frontend is: `http://localhost:3000`
As a user, I should be able to:
- See a table of the transactions.
- Fill out and submit the form to add a new transaction. This should add the new
  transaction to the table **as well as post the new transaction to the backend
  API for persistence**.
- Filter transactions by typing into the search bar. Only transactions with a
  description matching the search term should be shown in the transactions
  table.
## Technology used

- [HTML5](https://www.python.org/)
- [Javascript](https://heroku.com)
- [CSS]
- [React-JS]
- [Bootstrap]

## Author
Project contributed to by:
 [Simon Sirumba Maina](https://github.com/sirumba/)

## Licence
This project is licensed under the `ISC licence`