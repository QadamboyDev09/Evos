import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <div className="w-full h-screen bg-gray-100">
      
      <div className="w-full h-full flex items-center justify-center flex-col ">
      <h1 className="text-[22px] sm:text-[30px] py-[30px]"><span className="text-[50px] text-green-600">Evos </span>saytiga kirishdan oldin Ro'yhatdan o'tishingiz lozim?</h1>

        <div className="bg-white p-[10px] rounded-2xl shadow-xl">
          {/* <div className="flex gap-2">
            <button onClick={()=>setTab('login')} className={`w-1/2 text-black  ${tab === 'login' ? 'bg-green-600' :''}`}>Login</button>
            <button onClick={()=>setTab('register')} className={`w-1/2 text-black ${tab === 'register' ? 'bg-green-600' :''}`}>Register</button>
          </div> */}
          {/* {tab=='login' &&  <Login />}
          {tab=='register'&&  <Register />} */}
          <Outlet/>
         
        </div>

       
       
      </div>
    </div>
  );
};

export default Auth;
