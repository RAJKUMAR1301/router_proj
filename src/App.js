import "./App.css";
import {Routes,Route} from "react-router-dom" //import routes

import Navbar from "./components/Navbar"
import { useState } from "react";

import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"


import Private from "./components/Private";
function App() {
  
  const [isLogged,setLogged]=useState(false);

  return (<div className='w-screen h-full bg-richblack-900 flex flex-col'>


    <Navbar isLogged={isLogged} setLogged={setLogged}/>

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login setLogged={setLogged}/>}></Route>
      <Route path="/signup" element={<Signup setLogged={setLogged} />}></Route>
      <Route path="/dashboard" element=

      
      {<Private isLogged={isLogged}>
        <Dashboard/>
      </Private>}></Route>
    </Routes>
    
  </div>)


}

export default App;
