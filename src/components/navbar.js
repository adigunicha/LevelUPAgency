import { NavLink,Link } from "react-router-dom";
import logo from '../img/agencylogo.png'
import { motion } from "framer-motion";
import { RiMenu4Fill } from "react-icons/ri";
import {useState,useEffect} from 'react'

const Navbar = () => {
   const[open,setopen] = useState(false)
   console.log(open)
   useEffect(() => {
    const handleResize = () => {
      // Check window width and close the menu on larger screens
      if (window.innerWidth > 767 && open) {
        setopen(false);
      }
    };

    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [open]);
  
   
 
    return ( 
        <div className=" overflow-x-hidden font-poppins">
          <nav className="bg-gray-900   text-white fixed p-4   md:p-7  sm:h-auto sm:w-full w-screen z-20 border-b border-gray-400">
            <div className="flex flex-col gap-5 md:gap-0  md:flex-row flex-wrap md:items-center justify-between">
              <NavLink to='/' >
              <div className="flex flex-wrap flex-row items-center">
                <motion.img   whileHover={{ scale: 1.2, rotate: 90 }}
                 whileTap={{
                 scale: 0.8,
                 rotate: -90,
                     borderRadius: "100%"
                    }} 
                    transition={{duration:.5}}
                    className="logo w-12 h-12" src={logo} alt="logo"/>
                <span className="font-bold text-xl md:text-2xl ">LevelUp Agency</span>
                </div>
              </NavLink >
             
              <div className="flex lg:hidden ">
                   <NavLink onClick={()=>{setopen(!open)}} className='absolute top-8  right-5'><RiMenu4Fill size={20} /></NavLink>
                   </div>
                 
                 {/* desktop nav */}
             <div className={ ` hidden sm:h-3 lg:flex  pl-3 md:pl-0 space-y-6 md:space-y-0 flex-col md:flex-row md:space-x-6 font-semibold text-xl md:items-center`}>
                 <NavLink className="hover:text-blue-400 ease-in-out duration-150 " to='/'>Home</NavLink>
                 <NavLink className="hover:text-blue-400 ease-in-out duration-150  "  to='/about'>About</NavLink>
                 <NavLink className="hover:text-blue-400 ease-in-out duration-150  "  to='/service'>Services</NavLink>
                 <NavLink className="hover:text-blue-400 ease-in-out duration-150 " to='/contact'>Contact</NavLink>
                </div> 

               <div className=" lg:flex hidden gap-2">
                <NavLink className="p-3 shadow-2xl bg-sky-600 rounded-lg " to=''>Get started</NavLink>
                 <NavLink className="p-3 shadow-2xl rounded-se-lg rounded-tl-lg border-l-2 border-t-2 " to=''>Login</NavLink>
                </div> 

                
                </div>

                  {/* mobile nav */}
                 <div
                   className={`${open ? "-right-0" :" -right-[100vw] "}  z-auto p-0 h-[16rem] w-[100vw] bg-gray-900 transition-all ease-linear duration-300 absolute `}>
          <ul>
            <li className="text-white hover:text-blue-400 font-semibold pl-4 cursor-pointer pb-4 pt-6">
              <Link onClick={()=>{ setopen(!open) }} to="/">Home</Link>
            </li>
            <li className="text-white hover:text-blue-400 font-semibold pl-4 cursor-pointer pb-4">
              <Link onClick={()=>{ setopen(!open) }}  to="/about">About</Link>
            </li>
            <li className="text-white hover:text-blue-400 font-semibold pl-4 cursor-pointer pb-4">
              <Link onClick={()=>{ setopen(!open) }}  to="/service">Services</Link>
            </li>
            <li className="text-white hover:text-blue-400 font-semibold pl-4 cursor-pointer pb-4">
              <Link onClick={()=>{ setopen(!open) }}  to="/contact">Contact</Link>
            </li>
          </ul>
          {/* profile section */}
          <div className="flex pl-4 gap-8 flex-row">
          <NavLink onClick={()=>{ setopen(!open) }}  className="p-3 shadow-2xl bg-sky-600 rounded-lg " to=''>Get started</NavLink>
          <NavLink onClick={()=>{ setopen(!open) }}  className="p-3 shadow-2xl rounded-se-lg rounded-tl-lg border-l-2 border-t-2 " to=''>Login</NavLink>
          </div>
          </div>

          </nav>
        </div>
     );
}
 
export default Navbar;