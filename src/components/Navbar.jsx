import React from 'react'

const Navbar = () => {
  return (
    <header>
      <nav className = "flex flex-row">
        <img src ="/logo.svg" alt ="deku"></img>

      <ul className = "flex flex-row gap-4 ml-4">
        {[
            {label :"Store"},
            {label :"Mac"},
            {label : "iphone"},
            {label : "ipad"},
            {label : "watch"},
            {label : "airpods"},

        ].map((link) => (
            <li key={link.label}>
            <a href={link.label}>{link.label}</a>
            </li>
        ))}
      </ul>
      </nav>
    </header>
  )
}

export default Navbar
