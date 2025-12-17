import { useNavigate } from "react-router-dom"

function LoginButton() {
  const navigate = useNavigate()
  const Redirect = () => {
    window.location.href = "http://localhost:5000/login"
  }
    const RedirectTwo = () => {
    navigate("/LogIn")
  }
  return (
    <div className = "flex flex-col gap-4">
    <button className="bg-yellow-400 p-2 rounded hover:bg-yellow-500 "onClick={Redirect} >Link with Spotify</button>
    <button className="bg-yellow-400 p-2 rounded hover:bg-yellow-500" onClick={RedirectTwo}>Log In </button>
   </div>
  )
}

export default LoginButton