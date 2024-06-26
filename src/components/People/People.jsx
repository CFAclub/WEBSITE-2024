import React from "react";
import { OverallHead, FinanceHead, AnalyticsHead, ConsultingCoHead, DesignHead, OutreachHead, WebTeam } from "./data";

const TeamCard = ({ val }) => {
  return (
    <div
      className="scale-95 relative w-[300px] h-[350px] overflow-hidden rounded-3xl shadow-lg bg-white m-8"
      style={{
        transition: 'transform 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        const hoverDiv = e.currentTarget.querySelector('.hover-div');
        const nameDiv = e.currentTarget.querySelector('.name-div');
        if (hoverDiv && nameDiv) {
          hoverDiv.style.opacity = '1';
          nameDiv.style.opacity = '0';
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(0.95)';
        const hoverDiv = e.currentTarget.querySelector('.hover-div');
        const nameDiv = e.currentTarget.querySelector('.name-div');
        if (hoverDiv && nameDiv) {
          hoverDiv.style.opacity = '0';
          nameDiv.style.opacity = '1';
        }
      }}
    >
      <img
        className="object-cover w-full h-72 xl:h-80"
        src={val.image_url}
        alt={val.name}
      />
      <div className="name-div absolute bottom-0 left-0 w-full p-1 text-center bg-white bg-opacity-80">
        <p className="text-xl font-bold text-black">{val.name}</p>
        <p className="text-lg font-semibold text-gray-700" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)" }}>{val.role}</p>
      </div>
      <div
        className="hover-div absolute inset-0 px-6 py-4 text-center"
        style={{
          transition: 'opacity 0.3s ease',
          opacity: '0',
        }}
      >
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-white opacity-60 to-gray-700"></div>
        <div className="relative flex flex-col items-center justify-center w-full h-full">
          <div className="flex items-center justify-center space-x-3 bg-top bg-cover">
            <a
              href={val.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 bg-top bg-cover cursor-pointer text-blue-50"
              style={{
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'black';
              }}
            >
              <svg
                color="black"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
              </svg>
            </a>
            <a
              href={val.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 bg-top bg-cover cursor-pointer text-blue-50"
              style={{
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'black';
              }}
            >
              <svg
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                <path d="M 11.5 6 C 8.4802259 6 6 8.4802259 6 11.5 L 6 36.5 C 6 39.519774 8.4802259 42 11.5 42 L 36.5 42 C 39.519774 42 42 39.519774 42 36.5 L 42 11.5 C 42 8.4802259 39.519774 6 36.5 6 L 11.5 6 z M 11.5 9 L 36.5 9 C 37.898226 9 39 10.101774 39 11.5 L 39 36.5 C 39 37.898226 37.898226 39 36.5 39 L 11.5 39 C 10.101774 39 9 37.898226 9 36.5 L 9 11.5 C 9 10.101774 10.101774 9 11.5 9 z M 15.5 13 A 2.5 2.5 0 0 0 15.5 18 A 2.5 2.5 0 0 0 15.5 13 z M 14 20 C 13.447 20 13 20.447 13 21 L 13 34 C 13 34.553 13.447 35 14 35 L 17 35 C 17.553 35 18 34.553 18 34 L 18 21 C 18 20.447 17.553 20 17 20 L 14 20 z M 21 20 C 20.447 20 20 20.447 20 21 L 20 34 C 20 34.553 20.447 35 21 35 L 24 35 C 24.553 35 25 34.553 25 34 L 25 26.5 C 25 25.121 26.121 24 27.5 24 C 28.879 24 30 25.121 30 26.5 L 30 34 C 30 34.553 30.447 35 31 35 L 34 35 C 34.553 35 35 34.553 35 34 L 35 26 C 35 22.691 32.309 20 29 20 C 27.462 20 26.063 20.586016 25 21.541016 L 25 21 C 25 20.447 24.553 20 24 20 L 21 20 z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamPage = () => {
  return (
    <div className="min-h-screen flex flex-col mx-auto px-4 bg-black ">
    
      <div className="flex flex-col justify-center items-center mt-5 pt-10 pb-18 mb-20">
       
        <h1
          className="flex justify-center items-center text-3xl mb-10 text-white font-bold"
          style={{
            fontFamily: "Arial, sans-serif",
            textShadow: "3px 3px 6px rgba(0, 0, 0, 0.3)",
          }}
        >
          TEAM 2024-2025
        </h1>
        {/* TEAM Cards */}
        <div className="flex flex-row flex-wrap justify-between items-center">
          {OverallHead.concat(FinanceHead, AnalyticsHead, ConsultingCoHead, DesignHead, OutreachHead).map((val) => (
            <TeamCard key={val.name} val={val} />
          ))}
        </div>
      </div>

      {/* WEB TEAM Section */}
      <div className="flex flex-col justify-center items-center mt-10 pt-10 pb-18 mb-20">
       
        <h1
          className="flex justify-center items-center text-3xl mb-10 text-white font-bold"
          style={{
            fontFamily: "Arial, sans-serif",
            textShadow: "3px 3px 6px rgba(0, 0, 0, 0.3)",
          }}
        >
          WEB TEAM
        </h1>
       
        <div className="flex flex-row justify-between items-center w-full">
          {WebTeam.map((val) => (
            <TeamCard key={val.name} val={val} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
