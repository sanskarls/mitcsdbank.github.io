import React from 'react';
import './New.css'

const CreateNewAccount = () => {
  return (
    
    
      <div class="container">
      <h2>New Bank Account Application</h2>
      <form action="submit_new_account.php" method="post">
        <label htmlFor="fullname">Full Name:</label>
        <input type="text" id="fullname" name="fullname" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <label htmlFor="confirm_password">Confirm Password:</label>
        <input type="password" id="confirm_password" name="confirm_password" required />

        <input type="submit" value="Create Account" />
      </form>
    </div>
    
  );
};

export default CreateNewAccount;
