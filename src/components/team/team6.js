import img from '../../img/fb1.jpg'
import {VscGithubAlt} from 'react-icons/vsc'
import {TfiTwitter} from 'react-icons/tfi'
import {RxInstagramLogo} from 'react-icons/rx'
import { Link } from 'react-router-dom'
const Team6 = () => {
    return (
        <div className='p-8 shadow-lg  relative bg-white rounded-xl'>
            
        <div className='flex flex-col items-center justify-center'>
        <div className='absolute -top-14'>
         <img
                       src={img}
                       alt="#"
                       className="rounded-full w-[100px] h-[100px] md:w-[130px] md:h-[130px] object-cover shadow-md"
                     />
         </div>
         <div className= 'flex flex-wrap flex-col items-center justify-center mt-12'>
         <span className='font-bold text-2xl md:text-3xl'>Charles Keith</span> 
        <span className='text-lg'>UX Designer</span>
        <span className='text-sm'>A UX designer is the voice of the customer. Our job is to look beyond the business goals. We don't just experience user interface but also questions it.
        </span>
         </div>
        </div>
         
        <div className="w-full flex justify-center pt-5 ">
                        <Link className="mx-5">
                          <div>
                            <VscGithubAlt
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </Link>
                        <Link className="mx-5">
                          <div>
                            <TfiTwitter
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </Link>
                        <Link className="mx-5">
                          <div>
                            <RxInstagramLogo
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </Link>
                      </div>

     </div>
      );
}
 
export default Team6;