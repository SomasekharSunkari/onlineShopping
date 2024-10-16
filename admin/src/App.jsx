import React, { useEffect, useState } from 'react'
import "./App.css"
import Navbar from './pages/Navbar'
import Sidebar from './pages/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add'
import Orders from './pages/Orders'
import List from "./pages/List"
import Login from './components/Login'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
export const backendurl = "http://localhost:4000";
const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token")?localStorage.getItem("token"):"");
  useEffect(()=>{
    localStorage.setItem("token",token);

  },[token])
 
  return (

    <div className='min-h-screen bg-gray-50'>
      <ToastContainer/>
      {
        token === "" ?<Login setToken={setToken}/>:
          <>
            <Navbar setToken={setToken} />
            <hr />
            <div className='flex w-full'>
              <Sidebar />
              <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-base text-gray-600'>
                <Routes>
                  <Route path='/add' element={<Add  token={token}/>} />
                  <Route path='/list' element={<List token={token} />} />
                  <Route path='/orders' element={<Orders token={token} />} />
                </Routes>

              </div>

            </div>
          </>

      }


    </div>
  )
}

export default App
