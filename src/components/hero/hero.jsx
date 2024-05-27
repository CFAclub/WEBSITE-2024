import React from 'react';
import heroImg from "../../assets/hero/chakra.png";
import li from "../../assets/hero/li.png";
import insta from "../../assets/hero/insta.png";

function Hero () {
    return(
    <>
        <div className="text-white border-red-700 border-0  h-[95vh]  font-serif flex bg-black">
            <div className="border-0 border-green-600 w-[50%]">
                <div id="heading" className="  text-7xl my-[5vh] mx-[5vh] mb-[3vh]">
                    CFA Club
                </div>
                <div className="  w-[70%] text-xl mx-[5vh]">
                    We provide a platform for students to make a seamless transition into the world of Management Consulting, Finance and Data Analytics.
                </div>
                <div className="text-xl font-bold mx-[5vh] my-[5vh]">
                    FOLLOW US
                    <div className="flex gap-3 my-4">
                        <a href="#" className="active:scale-105 transition-all"><img src={li} className="w-8"/></a>
                        <a href="#" className="active:scale-105 transition-all"><img src={insta} className="w-8"/></a>
                    </div>
                </div>

                <div className="mx-[5vh] text-xl">
                    <button class="bg-white my-2 hover:translate-x-5 transition-all  text-black w-[65%] py-2 rounded-full font-bold active:shadow-[1px_1px_40px_0px_#48bb78]">
                        Collaborate with us!
                    </button>
                    <button class="bg-white my-2 hover:translate-x-5 transition-all  text-black w-[65%] py-2 rounded-full font-bold active:shadow-[1px_1px_40px_0px_#4299e1]">
                        Collaborate with us!
                    </button>
                    <button class="bg-white my-2 hover:translate-x-5 transition-all  text-black w-[65%] py-2 rounded-full font-bold active:shadow-[1px_1px_40px_0px_#48bb78]">
                        Collaborate with us!
                    </button>                    
                </div>
                
                
            </div>

            <div className=" border-0 border-blue-600 w-[50%] ">
                <img width={"90%"} src={heroImg} className="" />
            </div>

        </div>

        <div className=" bg-greyishh text-white py-[10vh] h-[140vh]">
        <div className="m-[5vh] flex flex-col gap-5">
                <div id="header" className="text-3xl font-bold">
                    WHO WE ARE
                </div>
                <div id="info" className="text-xl font-thin">
                    Consulting Finance & Analytics Club, IIT Indore, widely known as CFA, is a premier student group operating under the Sci-Techl Board of IIT Indore since 2019.
                </div>
                <div id="header" className="text-3xl font-bold">
                    AAAAAAAAAAAAAAA
                </div>
                <hr/>
            </div>

            <div className="m-[5vh] flex flex-col gap-5">
                <div id="header" className="text-3xl font-bold">
                    WHO WE ARE
                </div>
                <div id="info" className="text-xl font-thin">
                    Consulting Finance & Analytics Club, IIT Indore, widely known as CFA, is a premier student group operating under the Sci-Techl Board of IIT Indore since 2019.
                </div>
                <div id="header" className="text-3xl font-bold">
                    AAAAAAAAAAAAAAA
                </div>
                <hr/>
            </div>

            <div className="m-[5vh] flex flex-col gap-5">
                <div id="header" className="text-3xl font-bold">
                    WHO WE ARE
                </div>
                <div id="info" className="text-xl font-thin">
                    Consulting Finance & Analytics Club, IIT Indore, widely known as CFA, is a premier student group operating under the Sci-Techl Board of IIT Indore since 2019.
                </div>
                <div id="header" className="text-3xl font-bold">
                    AAAAAAAAAAAAAAA
                </div>
                <hr/>
            </div>
            

        </div>
        
    </>
    )
}

export default Hero;