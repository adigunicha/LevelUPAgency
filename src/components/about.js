import team1 from '../img/team1.png'
import Typewriter from 'typewriter-effect';
import Teamone from './team/team1';
import Team2 from './team/team2';
import Team3 from './team/team3';
import Team4 from './team/team4';
import Team5 from './team/team5';
import Team6 from './team/team6';
import Footer from './footer';
import { motion } from 'framer-motion';
const About = () => {
    return ( 
        <div>
        <div className="  w-full p-4 pt-32 md:p-11 md:pt-40  bg-white ">
                 <div className="tracking-wide text-xs md:text-base flex items-center flex-row gap-1  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 mb-3 to-emerald-600">   <div className="bg-black rounded-lg w-8 h-1 bg-gradient-to-r from-blue-500 to-emerald-300  " ></div>  Unlocking the Power of Digital Presence
                    </div>

              <div>
                <span className=" text-3xl  text-blue-400 md:text-5xl">
                    Who are we and why and we so good ?
                </span>
                 
                 <div className='mt-10 gap-5 items-center grid md:grid-cols-2'>
                  <div> <motion.img initial={{x:-20,opacity:0}} whileInView={{x:0,opacity:1}}
                   transition={{
                          type:'spring',stiffness:'60', delay:0.2,  duration:1, 
                          opacity:{duration:1}}}
                          viewport={{once:true}}
                     className=' shadow-xl md:h-[21.123rem] md:w-[30.88rem] h-[17rem] w-[46rem] md:rounded-tl-[40px] rounded-tl-[10px] rounded-tr-lg rounded-br-lg rounded-bl-lg' src={team1} alt='team'/>
                   </div>
                    <motion.div
                    initial={{x:20,opacity:0}} whileInView={{x:0,opacity:1}}
                    transition={{
                           type:'spring',stiffness:'60', delay:0.2,  duration:1, 
                           opacity:{duration:1}}}
                           viewport={{once:true}}
                           >
                        <span className=" font-serif font-semibold  text-3xl  md:text-4xl">
                        <Typewriter
                          options={{
                           strings: [`"We are Inspired by Results and driven by Data"`,`"We specialize in creating tailored strategies that align with your business goals"`,`"Maximize your online reach with our comprehensive digital marketing strategies"`,`"Journey with us let's Transform Your Digital Landscape!"`],
                           autoStart: true,
                            loop: true,
                            deleteSpeed:65,
                            delay:95,
                               }}  />
                               </span>  
                        
                    </motion.div>

                 </div>

              </div>
              </div>


                {/* our team */}
              <div className=' p-4 md:p-11 bg-[#faf7f7]  mt-10'>
                 
              <motion.div
              initial={{y:20,opacity:0}} whileInView={{y:0,opacity:1}}
              transition={{
                     type:'spring',stiffness:'60', delay:0.2,  duration:1, 
                     opacity:{duration:1}}}
                     viewport={{once:true}}
               className='flex flex-wrap flex-row gap-5 '>
                  <span className='text-3xl'>About Us</span>
                  <span className='font-serif'>
                 Welcome to our site, where we specialize in empowering businesses to unlock their true potential and achieve unparalleled growth. With our expertise in advanced technology solutions, we provide the tools and knowledge necessary for organizations to make data-driven decisions, optimize operations, and drive innovation. Our personalized approach ensures that each business receives tailored solutions designed to address their specific objectives and challenges.

By leveraging the latest advancements and continuous innovation, we pave the way for businesses to thrive in today's ever-evolving landscape. At our site, we believe that success lies in harnessing the power of technology and data to drive meaningful outcomes. Whether you're a small startup or a large enterprise, our comprehensive range of services and solutions is designed to meet your unique needs.

From advanced algorithms and powerful analytics capabilities to seamless technology integration and ongoing support from our trained personnel, we are dedicated to helping businesses grow and succeed. Join us on this transformative journey, and together, we will propel your business.
                  </span>
                </motion.div>



                <header className='flex mt-14 justify-center items-center'>
                    <span className=' text-gray-400 text-sm'>OUR TEAM</span>
                </header>

                 <div className=' grid md:grid-cols-2 lg:grid-cols-3 md:gap-20 lg:gap-20 gap-8 mt-24 '>
                  <motion.div  initial={{y:20,opacity:0}} whileInView={{y:0,opacity:1}}
              transition={{
                     type:'spring',stiffness:'60', delay:0.2,  duration:1, 
                     opacity:{duration:1}}}
                     viewport={{once:true}}> <Teamone/></motion.div>


                   <motion.div
                   initial={{y:20,opacity:0}} whileInView={{y:0,opacity:1}}
                   transition={{
                          type:'spring',stiffness:'60', delay:0.3,  duration:1, 
                          opacity:{duration:1}}}
                          viewport={{once:true}}><Team2/> </motion.div>

                  <motion.div
                  initial={{y:20,opacity:0}} whileInView={{y:0,opacity:1}}
                  transition={{
                         type:'spring',stiffness:'60', delay:0.4,  duration:1, 
                         opacity:{duration:1}}}
                         viewport={{once:true}}
                  > <Team3/> </motion.div>

                  <motion.div
                  initial={{y:20,opacity:0}} whileInView={{y:0,opacity:1}}
                  transition={{
                         type:'spring',stiffness:'60', delay:0.5,  duration:1, 
                         opacity:{duration:1}}}
                         viewport={{once:true}}><Team4/></motion.div>

                  <motion.div initial={{y:20,opacity:0}} whileInView={{y:0,opacity:1}}
              transition={{
                     type:'spring',stiffness:'60', delay:0.6,  duration:1, 
                     opacity:{duration:1}}}
                     viewport={{once:true}}> <Team5/></motion.div>

                  <motion.div initial={{y:20,opacity:0}} whileInView={{y:0,opacity:1}}
              transition={{
                     type:'spring',stiffness:'60', delay:0.7,  duration:1, 
                     opacity:{duration:1}}}
                     viewport={{once:true}}>  <Team6/></motion.div>
                 </div>

              </div>

{/* 
              the map */}
              <div className=' pt-10 flex flex-col items-center justify-center'>
                <span className='text-4xl'>Where to find us</span>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63422.427653657905!2d3.1867874625386547!3d6.53409407530169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8505633db645%3A0xedea29a14b15fe43!2sIgando%2FEgan%2C%20Lagos!5e0!3m2!1sen!2sng!4v1705005753089!5m2!1sen!2sng" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className=' rounded-lg md:w-[100vw] md:h-[450px] w-[100vw] h-[250px] p-10  ' ></iframe>
              </div>

          {/* footer */}
            <section className= " text-white p-4 md:p-11 bg-gray-900">
            <div>
              <Footer/>
            </div>
            </section>

        </div>
     );
}
 
export default About;