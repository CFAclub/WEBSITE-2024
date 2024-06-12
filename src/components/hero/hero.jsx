import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
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
import network from"../../assets/hero/network.png";
import hns from"../../assets/hero/hanson.png";
import path from"../../assets/hero/path.png";

function Hero() {

  const gmailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=cfa@iiti.ac.in&su=Requestto%20Collaborate%20with%20CFA%20Club%2CIIT%20Indore&body=Hi!%20I%20want%20to%20collaborate%20with%20CFA.%0D%0A%0D%0A(This%20mail%20was%20auto-generated)";

  const linkRef = useRef(null);
  // const [toast,setToast] = useState(false);


  const handleOnCollaborate = (event) => {
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
              
              <Link to="/projects">
                <button class="bg-white my-2 hover:translate-x-5 transition-all text-black 
                lg:w-[65%] px-4 box-border md:w-[80%] sm:w-[90%] w-[60%] py-2 rounded-full font-bold active:shadow-[1px_1px_40px_0px_#00A371]">
                  Our Projects 
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16" className="inline">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                  </svg>
                </button>
              </Link>

              <Link to="/">
                <button class="bg-white my-2 hover:translate-x-5 transition-all text-black 
                lg:w-[65%] px-4 box-border md:w-[80%] sm:w-[90%] w-[60%] py-2 rounded-full font-bold active:shadow-[1px_1px_40px_0px_#6983CA]">
                  Discover Events
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16" className="inline">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                  </svg>
                </button>
              </Link>
              
              <button onClick={handleOnCollaborate} class="bg-white my-2 hover:translate-x-5 transition-all text-black 
              lg:w-[65%] px-4 box-border md:w-[80%] sm:w-[90%] w-[60%] py-2 rounded-full font-bold active:shadow-[1px_1px_40px_0px_#0C7ABA]">
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
        <motion.div className="m-[5vh] flex flex-col gap-4" 
        variants={screen.width>=1000?left:right} animate={control} initial="hidden" whileInView="visible">
          <div id="header" className="text-5xl font-bold ">
            WHO WE ARE
          </div>
          <div id="info" className="text-xl font-thin">
          Established in 2019, the Consulting Finance & Analytics Club (CFA) at IIT Indore is a distinguished student organization under the Sci-Tech Board. CFA is dedicated to fostering expertise and innovation in consulting, finance, and data analytics.
          </div>
          <hr  />
        </motion.div>

        <motion.div className="m-[5vh] flex flex-row gap-3" 
        variants={screen.width>=1000?left:right} animate={control} initial="hidden" whileInView="visible">
          <div id="header" className="sm:text-3xl ml-[4vh] font-bold text-xl">
            <img src={network} className="h-[60%] w-[70%]"/>
          </div>
          <div>
            <div id="header" className="text-3xl font-bold ">
            OUR NETWORK
            </div>
            <div id="info" className="text-xl font-thin">
            CFA serves as a dynamic hub for individuals with shared interests, facilitating connections through engaging 'knowledge-sessions'. By leveraging focus groups and expert interviews, we conduct in-depth research on key topics, thereby enhancing the skillsets of our members.
            </div>
          </div>
          
        </motion.div>
        <hr/>

        <motion.div className="m-[5vh] flex flex-row gap-3" 
        variants={screen.width>=1000?left:right} animate={control} initial="hidden" whileInView="visible">
          <div id="header" className="sm:text-3xl ml-[4vh] font-bold text-xl">
            <img src={hns} className="h-[60%] w-[70%]"/>
          </div>
          <div>
            <div id="header" className="text-3xl font-bold ">
            HANDS-ON LEARNING
            </div>
            <div id="info" className="text-xl font-thin">
            CFA champions a practical learning approach within its core areas of Consulting, Finance, and Data Analytics. Our club supports this methodology by hosting a wide array of initiatives and events throughout the year, providing members with real-world experience and insights.

            </div>
          </div>
          
        </motion.div>
        <hr/>

        <motion.div className="m-[5vh] flex flex-row gap-3" 
        variants={screen.width>=1000?left:right} animate={control} initial="hidden" whileInView="visible">
          <div id="header" className="sm:text-3xl ml-[4vh] font-bold text-xl">
            <img src={path} className="h-[50%] w-[60%]"/>
          </div>
          <div className="ml-[-3vh]">
            <div id="header" className="text-3xl font-bold ">
            FUTURE PATHWAYS
            </div>
            <div id="info" className="text-xl font-thin">
            Our alumni carry forward the skills and experiences gained at CFA to excel in top-tier firms and esteemed institutions across diverse industries. Members have garnered recognition in various competitions.
            </div>
          </div>
          
        </motion.div>
      </div>
    </>
  );
}

export default Hero;
