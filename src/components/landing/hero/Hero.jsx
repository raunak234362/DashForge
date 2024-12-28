import { Link } from "react-router-dom";

const Hero = () => {
  const cardData = [
    {
      icon: "fas fa-chart-line",
      title: "AI-Powered",
      description: "Generate dashboards with AI-powered insights",
    },
    {
      icon: "fas fa-chart-line",
      title: "AI-Powered",
      description: "Generate dashboards with AI-powered insights",
    },
    {
      icon: "fas fa-chart-line",
      title: "AI-Powered",
      description: "Generate dashboards with AI-powered insights",
    },
  ];

  return (
    <>
      <section className="h-screen px-5">
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
            <Link to="/dashboard">Get Started</Link>
          </div>
          <div className=" bg-cyan-800 px-3 py-2 rounded-md text-white text-xl font-bebas">
            <Link to="#">Watch Demo</Link>
          </div>
          <div></div>
        </div>
        
      </section>
    </>
  );
};

export default Hero;
