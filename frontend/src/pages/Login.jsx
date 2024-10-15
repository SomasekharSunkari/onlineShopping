import React, { useState } from 'react'

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const onSubmitHandler = async (event)=>{
    event.preventDefault();
  }
  return (
    <form  onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className=' border-none h-[1.8px] w-8 bg-gray-800' />

      </div>
     { currentState ==="Login"?"": <input type="text"      className='w-full border py-2 border-gray-800 px-2' placeholder='Name'/>}
      <input type="email"     className='w-full border py-2 border-gray-800 px-2' placeholder='Email'/>
      <input type="password"  className='w-full border py-2 border-gray-800 px-2' placeholder='Password'/>
      <div className='w-full flex justify-between '>
        { currentState === "Login" ?
          <p className='cursor-pointer'>Forgot your password ? </p>:
          <p className='cursor-pointer'>
            Already have an account ?

          </p>
        }{
          currentState === "Login"
          ?  <p onClick={()=>setCurrentState("Sign Up")}>Create an Account</p>:
          <p onClick={()=>setCurrentState("Login")}>Login Here </p>
        }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === "Login"?"Login" : "Sign up"}</button>


    </form>
  )
}

export default Login
