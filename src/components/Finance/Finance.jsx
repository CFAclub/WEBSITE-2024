import React from 'react';
import financeImage from '../../assets/Finance.png';
import { Link } from 'react-router-dom'; 

function Finance() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="relative bg-gray-300 w-full flex justify-center items-center overflow-x-hidden">
        <img 
          src={financeImage} 
          alt="Main" 
          className="w-full h-auto" 
        />
        <div className="absolute bottom-4 left-4 mx-[1vh] my-[2vh] text-xl w-1/2">
          <a
            target="_blank"
            href="mailto:cfa@iiti.ac.in?subject=Request%20to%20Collaborate%20with%20CFA%20Club%2CIIT%20Indore&body=Hi!%20I%20want%20to%20collaborate%20with%20CFA.%0D%0A%0D%0A(This%20mail%20was%20auto-generated)"
          >
            <button 
              className="bg-white text-xl font-bold my-2 hover:translate-x-5 transition-all text-black w-[65%] p-2 rounded-full active:shadow-[1px_1px_40px_0px_#48bb78]"
              style={{
                boxShadow: '0 0 15px 5px rgba(255, 255, 255, 0.485)',
                 border: '1px solid black'
              }}
            >
              Collaborate with us!
            </button>
          </a>
        </div>
      </div>

      <div className="bg-[#0A0D14] text-white flex flex-col justify-between items-start w-full ">
        <h2 className="text-4xl font-bold  p-4">WHAT WE DO</h2>
        <p className=" mb-8 text-2xl leading-relaxed p-4">
        The FINANCE AND QUANT division is your gateway to mastering advanced quantitative skills, particularly in stochastic modeling and analysis. Our division offers hands-on workshops and intensive training sessions, diving deep into the mathematical complexities of stochastic processes. Members learn to develop robust financial models and make informed decisions amidst market uncertainties. We also focus on trading strategies, emphasizing rigorous back-testing methodologies using state-of-the-art software and datasets.
         
          <br />
          <br />
          <span className="text-teal-500 text-3xl font-bold drop-shadow-md">JOIN US</span> to enhance your skills, network with professionals, and prepare for a successful career in finance and quantitative analysis.
        </p>
        <div className="bg-black text-white flex w-full h-full p-4">
          <h2 className="text-3xl font-bold">PROJECTS</h2>
        </div>
      </div>

      <div className="bg-gray-200 flex flex-col justify-between w-full h-[300px] p-4">
        <div className="flex justify-between items-end">
        </div>
      </div>

      <div className="flex flex-col bg-black justify-between w-full h-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="mr-auto">
            <Link to="/projects">
              <button 
                className="bg-[#1A2D2C] text-white py-2 px-4 rounded-2xl transition-colors duration-300 hover:bg-blue-600"
                style={{
                  backgroundColor: '#1A2D2C',
                  fontWeight: 'bolder',
                  color: 'white',
                  padding: '10px',
                  borderRadius: '50px',
                  transition: 'box-shadow 0.3s ease-in-out'
                }}
                onMouseOver={(e) => e.target.style.boxShadow = '0 0 15px 5px rgba(255, 255, 255, 0.485)'}
                onMouseOut={(e) => e.target.style.boxShadow = 'none'}
              >
                View All
              </button>
            </Link>
          </div>
        </div>
        <div className="text-center mb-1">
          <h2 className="text-4xl font-bold text-white">ACCESS RESOURCES</h2>
          <div className="w-full flex justify-center items-center h-[300px] bg-gray-200 mt-5">
            <span className="text-gray-400 text-4xl font-bold">COMING SOON...</span>
          </div>
        </div>
        <div className="mt-auto flex justify-center mb-4">
          <Link to="/team">
            <button 
              className="bg-[#1A2D2C] text-white py-2 px-4 rounded-2xl transition-colors duration-300 hover:bg-blue-600 mt-4"
              style={{
                backgroundColor: '#1A2D2C',
                fontWeight: 'bolder',
                color: 'white',
                padding: '10px',
                borderRadius: '50px',
                transition: 'box-shadow 0.3s ease-in-out'
              }}
              onMouseOver={(e) => e.target.style.boxShadow = '0 0 15px 5px rgba(255, 255, 255, 0.485)'}
              onMouseOut={(e) => e.target.style.boxShadow = 'none'}
            >
              MEET THE TEAM
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Finance;
