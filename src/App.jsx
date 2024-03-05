import React, { useState } from 'react';
import './App.css'; // Assuming you have a CSS file named App.css
import CreateNewAccount from './createNewAccount'; // Importing CreateNewAccount component

function App() {
  const [showNewAccount, setShowNewAccount] = useState(false);
  const [Name, setName] = useState('mit bank of india');

  const checkAccountDetails = () => {
    // Logic for checking account details goes here
    console.log('Checking account details...');
  };

  const performTransaction = () => {
    // Logic for performing transaction goes here
    console.log('Performing transaction...');
  };

  const viewTransactionHistory = () => {
    // Logic for viewing transaction history goes here
    console.log('Viewing transaction history...');
  };

  const applyForLoan = () => {
    // Logic for applying for a loan goes here
    console.log('Applying for a loan...');
  };

  return (
    <>
      <h1>{Name}</h1>
      <ul>
        <li>
          <button onClick={() => setShowNewAccount(true)}>Create New Account</button>
        </li>
        <li>
          <button onClick={checkAccountDetails}>Check Account Details</button>
        </li>
        <li>
          <button onClick={performTransaction}>Transaction</button>
        </li>
        <li>
          <button onClick={viewTransactionHistory}>View Transaction History</button>
        </li>
        <li>
          <button onClick={applyForLoan}>Loan</button>
        </li>
      </ul>
      <div>
        {/* Render CreateNewAccount component when showNewAccount is true */}
        {showNewAccount && <CreateNewAccount />}
      </div>
    </>
  );
}

export default App;
