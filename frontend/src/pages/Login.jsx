import React, { useContext, useEffect, useState } from 'react'
import axios from "axios";
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { backend_url, token, setToken, navigate } = useContext(ShopContext)
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backend_url + "/api/user/register", {name,email,password});
        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem("token",response.data.token)
          toast.success("Sign up SuccessFull !")
        }
        else{
         toast.error(response.data.message)

        }
      } else {
        const response = await axios.post(backend_url+"/api/user/login",{email,password});
        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem("token",response.data.token)

          toast.success("Login Successfull !");
        }
        else{
          toast.error(response.data.message)

        }

      }

    }
    catch (err) {
      console.log(err.message);
      toast.error(err.message)


    }
  }
  useEffect(()=>{
    if(token){
    navigate("/")
    }
  },[token])
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className=' border-none h-[1.8px] w-8 bg-gray-800' />

      </div>
      {currentState === "Login" ? "" : <input type="text" onChange={(e) => setName(e.target.value)} className='w-full border py-2 border-gray-800 px-2' placeholder='Name' />}
      <input type="email" onChange={(e) => setEmail(e.target.value)} className='w-full border py-2 border-gray-800 px-2' placeholder='Email' />
      <input type="password" onChange={(e) => setPassword(e.target.value)} className='w-full border py-2 border-gray-800 px-2' placeholder='Password' />
      <div className='w-full flex justify-between '>
        {currentState === "Login" ?
          <p className='cursor-pointer'>Forgot your password ? </p> :
          <p className='cursor-pointer'>
            Already have an account ?

          </p>
        }{
          currentState === "Login"
            ? <p onClick={() => setCurrentState("Sign Up")}>Create an Account</p> :
            <p onClick={() => setCurrentState("Login")}>Login Here </p>
        }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === "Login" ? "Login" : "Sign up"}</button>


    </form>
  )
}

export default Login
