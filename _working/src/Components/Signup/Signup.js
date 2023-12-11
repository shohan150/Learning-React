import React from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';

const Signup = () => {
   return (
      <div>
         <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form>
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

         </div>
      </div>
   );
};

export default Signup;