import React, { useState } from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';

const Signup = () => {
   const [error, setError] = useState(null);
   const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      const confirm = form.confirm.value;

      if (password.length < 6) {
         setError('Your password should have at least 6 characters');
         return;
      }

      if (password !== confirm) {
         setError('Your password did not match');
         return;
      }
      if (password == confirm) {
         setError('');
         return;
      }
   }

   return (
      <div>
         <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSubmit}>
               <div className="form-control">
                  <label htmlFor="email">Email</label>
                  <input type="email" name='email' required />
               </div>
               <div className="form-control">
                  <label htmlFor="password">Password</label>
                  <input type="password" name='password' required />
               </div>
               <div className="form-control">
                  <label htmlFor="confirm">Confirm Password</label>
                  <input type="password" name='confirm' required />
               </div>
               <input type="submit" className='btn-submit' value="Submit" />
            </form>

            <p>New to EmaJohn?<Link to='/login'>Already have an account?</Link></p>
            <p className="text-error" style={{ color: '#ff0000' }}>{error}</p>
         </div>
      </div >
   );
};

export default Signup;