import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-full md:h-screen bg-gradient-to-b from-black to-gray-950 text-white">
      <div className="max-w-screen-lg p-8 md:p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-2xl font-bold inline border-b-4 border-gray-500">About</h2>
        </div>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt vero dicta odio beatae placeat. Asperiores eligendi nulla blanditiis impedit libero aut natus perspiciatis, repellat qui consequuntur deleniti at amet? Obcaecati
          voluptatibus itaque soluta ullam sed perferendis minus quam veritatis tempore rerum aut ex aliquam repudiandae voluptatum, dicta fugit adipisci doloremque!
        </p>
        <br />
        <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus quos sunt ducimus sequi magni rem possimus iure tempora corrupti suscipit? Excepturi quidem velit suscipit doloremque quia quod dolore iusto recusandae?</p>
      </div>
    </div>
  );
}

export default About;
