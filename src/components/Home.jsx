import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import image from "../assets/IMG-1.jpg";
import { Link } from "react-scroll";

function Home() {
  return (
    <div name="home" className="h-full md:h-screen w-full bg-black">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-8 md:px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full mt-24">
          <h2 className="text-4xl md:text-5xl font-bold text-white md:pb-8">I'm a Full Stack Developer </h2>
          <p className="text-gray-600 py-6 max-w-md ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloremque, ea repellat tempora nostrum placeat perferendis blanditiis eligendi minima nihil?</p>
          <div className="cursor-pointer">
            <Link to="portfolio" smooth duration={500} className="group flex justify-center md:ml-6 rounded-md h-10 w-32 bg-gradient-to-r from-cyan-500 to-blue-600 items-center ">
              portfolio
              <span className="group-hover:rotate-90 duration-200">
                <IoIosArrowForward className="ml-2" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img src={image} alt="myPhotos" className="rounded-2xl my-10 mx-auto w-3/4 md:w-3/12" />
        </div>
      </div>
    </div>
  );
}

export default Home;
