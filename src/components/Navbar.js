import React from 'react'
import logo from "../assets/Logo.svg"
// for using link in React
import {Link} from "react-router-dom"
import {toast} from "react-hot-toast"
const Navbar = (props) => {

    const isLogged=props.isLogged
    const setLogged=props.setLogged

  return (

    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

      <Link to="/Dashboard">
        <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
      </Link>


      <nav>
        <ul className='text-richblack-100 flex gap-x-6'>
            <li>
              <Link to="/">HOME</Link>  
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
               <Link to="/">Contact</Link>
            </li>
        </ul>
      </nav>
       

      <div className='flex items-center gap-x-4'>
        

        {!isLogged &&
            <Link to="/login">
                <button className='bg-richblack-800 text-richblack-100  py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                    Login
                </button>
            </Link>
        }


       {!isLogged &&
            <Link to="/signup">
                <button  className='bg-richblack-800 text-richblack-100  py-[8px] px-[12px] rounded-[8px] border border-richblack-700' onClick={()=>{
                  
                   }}>
                   Sign Up
                </button>
            </Link>
        }

        { isLogged &&
            <Link to="/">
                <button className='bg-richblack-800 text-richblack-100  py-[8px] px-[12px] rounded-[8px] border border-richblack-700'  onClick={()=>{
                    setLogged(false);
                      toast.success("Logged Out");


                }}>
                   Log Out
                </button>
            </Link>
            }
       
            
            {
            isLogged &&
            <Link to="/dashboard">
                <button  className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700' >
                  Dashboard
                </button>
            </Link>
            }

      </div>

    </div>
  )
}

export default Navbar
