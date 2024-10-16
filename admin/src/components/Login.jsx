import React, { useState } from 'react';
import axios from "axios";
import { backendurl } from '../App';
import { toast } from 'react-toastify';

const Login = ({ setToken }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        console.log("Form submitted");  // Debug log
        try {
            console.log("Sending request to: ", `${backendurl}/api/user/admin`);  // Debug log
            const response = await axios.post(`${backendurl}/api/user/admin`, { email, password });
            console.log("Response received: ", response);  // Debug log
            if (response.data.success) {
                setToken(response.data.token);
                toast.success("Login successful!");
            } else {
                toast.error(response.data.message);
            }
        } catch (err) {
            console.error(err);
            toast.error(err.response?.data?.message || err.message);
        }
    };

    return (
        <div className='min-h-screen flex items-center justify-center w-full'>
            <div className='bg-white rounded-lg shadow-md max-w-md px-8 py-6'>
                <h1 className='font-medium text-2xl text-black mb-4 text-center'>Admin Panel</h1>
                <form onSubmit={onSubmitHandler}>
                    <div className='mb-3 min-w-72'>
                        <p className='mb-3 text-sm'>Email Address</p>
                        <input 
                            type="email" 
                            placeholder='your@gmail.com' 
                            required 
                            className='rounded-md px-4 py-3 w-full border border-gray-300 outline-none mb-2' 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div className='mb-3 min-w-72'>
                        <p className='mb-3 text-sm'>Password</p>
                        <input 
                            type="password" 
                            placeholder='Enter your password' 
                            required 
                            className='rounded-md px-4 py-3 border border-gray-300 w-full outline-none mb-2' 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    <button 
                        type='submit' 
                        className='mt-2 w-full rounded-md px-4 py-4 bg-black text-white cursor-pointer'
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
