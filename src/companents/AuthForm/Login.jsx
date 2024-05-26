import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const Login = () => {
   const { isAuth, setIsAuth}=useContext(AuthContext)
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [error,seterror]=useState('')

    const loginUser = async()=>{
        try {
            const res = await axios.post('http://localhost:5000/auth/login',{
                username:username,
                password:password
            })
            if(res.status === 200){
                setIsAuth(true)
                localStorage.setItem('token',JSON.stringify(res.data.token))
            }
        } catch (error) {
            setIsAuth(false)
            seterror(error.response.data.message);
        }
    }

    const onLogin = ()=>{
      loginUser()
      
    }
  return (
       <div className='flex gap-2 flex-col p-[30px] w-full sm:w-[400px] '>
                <img className="w-[150px] h-[100px] flex justify-center items-center align-center mx-auto" src="evos.png" alt="" />
      <h1 className="flex justify-center items-center text-green-700 text-[20px] pb-[20px]">  Login</h1>
            <input onChange={e=>setUserName(e.target.value)} className='border border-1 px-[10px] rounded-sm p-[6px] outline-none' type="text" placeholder='Username' />
            <input onChange={e=>setPassword(e.target.value)} className='border border-1 px-[10px] rounded-sm p-[6px] outline-none' type="text" placeholder='Password' />
            <p className='text-red-500'>{error}</p>
            <button onClick={onLogin} className='bg-green-700 py-2 px-[40px] text-white rounded-md'>Login</button>
            <Link className='text-center text-blue-500 py-[10px]' to={'/register'}>Register</Link>
        </div>
 
  )
}

export default Login