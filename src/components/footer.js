import { Link } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti"
import {TfiTwitter} from 'react-icons/tfi'

const Footer = () => {
    return ( 
        <div>
           <div className="grid  items-center gap-10  md:grid-cols-2">
            <div>
                <ul>
                    <li className=" text-2xl font-bold">LevelUp Agency</li>
                    <li className="mt-5">Welcome to LevelUp Agency, where we transform raw information into actionable insights. With cutting-edge technology and a team of skilled analysts, we specialize in deciphering complex data sets to uncover valuable patterns and trends with which wee take your business to the Next Level.</li>
                    <li>
                    <div className="w-full flex py-5 ">
                        <Link className="mr-3">
                          <div>
                            <TiSocialFacebook
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </Link>
                        <Link className="mx-3">
                          <div>
                            <TiSocialInstagram
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </Link>
                        <Link className="mx-3">
                          <div>
                            <TfiTwitter
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </Link>
                      </div>

                    </li>
                </ul>
            </div>
            <div className="flex flex-wrap flex-col" >
                <span className=" text-2xl font-bold">Want tips & Tricks to optimize your Work flow?</span>
                <span className=" my-4 text-lg">Sign up to our newsletter and stay up to date.</span>
               <div className="flex flex-wrap gap-4"> 
                <input className="w-[230px] p-5 outline-none text-black rounded-md h-[35px]" type="text" placeholder="Enter your E-Mail"/>
                <Link className="bg-blue-300 rounded py-2 px-9">
                  Sign up
                </Link>
               
               </div>
            </div>
           </div>
         
         <div className=" mt-10  items-center md:gap-0 gap-5 grid-cols-2 grid md:grid-cols-4">
            <div >
                <ul className=" space-y-3 md:space-y-5">
                   <li className="font-semibold text-blue-300 text-xl"> Solutions </li>
                   <li className="font-semibold pointer cursor-pointer ">Analytics</li>
                   <li className="font-semibold pointer cursor-pointer ">Marketing</li>
                   <li className="font-semibold pointer cursor-pointer ">Commerce</li>
                   <li className="font-semibold pointer cursor-pointer ">Insights</li>
                 </ul>
            </div>
            <div >
                <ul className=" space-y-3 md:space-y-5">
                   <li className="font-semibold pointer  text-blue-300 text-xl">Support</li>
                   <li className="font-semibold pointer cursor-pointer ">Pricing</li>
                   <li className="font-semibold pointer cursor-pointer ">Documentation</li>
                   <li className="font-semibold pointer cursor-pointer ">Guides</li>
                   <li className="font-semibold pointer cursor-pointer ">API</li>
                 </ul>
            </div>
            <div >
                <ul className=" space-y-3 md:space-y-5">
                   <li className="font-semibold pointer  text-blue-300 text-xl"> Company </li>
                   <li className="font-semibold pointer cursor-pointer ">About</li>
                   <li className="font-semibold pointer cursor-pointer ">Blog</li>
                   <li className="font-semibold pointer cursor-pointer ">Careers</li>
                   <li className="font-semibold pointer cursor-pointer ">Press</li>
                 </ul>
            </div>
            <div >
                <ul className=" space-y-3 md:space-y-5">
                   <li className="font-semibold pointer text-blue-300 text-xl"> Legal </li>
                   <li className="font-semibold pointer cursor-pointer ">Policy</li>
                   <li className="font-semibold pointer cursor-pointer ">Terms</li>
                   <li className="font-semibold pointer cursor-pointer ">Conditions</li>
                   <li className="font-semibold pointer cursor-pointer ">legal</li>
                 </ul>
            </div>

         </div>
            
            <div className="flex text-sm items-center mt-10 pt-5 text-gray-500 border-t justify-center">
                <span>All Rights Reserved 2023 - LevelUp Agency</span>
            </div>
        </div>
     );
}
 
export default Footer;