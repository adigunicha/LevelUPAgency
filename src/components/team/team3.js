import {VscGithubAlt} from 'react-icons/vsc'
import {TfiTwitter} from 'react-icons/tfi'
import {RxInstagramLogo} from 'react-icons/rx'
import { Link } from 'react-router-dom'
const Team3 = () => {
    return ( 
        <div className='p-8 shadow-lg  relative bg-white rounded-xl'>
            
        <div className='flex flex-col items-center justify-center'>
        <div className='absolute -top-14'>
         <img
                       src="https://cdn.tuk.dev/assets/boy-smiling_23-2148155640.jpg"
                       alt="#"
                       className="rounded-full w-[100px] h-[100px] md:w-[130px] md:h-[130px] object-cover shadow-md"
                     />
         </div>
         <div className= 'flex flex-wrap flex-col items-center justify-center mt-12'>
         <span className='font-bold text-2xl md:text-3xl'>Adigun Michael</span> 
        <span className='text-lg'>Manager Development</span>
        <span className='text-sm'>Our services encompass the assessment and repair of property damage caused by water, fire, smoke, or mold. We can also be a part of the restoration.
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
 
export default Team3;