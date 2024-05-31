import React, { useEffect, useState } from "react";
import { useRef } from "react";
import heroImg from "../../assets/hero/chakra.png";
import li from "../../assets/hero/li.png";
import insta from "../../assets/hero/insta.png";
import confetti from 'canvas-confetti';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/hero.css';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {useTypewriter, Cursor, Typewriter} from "react-simple-typewriter";

function Hero() {

  const gmailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=cfa@iiti.ac.in&su=Requestto%20Collaborate%20with%20CFA%20Club%2CIIT%20Indore&body=Hi!%20I%20want%20to%20collaborate%20with%20CFA.%0D%0A%0D%0A(This%20mail%20was%20auto-generated)";

  const linkRef = useRef(null);
  // const [toast,setToast] = useState(false);


  const handleOnClick = (event) => {
    event.preventDefault(); // Prevent the default link click
    confetti({
      particleCount: 100,
      spread: 50,
      origin: { x:0.9, y:1 }
    });

    toast.success("Thank you for contacting us!", {
      position: "bottom-right",
      autoClose: 1000,
    });

    setTimeout(() => {
      linkRef.current.click(); 
    }, 1500);

  };

  const left ={
    hidden :{x:-500,opacity:0, },
    visible :{x:0 ,opacity:1 ,transition :{duration:0.6,delay:0.2},}
  }
  const top ={
    hidden :{y:-500,opacity:0, },
    visible :{y:0 ,opacity:1 ,transition :{duration:0.6}}
  }
  const right ={
    hidden :{x:500,opacity:0, },
    visible :{x:0 ,opacity:1 ,transition :{duration:0.6,delay:0.8},}
  }
  const smaller_top ={
    hidden :{y:-90,opacity:0, },
    visible :{y:0 ,opacity:1 ,transition :{duration:0.6}}
  }

  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);


  return (
    <>
      <div className="text-white border-red-700 border-0 font-serif flex bg-black overflow-x-hidden" >
        {/* outermost flex-item-1 */}
        <div className={`border-0 border-green-600 sm:w-[50%] w-[100%]`}>
          <motion.div id="heading" className="text-7xl my-[5vh] mx-[5vh] mb-[3vh]" 
          variants={smaller_top} animate={control} initial="hidden" whileInView="visible">
            CFA Club
            <div className="lg:block my-2 py-2 hidden font-bold text-5xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text"
            >
              <Typewriter
                words={['Consulting ...', 'Finance ...', 'Analytics ...',]}
                loop={0}
                cursor
                cursorStyle='|'
                cursorColor="rgb(37,99,235)"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1200}
              />
            </div>
           
          </motion.div>
          <motion.div className=" w-[70%] text-xl mx-[5vh]"
          variants={smaller_top} animate={control} initial="hidden" whileInView="visible">
            We provide a platform for students to make a seamless transition into the world of Management Consulting, Finance and Data Analytics.
          </motion.div>
          
          
          <motion.div className=" text-xl font-bold mx-[5vh] my-[5vh]" 
           variants={screen.width>=1000?left:right} animate={control} initial="hidden" whileInView="visible">
            FOLLOW US
            <div className="flex gap-3 my-4">
              <a
                target="_blank"
                href="https://www.linkedin.com/company/cfa-club-iit-indore/mycompany/"
                className="active:scale-105 transition-all"
              >
                <img src={li} className="w-8" />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/cfaclub_iiti?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="active:scale-105 transition-all"
              >
                <img src={insta} className="w-8" />
              </a>
            </div>
          </motion.div>


          <a 
              href={gmailLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              ref={linkRef} 
              style={{ display: 'none' }}
            >
              Hidden Link
            </a>


          <motion.div id="collaborate-with-us" className="flex flex-col mx-[5vh] md:mb-[2vh] mb-[3vh] text-md md:text-xl" variants={right} animate={control} initial="hidden" whileInView="visible">

           
            
            <ToastContainer/>
              <button onClick={handleOnClick} class="bg-white my-2 hover:translate-x-5 transition-all text-black 
              lg:w-[65%] px-4 box-border md:w-[80%] sm:w-[90%] w-[60%] py-2 rounded-full font-bold active:shadow-[1px_1px_40px_0px_#48bb78]">
                Collaborate with us!
              </button>
              <button onClick={handleOnClick} class="bg-white my-2 hover:translate-x-5 transition-all text-black 
              lg:w-[65%] px-4 box-border md:w-[80%] sm:w-[90%] w-[60%] py-2 rounded-full font-bold active:shadow-[1px_1px_40px_0px_#48bb78]">
                Collaborate with us!
              </button>
              <button onClick={handleOnClick} class="bg-white my-2 hover:translate-x-5 transition-all text-black 
              lg:w-[65%] px-4 box-border md:w-[80%] sm:w-[90%] w-[60%] py-2 rounded-full font-bold active:shadow-[1px_1px_40px_0px_#48bb78]">
                Collaborate with us!
              </button>
          </motion.div>
        </div>

        {/* outermost flex-item-2 */}
        {<div className="sm:w-[50%] sm:block hidden">
          <img width={"90%"} src={heroImg} className="" />
        </div>}
      </div>





      <div className=" bg-[#0d1616] text-white py-[5vh]" id='hero-section'>
        <motion.div className="m-[5vh] flex flex-col gap-5" 
        variants={screen.width>=1000?left:right} animate={control} initial="hidden" whileInView="visible">
          <div id="header" className="text-3xl font-bold">
            WHO WE ARE
          </div>
          <div id="info" className="text-xl font-thin">
            Consulting Finance & Analytics Club, IIT Indore, widely known as
            CFA, is a premier student group operating under the Sci-Techl Board
            of IIT Indore since 2019.
          </div>
          <div id="header" className="sm:text-3xl font-bold text-xl">
            AAAAAAAAAAAAAAA
          </div>
          <hr />
        </motion.div>

        <motion.div className="m-[5vh] flex flex-col gap-5" 
        variants={right} animate={control} initial="hidden" whileInView="visible">
          <div id="header" className="text-3xl font-bold">
            WHO WE ARE
          </div>
          <div id="info" className="text-xl font-thin">
            Consulting Finance & Analytics Club, IIT Indore, widely known as
            CFA, is a premier student group operating under the Sci-Techl Board
            of IIT Indore since 2019.
          </div>
          <div id="header" className="sm:text-3xl font-bold text-xl">
            AAAAAAAAAAAAAAA
          </div>
          <hr />
        </motion.div>

        <motion.div className="m-[5vh] flex flex-col gap-5" 
        variants={screen.width>=1000?left:right} animate={control} initial="hidden" whileInView="visible">
          <div id="header" className="text-3xl font-bold">
            WHO WE ARE
          </div>
          <div id="info" className="text-xl font-thin">
            Consulting Finance & Analytics Club, IIT Indore, widely known as
            CFA, is a premier student group operating under the Sci-Techl Board
            of IIT Indore since 2019.
          </div>
          <div id="header" className="sm:text-3xl font-bold text-xl">
            AAAAAAAAAAAAAAA
          </div>
          <hr />
        </motion.div>
      </div>
    </>
  );
}

export default Hero;
