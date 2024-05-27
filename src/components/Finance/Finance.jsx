import React from 'react';
import consultingImage from '../../assets/Finance.png';
import { Link } from 'react-router-dom'; 

function Finance() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="relative bg-gray-300 w-full flex justify-center items-center overflow-x-hidden">
        <img 
          src={consultingImage} 
          alt="Main" 
          className="w-full h-auto" 
        />
        <div className="absolute bottom-4 left-4 mx-[1vh] my-[2vh] text-xl w-1/2">
          <a
            target="_blank"
            href="mailto:cfa@iiti.ac.in?subject=Request%20to%20Collaborate%20with%20CFA%20Club%2CIIT%20Indore&body=Hi!%20I%20want%20to%20collaborate%20with%20CFA.%0D%0A%0D%0A(This%20mail%20was%20auto-generated)"
          >
            <button className="bg-white text-xl font-bold my-2 hover:translate-x-5 transition-all text-black w-[65%] p-2 rounded-full active:shadow-[1px_1px_40px_0px_#48bb78]">
              Collaborate with us!
            </button>
          </a>
        </div>
      </div>

      <div className="bg-black text-white flex items-start justify-start w-full h-[500px]">
        <h2 className="text-3xl font-bold ml-4 mt-4">WHAT WE DO</h2>
      </div>
      <div className="bg-gray-200 flex flex-col justify-between w-full rounded-lg h-[300px] p-4">
        <h2 className="text-3xl font-bold text-black">PROJECTS</h2>
        <div className="flex justify-between items-end">
          <Link to="/projects"> {/* Use Link and provide the path */}
            <button 
              className="bg-[#1A2D2C] text-white py-2 px-4 rounded-2xl transition-colors duration-300 hover:bg-blue-600"
            >
              View All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Finance;
