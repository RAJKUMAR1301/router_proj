import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom'

const LoginFrom = ({setLogged}) => {

 const [formData,setFormData]=useState({
    email:"",password:""
 })
 const naviagte=useNavigate();

 const [showpass,setpass]=useState(false);

//  function changeHandler(event) {
//   const { name, value } = event.target;
//   setFormData(prevData => ({
//     ...prevData,
//     [name]: value
//   }));
// }
 function changeHandler(event) {
  
  setFormData(prevData => ({
    ...prevData,
    [event.target.name]:event.target.value
  }));
}

  function SubmitHandler(event){
     event.preventDefault();
     setLogged(true);
     toast.success("Login In")
     console.log("Printing the formData")
     console.log(formData)
     naviagte("/Dashboard");
  }
  return (
    <form onSubmit= {SubmitHandler}
    className='flex flex-col w-full gap-y-4 mt-6' >

        <label className=' w-full'>
           <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]' >
            Email Address<sup className='text-pink-200' >*</sup>
           </p>

           <input
            required
           type="email"  /* check the type here */
           value= {formData.email}
           onChange={changeHandler}
           placeholder="Enter email address"
           name="email"
           className='bg-richblack-800 rounded-[0.5rem] w-full text-richblack-5 p-[12px]'
           >
            
        
           </input>
           
        </label>

    
          <label className='w-full relative'>
           <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375 rem]'>
            Password<sup className='text-pink-200'>*</sup>
           </p>
           <input required

           type={showpass?("text"):("password")}

           value= {formData.password}
           onChange={changeHandler}
           placeholder="Enter your password"
           name="password"
           className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full  p-[12px] '
           
           >
        
           </input>
           <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setpass(prev => !prev)}>

  {showpass ? <AiOutlineEye fontSize={24} fill='#AFB2BF' /> : <AiOutlineEyeInvisible  fontSize={24} fill='#AFB2BF'/>}
           </span>

            <Link  to="#">
              <p className='text-xs mt-1 max-w-max text-blue-100 ml-auto'>
                ForgotPassword
              </p>
            </Link>

        </label>



      
        <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-000 px-[12px] py-[10px] mt-6'>
        Sign In
      </button>


    </form>
  )
}

export default LoginFrom
