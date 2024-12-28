import { AiFillThunderbolt } from "react-icons/ai";
import { FaRegLightbulb } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

const Hero = () => {
  const cardData = [
    {
      icon: <FaRegLightbulb />,
      title: "AI-Powered",
      description: "Generate dashboards with AI-powered insights",
    },
    {
      icon: <MdDashboard />,
      title: "Drag & Drop",
      description: "Customize layouts and components with intuitive controls",
    },
    {
      icon: <AiFillThunderbolt />,
      title: "Real-time Updates",
      description: "Connect to live data sources for instant virtualization",
    },
  ];

  return (
    <>
      <section className="h-full md:h-screen px-5">
        <div className="text-5xl md:text-6xl xl:text-8xl font-markazi font-bold text-center text-white">
          <p>Create Custom Dashboards</p>
          <p className="text-transparent bg-clip-text bg-gradient-to-t from-cyan-400 to-cyan-700">
            Powered by AI
          </p>
        </div>
        <div className="md:text-3xl text-xl text-wrap font-iceland text-center text-gray-500">
          Transform your data into insights with AI-powered dashboard
          generation. No coding required.
        </div>
        <div className="flex justify-center mt-10 gap-5">
          <div className=" bg-cyan-800 px-3 py-2 rounded-md text-white text-xl font-bebas">
            <Link to="/login">Get Started</Link>
          </div>
          <div className=" bg-cyan-800 px-3 py-2 rounded-md text-white text-xl font-bebas">
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
              <div className="text-base">{card.description}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;
