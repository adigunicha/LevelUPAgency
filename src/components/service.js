import img1 from '../img/1.svg'
import img2 from '../img/2.svg'
import img3 from '../img/3.svg'
import img4 from '../img/4.svg'
import Empowering from './empowering'
import Footer from './footer'
const Service = () => {
    return ( 
        <div>
            <div className="  w-full p-4 pt-32 md:p-11 md:pt-40  bg-white ">
            <div className="tracking-wide text-xs md:text-base flex items-center flex-row gap-1  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 mb-3 to-emerald-600">   <div className="bg-black rounded-lg w-8 h-1 bg-gradient-to-r from-blue-500 to-emerald-300  " ></div>  Unlocking the Power of Digital Presence
                    </div>
             
                 <header>
                 <span className=" text-3xl  text-blue-400 md:text-5xl">
                 Our services will help you Grow!
                </span>
                 </header>
           
                <div className="flex flex-wrap  mt-10 flex-col gap-5 justify-center items-center">
                    <span className="text-sm text-gray-300">START TODAY AND</span>
                    <div className="md:w-[500px] font-semibold md:p-0 p-5 ">
                    <span className="md:text-4xl text-3xl ">Level UP your business & Maximise your Company's Income & Productivity</span>
                    </div>
                  
                </div>

                <div className="grid mt-10 md:grid-cols-2 gap-8">
                <div className='flex items-center gap-3'>
                            <div>
                                <img className='w-12 h-12' src={img1} alt="bulletens"/>
                            </div>
                            <div className=' flex-col flex basis-5/6'>
                            <span className=" font-bold text-xl">Always have a Clear Overview</span>
                      <span>
                      Always have a clear overview of what's going on with your investments and how well everything is performing. We Deliver a detailed performance report on Everything Important!
                      </span>
                            </div>
                        
                        </div>
                        <div className='flex  items-center gap-3'>
                            <div>
                                <img className='w-12 h-12' src={img2} alt="bulletens"/>
                            </div>
                            <div className=' flex-col flex basis-5/6'>
                            <span className=" font-bold text-xl">Always catch a Rising-Trend</span>
                      <span>
                      Never miss out on a rising trend that is hot in your industry and that is performing well in businesses and companies similar to yours. Sometimes this gets hard with the evermore-increasing workload and thats why wee use our Trained Professionals to help you always stay on top of your game!
                      </span>
                            </div>
                        
                        </div>
                        <div className='flex items-center gap-3'>
                            <div>
                                <img className='w-12 h-12' src={img3} alt="bulletens"/>
                            </div>
                            <div className=' flex-col flex basis-5/6'>
                            <span className=" font-bold text-xl">Hit your Monthly mark! Every Month!</span>
                      <span>
                      We know how important hitting your monthly marks is, this determines then the flow of work and the overall performance of the company. This is why we use Advanced algorithms and state of the art Technologies to help you achieve this!
                      </span>
                            </div>
                        
                        </div>
                        <div className='flex items-center gap-3'>
                            <div>
                                <img className='w-12 h-12' src={img4} alt="bulletens"/>
                            </div>
                            <div className=' flex-col flex basis-5/6'>
                            <span className=" font-bold text-xl">Personalized and always on Track!</span>
                      <span>
                      Our solutions are always personalized and tailored depending on your needs. This is why all of our clients trust us so much and 70% stay with us for as long as 5+ Years.
                      </span>
                            </div>
                        
                        </div>
                </div>

                <div>
                    <Empowering/>
                </div>

                {/* footer */}
              


                </div>

                <section className= " text-white p-4 md:p-11 bg-gray-900">
            <div>
              <Footer/>
            </div>
           </section>
        </div>
     );
}
 
export default Service;