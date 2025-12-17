import React, {useEffect, useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './frontend/components/Main.jsx';
import axios from 'axios';

import LogIn from './frontend/components/LogIn.jsx';
import Register from './frontend/components/Register.jsx';
const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
    return (
    <div className = "bg-red-400">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />}/>
        </Routes>
    </div>
  )
}

export default App
