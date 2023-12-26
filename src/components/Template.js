import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from './SignupForm'
import LoginFrom from './LoginFrom'
import {FcGoogle} from  "react-icons/fc"
const Template = ( {title,desc1,desc2,image,formtype,setLogged}) => {
  return (
    <div className='flex w-11/12 max-w-[1160px] py-12 justify-between mx-auto' >

      <div className='w-11/12 max-w-[450px]' >
        <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]' >{title}</h1>
         

        <p className='text=[1.125rem leading=1.625rem] mt-4'>
            <span className='text-richblack-100'>{desc1}</span>
            <br></br>
            <span className='text-blue-100 italic'>{desc2}</span>
        </p>



        {formtype ==="signup" ? (
  <SignupForm setLogged={setLogged} />
) 
: 
(
  <LoginFrom setLogged={setLogged} />
)}

       <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto items-center my-4 gap-x-12'>
            

           <div className=' w-11/12 h-[1px] bg-richblack-700 ' ></div>
            <p className='text-richblack-700 font-medium leading[1.375]'>OR</p>
            <div className='w-full h-[1px] bg-richblack-700 '></div>
            

        </div>

        <button className='w-full flex justify-center items-center rounded-[8px] border border-richblack-700
        font-medium px-[12px] py-[8px] text-richblack-100 gap-x-2 mt-6'>
            <FcGoogle/>
            <p>Sign Up with Google</p>
        </button>

        </div>


        <div className="relative w-11/12 max-w-[450px]">

            <img src={frameImage} 
            alt="Pattern" 
            width={558} height={504}
             loading="lazy">

             </img>


            <img  src={image} 
            alt="Student" 
            width={558} height={490}
             loading="lazy"
             className="absolute -top-4 right-4"
         
            ></img>

          </div>

      
    </div>
  )
}

export default Template
