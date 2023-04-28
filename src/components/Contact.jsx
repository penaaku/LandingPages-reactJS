import React from "react";

function Contact() {
  return (
    <div name="contact" className="w-full h-full md:h-screen bg-gradient-to-b  from-gray-950 to-black p-4 text-white">
      <div className="flex flex-col justify-center px-8 md:p-4 max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <h2 className="text-2xl font-bold inline border-b-4 border-gray-500">Contact</h2>
          <p className="py-6">Submit the form below get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form className="flex flex-col w-full md:w-1/2">
            <input type="text" name="name" placeholder="enter your name..." className="p-2 px-5 bg-transparent border-2 border-gray-600 rounded-md  text-white focus:outline-none"></input>
            <input type="text" name="email" placeholder="enter your email..." className="my-4 p-2 px-5 bg-transparent border-2 border-gray-600 rounded-md text-white focus:outline-none"></input>
            <textarea placeholder="enter your message..." name="message" rows={10} className="p-2 px-5 bg-transparent border-2 border-gray-600 rounded-md text-white focus:outline-none"></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-400 to-blue-600 px-4 py-2 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300">submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
