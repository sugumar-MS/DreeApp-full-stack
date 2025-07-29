import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { backendUrl } from '../App'


const Login = ({setToken}) => {

    const [email,setEmail] = useState('')
    const [password,setpassword] = useState('')

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const res = await axios.post(backendUrl + '/api/user/admin',{email,password})
            if(res.data.success){
                setToken(res.data.token)
            } else {
               toast.error(res.data.message)
            }
            
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

  return (
    <div className='min-h-screen flex items-center justify-center w-full'>
        <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
            <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
            <form onSubmit={onSubmitHandler}>
                <div className='mb-3 min-w-72'>
                    <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email} className='rounded-md w-full border border-gray-300 px-3 py-2' type='email' placeholder='Enter your@email.com' required/>
                </div>
                <div className='mb-3 min-w-72'>
                    <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
                    <input onChange={(e)=>setpassword(e.target.value)} value={password} className='rounded-md w-full border border-gray-300 px-3 py-2' type='number' placeholder='Enter your Password' required/>
                </div>
                <button type='submit' className='mt-2 w-full bg-black text-white rounded-md px-3 py-2'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login
