import {VscGithubAlt} from 'react-icons/vsc'
import {TfiTwitter} from 'react-icons/tfi'
import {RxInstagramLogo} from 'react-icons/rx'
import { Link } from 'react-router-dom'
const Team4 = () => {
    return (  
        <div className='p-8 shadow-lg   relative bg-white rounded-xl'>
            
        <div className='flex flex-col items-center justify-center'>
        <div className='absolute -top-14'>
         <img
                       src="https://cdn.tuk.dev/assets/blond-man-happy-expression_1194-2873.jpg"
                       alt="#"
                       className="rounded-full w-[100px] h-[100px] md:w-[130px] md:h-[130px] object-cover shadow-md"
                     />
         </div>
         <div className= 'flex flex-wrap flex-col items-center justify-center mt-12'>
         <span className='font-bold text-2xl md:text-3xl'>Dean Jones</span> 
        <span className='text-lg'>Principal Software Engineer</span>
        <span className='text-sm'>An avid open-source developer who loves to be creative and inventive. I have 12 years of experience in the field. in a few of them establishing global benchmarks in product design and development.
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
 
export default Team4;