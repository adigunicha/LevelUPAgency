import {VscGithubAlt} from 'react-icons/vsc'
import {TfiTwitter} from 'react-icons/tfi'
import {RxInstagramLogo} from 'react-icons/rx'
import { Link } from 'react-router-dom'
const Team5 = () => {
    return ( 
        <div className='p-8 shadow-lg   relative bg-white rounded-xl'>
            
        <div className='flex flex-col items-center justify-center'>
        <div className='absolute -top-14'>
         <img
                        src="https://cdn.tuk.dev/assets/photo-1570211776045-af3a51026f4a.jfif"
                       alt="#"
                       className="rounded-full w-[100px] h-[100px] md:w-[130px] md:h-[130px] object-cover shadow-md"
                     />
         </div>
         <div className= 'flex flex-wrap flex-col items-center justify-center mt-12'>
         <span className='font-bold text-2xl md:text-3xl'>Rachel Adams</span> 
        <span className='text-lg'>Product Design Head</span>
        <span className='text-sm'>Product designer with interests in immersive computing and XR, political ventures, and emerging technologies. Able to take ideas and give them a life.
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
 
export default Team5;