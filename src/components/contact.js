
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import Footer from "./footer";

const Contact = () => {
    return ( 
        <div>
           <div className="  w-full p-4 pt-32 md:p-11 md:pt-40  bg-[#faf7f7] ">
           <div className="tracking-wide text-xs md:text-base flex items-center flex-row gap-1  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 mb-3 to-emerald-600">   <div className="bg-black rounded-lg w-8 h-1 bg-gradient-to-r from-blue-500 to-emerald-300  " ></div>  Unlocking the Power of Digital Presence
                    </div>

                  {/* contact us div */}
                  <div className="px-8 py-20 relative shadow-lg flex items-center flex-col gap-10  bg-white rounded-xl">
                     <span className="md:text-5xl text-3xl">Contact Us</span>
                     <input className="p-5 md:w-[400px] h-[20px] w-[220px] border-b-2 border-black outline-none " type="text" placeholder="Enter Your Name / Company Name"/>
                     <input className="p-5 md:w-[400px] h-[20px] w-[220px] border-b-2 border-black outline-none "  type="email" placeholder="Enter a Valid Email"/>
                     <input className="p-5 md:w-[400px] h-[100px] w-[220px] border-b-2 border-black outline-none "  type="text" placeholder="Enter Your Message"/>
                     <button className="border-2 font-semibold transition duration-200 ease-in border-black hover:bg-black hover:text-white py-2 px-10">
                        Submit
                     </button>

                     <div className=" gap-14 text-white font-semibold bg-amber-900 absolute grid md:grid-cols-3 md:-bottom-48 -bottom-[638px] z-10 p-8" >
                        <div className="flex gap-5 flex-col">
                        <IoIosCall  size={25}  />
                          <span>CALL US</span>
                          <span>1 (234) 567-891</span>
                          <span>1 (234) 987-654</span>
                        

                        </div>
                        <div className="flex gap-5 flex-col">
                        <FaLocationDot  size={25}  />
                          <span>LOCATION</span>
                          <span>121 Rock Sreet, 21 Avenue,</span>
                          <span>New York, NY 92103-9000</span>
                        

                        </div>
                        <div className="flex gap-5 flex-col">
                        <MdAccessTimeFilled  size={25}  />
                          <span>CHOURS</span>
                          
 
                          <span>Mon – Fri …… 9 am – 8 pm,</span>
                          <span>1Sat …… 11 am – 8 pm</span>
                        

                        </div>
                     </div>
                  </div>

            </div>
            {/* this is the footer */}
           <section className= " mt-[610px] md:mt-32 text-white p-4 md:p-11 bg-gray-900">
            <div>
              <Footer/>
            </div>
           </section>
        </div>
     );
}
 
export default Contact;