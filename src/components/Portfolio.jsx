import React from "react";

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: "https://picsum.photos/id/11/400/200",
    },
    {
      id: 2,
      src: "https://picsum.photos/id/22/400/200",
    },
    {
      id: 3,
      src: "https://picsum.photos/id/33/400/200",
    },
    {
      id: 4,
      src: "https://picsum.photos/id/44/400/200",
    },
    {
      id: 5,
      src: "https://picsum.photos/id/55/400/200",
    },
    {
      id: 6,
      src: "https://picsum.photos/id/66/400/200",
    },
    {
      id: 7,
      src: "https://picsum.photos/id/77/400/200",
    },
    {
      id: 8,
      src: "https://picsum.photos/id/88/400/200",
    },
  ];

  return (
    <div name="portfolio" className="w-full h-full  bg-gradient-to-b from-gray-950 bg-red-800 to-black text-white">
      <div className="max-w-screen-lg p-8 md:p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-2xl font-bold inline border-b-4 border-gray-500">Portfolio</h2>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:px-12">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg p-2">
              <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
              <div className="flex items-center justify-center py-2 md:py-0 ">
                <button className="text-sm px-4 md:w-1/2 md:mx-8 md:my-3 md:py-2 duration-300 hover:bg-cyan-700">Demo</button>
                <button className="text-sm px-4 md:w-1/2 md:mx-8 md:my-4 md:py-2 duration-300 hover:bg-cyan-700">Code</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
