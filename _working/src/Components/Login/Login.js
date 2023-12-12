import React, { useContext } from 'react';
import './Login.css';
import { AuthContext } from '../../context/UserContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
   const { signIn } = useContext(AuthContext);
   const navigate = useNavigate();
   //apply useLocation function given by react-dom to access or store the current location in PrivateRoute.js. it forwards to login.js and the path is stored in location variable. From there the location is sent using prop called state. Here, we are accessing the location sent by PrivateRoute. ? ba ternary operator deyar karon amra to directly login page e open korte pari. tokhon to location variable e kichu pabe na path. tokhon data na pele error dekhai dibe. sejonno ternary operator diye data na pele samne chole jabe, error dekhabe na. ebong login er por homepage e pathai dibe. 
   const location = useLocation();
   const from = location.state?.from?.pathname || '/'

   const handleSubmit = event => {
      event.preventDefault();

      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      signIn(email, password)
         .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            // navigate('\'); dile homepage e niye jabe. kintu evabe korle jeta hocche, ami jodi private kono page e dhukte jai, tokhon login chai, login kori, tokhon oi page e na theke, login howar por homepage e niye chole jabe. kintu amra chacchi j j page e login form aschilo oi page ei thakbe login er por. sejonno 
            navigate(from, { replace: true })
         })
         .catch(error => console.error(error));
   }

   return (
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
            <input type="submit" className='btn-submit' value="Submit" />
         </form>

         <p>New to EmaJohn?<Link to='/signup'>Create a new account</Link></p>

      </div>
   );
};

export default Login;