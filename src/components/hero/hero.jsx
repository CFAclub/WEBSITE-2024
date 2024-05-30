import React, { useState } from "react";
import { useRef } from "react";
import heroImg from "../../assets/hero/chakra.png";
import li from "../../assets/hero/li.png";
import insta from "../../assets/hero/insta.png";
import confetti from 'canvas-confetti';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  return (
    <>
      <div className="text-white border-red-700 border-0  h-[95vh]  font-serif flex bg-black" >
        <div className="border-0 border-green-600 w-[50%]">
          <div id="heading" className="  text-7xl my-[5vh] mx-[5vh] mb-[3vh]">
            CFA Club
          </div>
          <div className="  w-[70%] text-xl mx-[5vh]">
            We provide a platform for students to make a seamless transition
            into the world of Management Consulting, Finance and Data Analytics.
          </div>
          <div className="text-xl font-bold mx-[5vh] my-[5vh]">
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
          </div>

          <div className="mx-[5vh] text-xl">


            <a 
              href={gmailLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              ref={linkRef} 
              style={{ display: 'none' }}
            >
              {/* Hidden Link */}
            </a>
            
            <ToastContainer/>


              <button onClick={handleOnClick} class="bg-white my-2 hover:translate-x-5 transition-all  text-black w-[65%] py-2 rounded-full font-bold active:shadow-[1px_1px_40px_0px_#48bb78]">
                Collaborate with us!
              </button>
            <a
              target="_blank"
              href="https://mail.google.com/mail/u/0/?fs=1&to=cfa@iiti.ac.in&su=Request+to+Collaborate+with+CFA+Club,IIT+Indore&body=Hi!+I+want+to+collaborate+with+CFA.%0D%0A%0D%0A(This+mail+was+auto-generated)&tf=cm
              "
            >
              <button class="bg-white my-2 hover:translate-x-5 transition-all  text-black w-[65%] py-2 rounded-full font-bold active:shadow-[1px_1px_40px_0px_#48bb78]">
                Collaborate with us!
              </button>
            </a>
            <a
              target="_blank"
              href="https://mail.google.com/mail/u/0/?fs=1&to=cfa@iiti.ac.in&su=Request+to+Collaborate+with+CFA+Club,IIT+Indore&body=Hi!+I+want+to+collaborate+with+CFA.%0D%0A%0D%0A(This+mail+was+auto-generated)&tf=cm"
            >
              <button class="bg-white my-2 hover:translate-x-5 transition-all  text-black w-[65%] py-2 rounded-full font-bold active:shadow-[1px_1px_40px_0px_#48bb78]">
                Collaborate with us!
              </button>
            </a>
          </div>
        </div>
{/* outermost flex-item-2 */}
        <div className=" border-0 border-blue-600 w-[50%] ">
          <img width={"90%"} src={heroImg} className="" />
        </div>
      </div>

      <div className=" bg-greyishh text-white py-[10vh] h-[140vh]" id='hero-section'>
        <div className="m-[5vh] flex flex-col gap-5">
          <div id="header" className="text-3xl font-bold">
            WHO WE ARE
          </div>
          <div id="info" className="text-xl font-thin">
            Consulting Finance & Analytics Club, IIT Indore, widely known as
            CFA, is a premier student group operating under the Sci-Techl Board
            of IIT Indore since 2019.
          </div>
          <div id="header" className="text-3xl font-bold">
            AAAAAAAAAAAAAAA
          </div>
          <hr />
        </div>

        <div className="m-[5vh] flex flex-col gap-5">
          <div id="header" className="text-3xl font-bold">
            WHO WE ARE
          </div>
          <div id="info" className="text-xl font-thin">
            Consulting Finance & Analytics Club, IIT Indore, widely known as
            CFA, is a premier student group operating under the Sci-Techl Board
            of IIT Indore since 2019.
          </div>
          <div id="header" className="text-3xl font-bold">
            AAAAAAAAAAAAAAA
          </div>
          <hr />
        </div>

        <div className="m-[5vh] flex flex-col gap-5">
          <div id="header" className="text-3xl font-bold">
            WHO WE ARE
          </div>
          <div id="info" className="text-xl font-thin">
            Consulting Finance & Analytics Club, IIT Indore, widely known as
            CFA, is a premier student group operating under the Sci-Techl Board
            of IIT Indore since 2019.
          </div>
          <div id="header" className="text-3xl font-bold">
            AAAAAAAAAAAAAAA
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}

export default Hero;
