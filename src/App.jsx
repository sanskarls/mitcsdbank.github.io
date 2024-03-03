import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import createNewAccount from './account.jsx'


 

function App() {


  const[Name, Setrname] = useState('mit bank of india')

   return (
    <>
    <h>{Name}</h>
  
  <ul>
    <li>
      <button onClick={createNewAccount}>Create New Account</button>
    </li>
    <li>
      <button onClick="checkAccountDetails()">Check Account Details</button>
    </li>
    <li>
      <button onClick="performTransaction()">Transaction</button>
    </li>
    <li>
      <button onClick="viewTransactionHistory()">View Transaction History</button>
    </li>
    <li>
      <button onClick="applyForLoan()">Loan</button>
    </li>
  </ul>
  </>
  )
}

export default App
