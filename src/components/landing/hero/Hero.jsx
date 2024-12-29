import { AiFillThunderbolt } from "react-icons/ai";
import { FaRegLightbulb } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

const Hero = () => {
  const cardData = [
    {
      icon: <FaRegLightbulb />,
      title: "AI-Powered",
      description: "Leverage artificial intelligence to automatically generate dashboards tailored to your data.",
  },
    {
      icon: <MdDashboard />,
      title: "Effortless Customization",
    description: "Easily design layouts and add charts & graphs with drag-and-drop simplicity.",
  },
    {
      icon: <AiFillThunderbolt />,
      title: "Real-Time Data Updates",
    description: "Stay upto date with live data connections that refresh your dashboards instantly.",
  },
  ];

  return (
    <>
      <section className="h-full md:h-screen px-5 font-markazi">
        <div className="text-5xl md:text-6xl xl:text-8xl font-bold text-center text-white">
          <p>Craft Personalized Dashboards Effortlessly</p>
          <p className="text-transparent bg-clip-text bg-gradient-to-t from-cyan-400 to-cyan-700">
          Harness the Power of AI
          </p>
        </div>
        <div className="md:text-3xl text-xl text-wrap text-center text-gray-500">
        Turn raw data into actionable insights with AI-driven dashboard creation—no coding, just results.
        </div>
        <div className="flex justify-center mt-10 gap-5">
          <div className=" bg-cyan-800 px-3 py-2 rounded-md text-white text-xl">
            <Link to="/login">Get started</Link>
          </div>
          <div className=" bg-cyan-800 px-3 py-2 rounded-md text-white text-xl">
            <Link to="#">Watch Demo</Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-5 mt-10">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-black/10 border-[1px] flex flex-col justify-center text-center items-center px-5 py-5 gap-4 rounded-md text-white"
            >
              <div className="text-2xl">{card.icon}</div>
              <div className="text-xl md:text-2xl">{card.title}</div>
              <div className="text-base md:text-md text-gray-400 font-light font-serif">{card.description}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;
