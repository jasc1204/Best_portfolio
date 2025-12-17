import React from 'react'
import LoginButton from './LoginButton.jsx';
import Navbar from './Navbar.jsx';

function Main() {

  return (
    <div>
    <Navbar></Navbar>
    <main className="bg-green-400 h-screen flex items-center justify-center" >

      <LoginButton></LoginButton>
    </main>
    </div>
  )
}

export default Main