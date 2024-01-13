import f1 from '../img/f1 (1).png'
import f2 from '../img/f2.png'
import f3 from '../img/f3.png'
import f4 from '../img/f4.png'
import f5 from '../img/f5.png'
import f6 from '../img/f6.png'
import fb1 from '../img/fb1.jpg'
import fb2 from '../img/fb2.jpg'
import { motion } from 'framer-motion'

const Empowering = () => {
    const firstvarience ={
        hidden:{
          x:20,
          opacity:0
        },
        visible:{
          x:0,
          opacity:1,
          transition:{
            opacity: { duration: 1 },
            x:{type:"spring", stiffness:60, delay:.5,duration: 1,  ease:'easeIn'},
          
            
          }
        }
      }
      const secondvarience ={
        hidden:{
          x:-20,
          opacity:0
        },
        visible:{
          x:0,
          opacity:1,
          transition:{
            opacity: { duration: 1 },
            x:{type:"spring", stiffness:60, delay:.5,duration: 1,  ease:'easeIn'},
          
            
          }
        }
      }
    return (  
        <div className="w-full p-6   md:p-11 ">
            <div className="headers  flex-wrap gap-2 flex justify-center flex-col items-center">
               <h1 className="md:text-4xl  text-2xl font-bold">Empowering Businesses</h1>
            </div>
            <div className=" flex flex-col md:flex-row pt-3 md:pt-10 ">
               <div className=" w-11/12 md:w-2/4">
                <ul className="">
                    <li className="text-2xl md:text-3xl font-bold">Innovation Begins Here</li>
                    <li>Unleash business growth with advanced technology solutions, optimizing operations, integrating innovative technologies, and receiving personalized support.</li>

                    <li className="flex mt-6 md:mt-10 flex-col" >
                        <div className='flex items-center gap-3'>
                            <div>
                                <img className='w-12 h-12' src={f1} alt="bulletens"/>
                            </div>
                            <div className=' flex-col flex basis-5/6'>
                            <span className=" text-xl">Advanced Algorithmic Solutions</span>
                      <span>
                      Our advanced algorithms optimize your operations, boosting efficiency and profitability. Make data-driven decisions with actionable insights.
                      </span>
                            </div>
                        
                        </div>
                     
                    </li>
                    <li className="flex mt-6 md:mt-10 flex-col" >
                        <div className='flex items-center gap-3'>
                            <div>
                                <img className='w-12 h-12' src={f2} alt="bulletens"/>
                            </div>
                            <div className=' flex-col flex basis-5/6'>
                            <span className=" text-xl">Innovative Technology Integrations</span>
                      <span>
                      Seamlessly integrate cutting-edge technologies like AI, IoT, and cloud computing. Automate tasks, improve communication, and unlock growth potential..
                      </span>
                            </div>
                        
                        </div>
                     
                    </li>
                    <li className="flex mt-6 md:mt-10 flex-col" >
                        <div className='flex items-center gap-3'>
                            <div>
                                <img className='w-12 h-12' src={f3} alt="bulletens"/>
                            </div>
                            <div className=' flex-col flex basis-5/6'>
                            <span className=" text-xl">Trained Personnel Support</span>
                      <span>
                      Our trained experts ensure smooth implementation and ongoing guidance. Leverage our software effectively with personalized assistance.
                      </span>
                            </div>
                        
                        </div>
                     
                    </li>
                </ul>
               </div>

               <div className=" md:p-12 pt-6  ">
                    <motion.img variants={firstvarience} initial="hidden" viewport={{once:true}} whileInView="visible"  className=' md:h-[25.123rem] md:w-[36.88rem] h-[17rem] w-[46rem] md:rounded-tl-[40px] rounded-tl-[10px] rounded-tr-lg rounded-br-lg rounded-bl-lg' src={fb1} alt='heroimg'/>
                 </div>

            </div>

            {/* the second part */}
            <div className=" flex flex-col-reverse md:flex-row pt-3 md:pt-10 ">
            <div className=" md:p-12 pt-6  ">
                    <motion.img  variants={secondvarience} initial="hidden" viewport={{once:true}}  whileInView="visible" className=' md:h-[25.123rem] md:w-[36.88rem] h-[17rem] w-[46rem] md:rounded-tl-[40px] rounded-tl-[10px] rounded-tr-lg rounded-br-lg rounded-bl-lg' src={fb2} alt='heroimg'/>
                 </div>
               <div className=" w-11/12 md:w-2/4">
                <ul className="pt-3">
                    <li className="text-2xl md:text-3xl font-bold">Data-Driven Decisions, Personalized Solutions</li>
                    <li>Data-driven decisions. Personalized solutions. Continuous innovation. Propel your business forward with our powerful analytics, tailored to your needs, and future-proofed by our commitment to innovation.</li>

                    <li className="flex mt-6 md:mt-10 flex-col" >
                        <div className='flex items-center gap-3'>
                            <div>
                                <img className='w-12 h-12' src={f4} alt="bulletens"/>
                            </div>
                            <div className=' flex-col flex basis-5/6'>
                            <span className=" text-xl">Powerful Analytics Capabilities</span>
                      <span>
                      Extract valuable insights from your data with comprehensive visualizations. Monitor KPIs, track trends, and identify areas for improvement.
                      </span>
                            </div>
                        
                        </div>
                     
                    </li>
                    <li className="flex mt-6 md:mt-10 flex-col" >
                        <div className='flex items-center gap-3'>
                            <div>
                                <img className='w-12 h-12' src={f5} alt="bulletens"/>
                            </div>
                            <div className=' flex-col flex basis-5/6'>
                            <span className=" text-xl">Continuous Innovation and Upgrades</span>
                      <span>
                      Stay ahead with the latest features and functionalities. Adapt to market dynamics and gain a competitive edge through continuous innovation.
                      </span>
                            </div>
                        
                        </div>
                     
                    </li>
                    <li className="flex mt-6 md:mt-10 flex-col" >
                        <div className='flex items-center gap-3'>
                            <div>
                                <img className='w-12 h-12' src={f6} alt="bulletens"/>
                            </div>
                            <div className=' flex-col flex basis-5/6'>
                            <span className=" text-xl">Personalized Solutions</span>
                      <span>
                      Tailored software solutions to address your unique needs. Achieve sustainable growth by aligning with your business objectives.
                      </span>
                            </div>
                        
                        </div>
                     
                    </li>
                 
                </ul>
               </div>

            </div>


        </div>
    );
}
 
export default Empowering;