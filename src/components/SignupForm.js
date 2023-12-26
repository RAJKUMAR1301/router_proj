import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const SignupForm = ({ setLogged }) => {

  const [FormData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    ConfirmPassword: "",
  });

  const [showpass, setpass] = useState(false);
  const [showpass2, setpass2] = useState(false);
  const [accounttype,setAccountType]=useState("student");
const  navigate=useNavigate();
  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  
  function SubmitHandler(event) {
    event.preventDefault();
    setLogged(true);
    if(FormData.password!==FormData.ConfirmPassword){
      toast.error("Password not found");
      return;
    }
    
      setLogged(true);
    toast.success("Account Created")

    const accountData={
      ...FormData
    }
    const finalData={
      ...accountData,
      accounttype


    }
    console.log("printing account data")
    console.log(finalData);
    console.log(accountData)
    navigate("/Dashboard")
  }

  return (
    <div >
      <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
        <button 
        className={`${accounttype==="student"?"bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
        onClick={()=>setAccountType("student")}>Student</button>
        <button className={`${accounttype==="instructor"?"bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
        onClick={()=>setAccountType("instructor")}>Instructor</button>
      </div>

      <form onSubmit={SubmitHandler} >
        <div className=' w-full flex justify-between mt-[20px]'>
          <label>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'
            >First Name<sup className='text-pink-200' >*</sup></p>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter first name"
              value={FormData.firstName}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full  p-[12px] '
            />
          </label>
           

          <label>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]' >Last Name<sup className='text-pink-200'>*</sup></p>
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter last name"
              value={FormData.lastName}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full  p-[12px] '
              
            />
          </label>
        </div>
           <div className='mt-[20px]'>
           <label className=' w-full mt-4'>
          <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
          <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter your email"
            value={FormData.email}
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full  p-[12px] '
          />
        </label>
           </div>

       

        <div className='w-full flex justify-between mt-[20px]'>

          
          <label className='  relative' >
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]' >Create Password<sup className='text-pink-200' >*</sup></p>
            <input
              required
              type={showpass ? "text" : "password"}
              name="password"
              placeholder="Enter password"
              value={FormData.password}
              onChange={changeHandler}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full  p-[12px] '
            />
            <span   className='absolute right-3 top-[34px] cursor-pointer'
            onClick={() => setpass((prev) => !prev)}>
              {showpass ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
            </span>
          </label>




          <label className=' relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-200'>*</sup></p>
            <input
              required
              type={showpass2 ? "text" : "password"}
              name="ConfirmPassword"
              placeholder="Confirm password"
              value={FormData.ConfirmPassword}
              onChange={changeHandler}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full  p-[12px] '
            />
            <span  className='absolute right-3 top-[34px] cursor-pointer'
            onClick={() => setpass2((prev) => !prev)}>
              {showpass2 ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'   /> : <AiOutlineEye fontSize={24} fill='#AFB2BF'/>}
            </span>
          </label>

        </div>

        <button className= 'bg-yellow-50  w-full rounded-[8px] font-medium text-richblack-000 px-[12px] py-[10px] mt-6' >Create Account</button>
      </form>
    </div>
  );
};

export default SignupForm;
