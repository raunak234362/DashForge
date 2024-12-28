const Features = () => {
  const features = [
    {
      //  icon: <FaRegLightbulb />,
      title: "AI-Powered",
      description: "Generate dashboards with AI-powered insights",
    },
    {
      //  icon: <MdDashboard />,
      title: "Drag & Drop",
      description: "Customize layouts and components with intuitive controls",
    },
    {
      //  icon: <AiFillThunderbolt />,
      title: "Real-time Updates",
      description: "Connect to live data sources for instant virtualization",
    },
    {
      //  icon: <AiFillThunderbolt />,
      title: "Real-time Updates",
      description: "Connect to live data sources for instant virtualization",
    },
    {
      //  icon: <AiFillThunderbolt />,
      title: "Real-time Updates",
      description: "Connect to live data sources for instant virtualization",
    },
    {
      //  icon: <AiFillThunderbolt />,
      title: "Real-time Updates",
      description: "Connect to live data sources for instant virtualization",
    },
  ];

  return (
    <>
      <section className="md:h-screen h-full px-5 mt-6 md:mt-0">
        <div className="font-markazi font-bold text-center text-white">
          <p className="text-3xl md:text-4xl xl:text-6xl">
            Powerfull Features for Everyone
          </p>
          <p className="text-2xl md:text-3xl tracking-wider text-transparent bg-clip-text bg-gradient-to-t from-cyan-400 to-cyan-700">
            Create dashboards effortlessly with AI-powered tools and intuitive
            controls
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center gap-5 mt-10">
          {features.map((card, index) => (
            <div
              key={index}
              className="bg-black/10 border-[1px] flex flex-col justify-center text-center items-center p-5 gap-4 rounded-md text-white"
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

export default Features;
