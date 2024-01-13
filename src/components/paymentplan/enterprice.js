import { NavLink } from 'react-router-dom';
import img from '../../img/3.png'
import Checked from '../../img/checkbox-checked-16-filled.svg'
const Enterprice = () => {
  
    return ( 
        <div className=" rounded-xl shadow-2xl w-auto p-5 bg-white ">
            <header className='flex gap-3 justify-center flex-col items-center'>
                <span>
                    <img className=' w-20 h-20' src={img} alt='img'/>
                </span>
                <span className=' text-xl font-semibold md:text-2xl'>Enterprice Package</span>
                <span className=' text-2xl font-bold md:text-3xl'>$350</span>
            </header>
            <div className='flex flex-col justify-start mt-4 md:mt-5 items-center'>
                <ul className='md:space-y-5  space-y-3  '>
                    <li className='border-b-2 flex items-center  border-gray-100 rounded-sm pb-5'> 
                    <span className='w-56  md:text-xl '>Advanced Algorithmic Solutions </span> 
                        <span><img classNaopacity-5me='' src={Checked} alt='checked'/></span>
                     </li>
                     
                     <li className='border-b-2 flex items-center   border-gray-100 rounded-sm pb-5'>  
                      <span className='w-56   md:text-xl  '>Trained Personnel Support</span> 
                      <span><img className='' src={Checked} alt='checked'/></span>
                      
                      </li>
                     
                     <li className='border-b-2 flex items-center border-gray-100 rounded-sm pb-5'>
                       <span className='w-56   md:text-xl  '>Innovative Technology Integration</span> 
                       <span><img className='' src={Checked} alt='checked'/></span>
                       </li>
                    
                     <li className='border-b-2 flex items-center border-gray-100 rounded-sm pb-5'>
                        <span className='w-56   md:text-xl  '> Powerful Analytics Capabilities</span>
                        <span><img className='' src={Checked} alt='checked'/></span>
                     </li>
                     
                     <li className='border-b-2 flex items-center border-gray-100 rounded-sm pb-5'>
                        <span className='w-56   md:text-xl  '> Personalized Solutions</span>
                        <span><img className='' src={Checked} alt='checked'/></span>
                        </li>
                     
                     <li className='border-b-2 flex items-center border-gray-100 rounded-sm pb-5'>
                       <span className='w-56   md:text-xl  '> Continuous Innovation</span>
                       <span><img className='' src={Checked} alt='checked'/></span>
                        </li>
 
                    </ul>

                    <NavLink className="mt-5 font-semibold shadow-xl px-9 py-5" to="">
                        Buy Now
                    </NavLink>
            </div>
        </div>
     );
}
 
export default Enterprice;