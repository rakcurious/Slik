import { useState } from "react";
import sliklogo from '../assets/sliklogo.webp';
import signinwithgoogle from '../assets/signinwithgoogle.svg';
import { loginWithEmailAndPassword, loginWithGoogle, signup, startPasswordRecovery } from "../appwrite/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [page, setPage] = useState('Login');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const navigate = useNavigate();

  const handleLoginWithGoogle = async () => {
    const { success, error, data } = await loginWithGoogle();
    if (success) {
      navigate('/');
    } else {
      setErrorMsg(error);
    }
  };

  const handleSubmit = async () => {
    if (page === 'Login') {
      const { success, error, data } = await loginWithEmailAndPassword(email, password);
      if (success) {
        navigate('/');
      } else {
        setErrorMsg(error);
      }
    } else if (page === 'Sign up') {
      const { success, error, message } = await signup(email, password, name);
      if (success) {
        setSuccessMsg(message);
        setPage('Verification');
      } else {
        setErrorMsg(error);
      }
    } else if (page === 'Reset Password') {
    //   setSuccessMsg('Please wait, we are sending you an email with a password reset link...');
      const { success, error } = await startPasswordRecovery(email);
      if (success) {
        setErrorMsg('')
        setSuccessMsg('We have sent you a Password reset email. You can reset your password using the link in the email');
      } else {
        setErrorMsg(error);
      }
    }
  };
    
    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-8 lg:px-8 font-urbanist">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-14 w-auto"
              src={sliklogo}
              alt="Slik"
            />
            <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
              {page}
            </h2>
          </div>
  
         
          {page === 'Verification' ? <p className="text-center text-2xl font-semibold">Please check your email for verification</p> : 
           <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={(e)=>e.preventDefault()} className="space-y-6" >
              {(page == 'Login' || page === 'Sign up' || page === 'Reset Password') && <div>
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-0">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-lg font-medium sm:leading-6"
                  />
                </div>
              </div>}
  
              {(page == 'Login' || page === 'Sign up') &&<div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-semibold leading-6 text-gray-900">
                    Password
                  </label>
                  {page === 'Login' && <div className="text-sm">
                    <p onClick={()=>setPage('Reset Password')} className="font-semibold text-indigo-700 cursor-pointer">
                      Forgot password?
                    </p>
                  </div>}
                </div>
                <div className="mt-0">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-lg font-medium sm:leading-6"
                  />
                </div>
                
              </div>}
              {(page === 'Sign up') && <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                    Name
                  </label>
                  
                </div>
                <div className="mt-0">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-lg font-medium sm:leading-6"
                  />
                </div>
                
              </div>}
  
              <div>
                
                <button onClick={handleSubmit}
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  {page}
                </button>
              </div>
              <p className="my-3 mx-5 text-center text-red-500 text-lg font-semibold">{errorMsg}</p>
            </form>
  
          { (page === 'Login' || page === 'Sign up' )&& <> <p className="mt-5 text-center text-md text-gray-500 font-medium">
              {page=== 'Login' ? 'New user? ': page === 'Sign up' ?'Already have an account? ' : ''}<span onClick={()=>setPage((prev)=>prev === 'Login'? 'Sign up' : 'Login')} className="text-indigo-700 cursor-pointer text-md font-semibold">{page === 'Login' ? 'Sign up' : 'Login'}</span>
              
            </p>
            
            <p className="text-center font-medium text-sm my-5">OR</p>
            <img className=" cursor-pointer h-10 md:h-12 flex w-full justify-center leading-6" src={signinwithgoogle} onClick={handleLoginWithGoogle}/>
            </> }

            {page === 'Reset Password' && <p className="text-center text-2xl font-semibold">{successMsg} </p> }
          </div>
          }
        </div>
      </>
    )
  }
  