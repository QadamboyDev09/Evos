import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  //http://localhost:5000/auth/register
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMag, setErorrMsg] = useState();
  const [status, setStatus] = useState("");

  const postData = async () => {
    try {
      const res = await axios.post("http://localhost:5000/auth/register", {
        username: username,
        password: password,
      });
      setStatus(res.status);
    } catch (error) {
      setErorrMsg(error?.response?.data?.message);
    }
  };
  const onRegister = () => {
    postData();
  };
  return (
    <div>
        <div className="flex gap-2 flex-col p-[30px] w-full sm:w-[400px]">
        <img className="w-[150px] h-[100px] flex justify-center items-center align-center mx-auto" src="evos.png" alt="" />
      <h1 className="flex justify-center items-center text-green-700 text-[20px] pb-[20px] w-[200px] text-center sm:w-full">Hello, please open a new account</h1>
      {status === 200 && <Navigate to={"/"} />}
      <input
        onChange={(e) => setUsername(e.target.value)}
        className="border border-1 outline-none px-[10px] rounded-sm p-[6px]"
        type="text"
        placeholder="Username"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        className="border border-1 outline-none px-[10px]  rounded-sm p-[6px] text-red-200"
        type="password"
        placeholder="Password"
      />
      <p className="text-red-500 ">{errorMag}</p>
      <button
        onClick={onRegister}
        className="bg-green-700 py-2 px-[40px] text-white rounded-md"
      >
        Register
      </button>
      <Link className="text-center text-blue-500 py-[10px]" to={"/login"}>
        Login
      </Link>
    </div>
    </div>
  );
};

export default Register;
