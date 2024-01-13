import { Link, NavLink } from 'react-router-dom';
import Empowering from './empowering';
import Heromig from '../img/heroimg2.jpg'
import Growth from './paymentplan/growthpackage';
import Standard from './paymentplan/standardpackage';
import Enterprice from './paymentplan/enterprice';
import award from '../img/award.svg'
import img from '../img/1 (1).png'
import Footer from './footer';
import { motion } from 'framer-motion';
const Home = () => {

  const firstvarience ={
    hidden:{
      x:-20,
      opacity:0
    },
    visible:{
      x:0,
      opacity:1,
      transition:{
        opacity: { duration: .6 },
        x:{type:"spring", stiffness:60,duration: .6 , delay:0.15,  ease:'easeIn'},
      
        
      }
    }
  }
  const secondvarence ={
    hidden:{
      x:-20,
      opacity:0
    },
    visible:{
      x:0,
      opacity:1,
      transition:{
        opacity: { duration: .6 },
        x:{type:"spring", stiffness:60,duration: .6 , delay:0.25,ease:'easeIn'},
        
      }
    }
  }
  const thirdvarience ={
    hidden:{
      x:-20,
      opacity:0
    },
    visible:{
      x:0,
      opacity:1,
      transition:{
        opacity: { duration: .6 },
        x:{type:"spring", stiffness:60,duration: .6 , delay:0.35, ease:'easeIn'},
      }
    }
  }
  const imgvarience= {
    hidden:{
      x:20,
      opacity:0
    },
    visible:{
      x:0,
      opacity:1,
      transition:{
        opacity: { duration: 1 },
        x:{duration:1, type:"spring", stiffness:60,ease:'easeIn', delay:.2,},
        
      }
    }
  }
  const firstcomponent ={
    hidden:{
      y:100,
      opacity:0
    },
    visible:{
      y:0,
      opacity:1,
      transition:{
        opacity: { duration: 1.5 },
        y:{type:"spring", stiffness:30, delay:0.15,duration: 1.5,  ease:'easeIn'},
      
        
      }
    }
  }
  const secondcomponent ={
    hidden:{
      y:100,
      opacity:0
    },
    visible:{
      y:0,
      opacity:1,
      transition:{
        opacity: { duration: 1.5 },
        y:{type:"spring", stiffness:30, delay:0.25,duration: 1.5,  ease:'easeIn'},
      
        
      }
    }
  }
  const thirdcomponent ={
    hidden:{
      y:100,
      opacity:0
    },
    visible:{
      y:0,
      opacity:1,
      transition:{
        opacity: { duration: 1.5 },
        y:{type:"spring", stiffness:30, delay:0.35,duration: 1.5,  ease:'easeIn'},
      
        
      }
    }
  }
  const firstempower ={
    hidden:{
      x:20,
      opacity:0
    },
    visible:{
      x:0,
      opacity:1,
      transition:{
        opacity: { duration: .6 },
        x:{type:"spring", stiffness:60, delay:0.4,duration: .6,  ease:'easeIn'},
      
        
      }
    }
  }
  const secondempower ={
    hidden:{
      x:-20,
      opacity:0
    },
    visible:{
      x:0,
      opacity:1,
      transition:{
        opacity: { duration: .6 },
        x:{type:"spring", stiffness:60, delay:0.4,duration: .6,  ease:'easeIn'},
      
        
      }
    }
  }
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "black"
    },
    visible: {
      pathLength: 1,
      fill: "black"
    }
  }
    return ( 
            <div>
            {/* this is the herosection */}
            <div className=" flex flex-col md:flex-row w-full p-4 pt-32 md:p-11 md:pt-40 bg-[#e0e0e0]  ">
               <ul className=" w-11/12 sm:w-11/12 md:w-2/4 ">
                <li className="tracking-wide text-xs md:text-base flex items-center flex-row gap-1  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 mb-3 to-emerald-600">   <div className="bg-black rounded-lg w-8 h-1 bg-gradient-to-r from-blue-500 to-emerald-300  " ></div>  Unlocking the Power of Digital Presence
                    </li>
                <motion.div variants={firstvarience} initial="hidden" animate="visible" className=" sm:text-3xl md:text-6xl text-2xl   font-semibold  ">Here you can </motion.div>
                <motion.li variants={secondvarence} initial="hidden" animate="visible" className=" sm:text-5xl md:text-8xl  text-4xl text-blue-400  font-bold mb-3 ">Level Up Your Business</motion.li>
                <motion.li variants={thirdvarience} initial="hidden" animate="visible"  className="text-md mb-6  md:w-3/4" >At LevelUp Agency, we craft digital experiences that captivate, inspire, and convert. Elevate your brand to new heights with our innovative web design, development, and digital marketing solutions.</motion.li>
                 <motion.li  variants={thirdvarience} initial="hidden" animate="visible" className=' text-sm mb-10'>      
                     <NavLink className= "  px-7 py-3 shadow-2xl rounded-se-lg rounded-tl-lg border-l-2 border-t-2 " to=''>Projects</NavLink>
                 </motion.li>
                 <li className='mb-6' >Some of our clients</li>
                 <li className=' gap-3 flex items-center flex-row '>
                    <span>
                        <img src='https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg' alt='partners'/>
                    </span>
                    <span>
                    <img src='https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg' alt='partners'/>
                    </span>
                    <span>
                    <img src='https://cdn.tailgrids.com/2.0/image/assets/images/brands/uideck.svg' alt='partners'/>
                    </span>
                 </li>
               </ul>
                 
                 <motion.div variants={imgvarience} initial="hidden" animate="visible" className=" md:p-10 pt-6  ">
                    <img className=' md:h-[28.123rem] md:w-[36.88rem] h-[19rem] w-[50rem] md:rounded-tl-[130px] rounded-tl-[60px] rounded-tr-lg rounded-br-lg rounded-bl-lg' src={Heromig} alt='heroimg'/>
                 </motion.div>
            </div>

            {/* this is the empowering section */}
            <section>
                <Empowering/>
            </section>
            
            
            {/* this is the price section */}
           <section className='p-6  bg-[#fffdfd]  md:p-11 '>
                 <header className='flex justify-center items-center'>
                    <span className='md:text-4xl text-2xl font-bold '>Monthly Payment Plan</span>
                 </header>
                 <div className='grid items-center justify-center mt-10 md:grid-cols-3  md:gap-6 gap-5'>
                   <motion.div variants={firstcomponent} initial="hidden" whileInView="visible" viewport={{once:true}} ><Growth/></motion.div> 
                   <motion.div variants={secondcomponent} initial="hidden" whileInView="visible" viewport={{once:true}} ><Standard/></motion.div>
                  <motion.div variants={thirdcomponent} initial="hidden" whileInView="visible" viewport={{once:true}} ><Enterprice/></motion.div>   
                 </div>
           </section>

           <section className='  bg-white  p-6 md:p-11'>
            <div className='grid gap-5 md:gap-8 bg-[#e0e0e0] shadow-xl rounded-xl p-5 md:p-8  md:grid-cols-2' >
                <motion.div variants={secondempower} viewport={{once:true}}  initial="hidden" whileInView="visible"   className='flex gap-5 flex-col'>
                    <span className='font-semibold font-mono text-base'>Find the perfect team to realise your business Goals!</span>
                    <span className='font-bold  text-3xl md:text-4xl'>Get started Today and let us Take Care of the Rest!</span>
                </motion.div>
                <motion.div variants={firstempower} viewport={{once:true}}  initial="hidden" whileInView="visible" className='flex flex-wrap items-center gap-3'>
                    <Link className='py-3 px-10 bg-white rounded-lg shadow-md'>
                      Talk to an Agent
                    </Link>
                    <Link className='py-3 px-10 bg-white rounded-lg  shadow-md'>
                      Get Started
                    </Link>
                </motion.div >
            </div>
           </section>
        
        {/* testimonial */}
           <section  className=' bg-white p-6 md:p-11'>
           <div className=' flex flex-wrap items-center justify-center flex-col ' >
              <header className='flex justify-center items-center'>
                <span className=' md:text-4xl text-2xl font-bold'>Testimonial</span>
              </header>
              <motion.div  initial={{y:-20,opacity:0}} whileInView={{y:0,opacity:1}} transition={{
                y:{type:'spring',stiffness:'60',delay:1,duration:1,},
                opacity:{duration:1}

              
              }} viewport={{once:true}} className='md:mt-5 mt-3 flex justify-center items-center'> <img className='w-[100px] h-[100px]' src={award} alt='award'/> </motion.div>

              <motion.div initial={{y:-20,opacity:0}} whileInView={{y:0,opacity:1}} transition={{
                y:{type:'spring',stiffness:'60', delay:0.2,  duration:1, },
                opacity:{duration:1}

              
              }} viewport={{once:true}} className='  md:w-[900px] '>
             <span className=' font-serif text-xl md:text-3xl'>"I am very happy with the outcome of the first 3 months working with LevelUp Agency, the support is absolutly amazing and the overall revenue has increased by 12%. Amazing!" </span> 
              </motion.div>

              <motion.div initial={{y:20,opacity:0}} whileInView={{y:0,opacity:1}} transition={{
                y:{type:'spring',stiffness:'60', delay:0.2,
                duration:1,},
                opacity:{duration:1}

              
              }} viewport={{once:true}} className=' gap-5 items-center mt-5 flex'>
                  <span>
                    <img className='w-[80px] h-[80px] rounded-lg ' src={img} alt='testimonial'/>
                  </span>
                <div className='flex  flex-col'>
                   <span className='font-bold text-lg'>Edward Jenkins</span> 
                   <span className='font-semibold'>Ecomerce Store Owner</span>
                    </div>
              </motion.div>
           </div>
           </section>

           {/* this is the footer */}
           <section className= " text-white p-4 md:p-11 bg-gray-900">
            <div>
              <Footer/>
            </div>
           </section>
        </div>
     );
}
 
export default Home;