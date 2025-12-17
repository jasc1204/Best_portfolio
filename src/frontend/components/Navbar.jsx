import React from 'react'
import profile from '../images/profile.svg';
function Navbar() {

const labels = ["midoriya", "bakugo", "todoroki"];    
  return (
    <nav className = "flex items-center gap-4 p-4 bg-blue-900 h-16 justify-around" >
        <img src={profile} alt="Profile" className="w-10 h-10 "/>
        <ul className="flex gap-2">
          {labels.map((label, idx) => (
            <li key={idx}>
              <a href={`${label}`} className ="text-white font-bold">{label}</a>
            </li>
          ))}
        </ul>
    </nav>
  )
}

export default Navbar
