import { useState } from "react"
import sliklogo from '../assets/sliklogo.webp'
import signinwithgoogle from '../assets/signinwithgoogle.svg'
import { login } from "../appwrite/auth";

export default function Login() {


    const handleLogin = async () => {
        console.log('login with google')
      };

    const [login, setLogin] = useState(true);
    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 font-urbanist">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-14 w-auto"
              src={sliklogo}
              alt="Slik"
            />
            <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
              {login? 'Login' : 'Sign up'}
            </h2>
          </div>
  
          <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" >
              <div>
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-0">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-lg font-medium sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-semibold leading-6 text-gray-900">
                    Password
                  </label>
                  {login && <div className="text-sm">
                    <p className="font-semibold text-indigo-700 cursor-pointer">
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
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-lg font-medium sm:leading-6"
                  />
                </div>
                
              </div>
              {!login && <div>
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
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-lg font-medium sm:leading-6"
                  />
                </div>
                
              </div>}
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  {login? 'Login': 'Sign up'}
                </button>
              </div>
            </form>
  
            <p className="mt-5 text-center text-md text-gray-500 font-medium">
              {login? 'New user? ': 'Already have an account? '}<span onClick={()=>setLogin((prev)=>!prev)} className="text-indigo-700 cursor-pointer text-md font-semibold">{login? 'Sign up': 'Login'}</span>
              
            </p>
            <p className="text-center font-medium text-sm my-5">OR</p>
            <img className=" cursor-pointer h-6 md:h-10 flex w-full justify-center leading-6" src={signinwithgoogle} onClick={handleLogin}/>
          </div>
        </div>
      </>
    )
  }
  