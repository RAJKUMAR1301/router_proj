import React from 'react'
import Template from '../components/Template'
import loginImg from "../assets/login.png"
const Login = ({setLogged}) => {
  return (
   <Template
   title="Welcome Back"
   desc1="build skills for today,tommorow,and beyond"
   desc2="Education to future-proof your carrer"
   image={loginImg}
   formtype="login"
   setLogged={setLogged}
   >

   </Template>
  )
}

export default Login
