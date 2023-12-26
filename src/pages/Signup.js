import React from 'react'
import signupImg from "../assets/signup.png"
import Template from '../components/Template'
const Signup = ({setLogged}) => {
  return (
    <Template
   title="Join the millions learning to code with studyNotion for free"
   desc1="build skills for today,tommorow,and beyond"
   desc2="Education to future-proof your carrer"
   image={signupImg}
   formtype="signup"
   setLogged={setLogged}>

   </Template>
  )
}

export default Signup
