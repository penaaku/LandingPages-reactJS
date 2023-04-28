import React from "react";
import { TbBrandNextjs } from "react-icons/tb";
import { SiHtml5, SiJavascript, SiCss3, SiReact, SiTailwindcss, SiGraphql, SiGithub } from "react-icons/si";

function Experience() {
  const tech = [
    {
      id: 1,
      icon: <SiHtml5 size={30}/>,
      title: "HTML",
      style: "text-orange-700 bg-white shadow-md shadow-orange-600"
    },
    {
      id: 2,
      icon: <SiJavascript size={30}/>,
      title: "Java Script",
      style: "text-yellow-500 bg-white shadow-md shadow-yellow-500"
    },
    {
      id: 3,
      icon: <SiCss3 size={30}/>,
      title: "CSS",
      style: "text-blue-600 bg-white shadow-md shadow-blue-600"
    },
    {
      id: 4,
      icon: <SiReact size={30}/>,
      title: "ReactJS",
      style: "text-emerald-600 bg-white shadow-md shadow-emerald-600"
    },
    {
      id: 5,
      icon: <SiTailwindcss size={30}/>,
      title: "Tailwind",
      style: "text-cyan-600 bg-white shadow-md shadow-cyan-600"
    },
    {
      id: 6,
      icon: <SiGraphql size={30}/>,
      title: "Graphql",
      style: "text-pink-600 bg-white shadow-md shadow-pink-600"
    },
    {
      id: 7,
      icon: <SiGithub size={30}/>,
      title: "GitHub",
      style: "text-black bg-white shadow-md shadow-black"
    },
    {
      id: 8,
      icon: <TbBrandNextjs size={30}/>,
      title: "NextJS",
      style: "text-black bg-white shadow-md shadow-black"
    },
  ];

  return (
    <div>
      <div name="experience" className="bg-gradient-to-b from-black to-gray-950 w-full h-full md:h-screen">
        <div className="max-w-screen-lg mx-auto p-8 md:p-4 flex flex-col justify-center w-full h-full text-white">
          <div>
            <h2 className="text-2xl font-bold inline border-b-4 border-gray-500">Experience</h2>
            <p className="py-6">These are technologies I've worked with</p>
          </div>
          <div className="w-full grid grid-cols-3 gap-4 text-start md:py-8 md:px-12">
            {tech.map(({ id, icon, title, style }) => (
              <div key={id}>
                <div className="flex flex-col justify-center items-center">
                  <div className={`bg- w-fit p-3 border border-black rounded-full  ${style}` }>{icon}</div>
                <div className="py-3">{title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
