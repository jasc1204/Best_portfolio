import React from 'react'
import { useNavigate } from "react-router-dom"

function LogIn() {
  const navigate = useNavigate()
  const handleRegister = () => {
    navigate("/Register")
  }
  return (
    <div className = "bg-gray-800 h-screen justify-center items-center flex flex-col gap-4">
    <form className = "flex flex-col h-100 w-100 bg-neutral-300 p-4 rounded-md items-center justify-center">
      <h1 className = "text-gray-800 text-4xl font-bold mb-3">Log In</h1>
      <input name="username" type="text" placeholder ="Username" className ="border rounded-sm p-1 mb-2"/>
      <input name="password" type="password" placeholder ="Password" className ="border rounded-sm p-1" />
      <button className = "border rounded-3xl py-2 px-8 mt-2" type="submit">Log In</button>
    <p className = "self-center cursor-pointer mt-4 text-blue-500" onClick={handleRegister}>Create an account</p>
    </form> 
    </div>
  )
}

export default LogIn
