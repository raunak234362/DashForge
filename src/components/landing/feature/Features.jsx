const Features = () => {
    const features = [
      {
        title: "Natural Language Input",
        description:
          "Explain your dashboard requirements. Our AI recognises your needs and produces precisely what you require.",
          borderColour: "border-cyan-500",
          shadowColour: "shadow-cyan-500/50",
      },
      {
        title: "AI-Powered Insights",
        description:
          "Smart layout suggestions and recommendations based on your requirements.",
        borderColour: "border-cyan-500",
        shadowColour: "shadow-cyan-500/50",
      },
      {
        title: "Drag & Drop",
        description:
          "Effortlessly customize your dashboard layout with the drag- drop & resize controls.",
          borderColour: "border-cyan-500",
          shadowColour: "shadow-cyan-500/50",
      },
      {
        title: "Real-time Data Updates",
        description: "Focused on the benefits of staying upto date and proactive.",
        borderColour: "border-cyan-500",
        shadowColour: "shadow-cyan-500/50",
      },
      {
        title: "Seamless Data Integration",
        description:
          "Connect to various data sources including CSVs, databases, and APIs with ease.",
          borderColour: "border-cyan-500",
          shadowColour: "shadow-cyan-500/50",
      },
      {
        title: "Advanced Customization",
        description:
          "Fine-tune your dashboards with advanced settings and customization options.",
          borderColour: "border-cyan-500",
          shadowColour: "shadow-cyan-500/50",
      },
    ];
  
    return (
      <>
        <section className="md:h-screen font-markazi h-full px-5 mt-10 md:space-y-16 md:mt-0">
          <div className=" font-bold space-y-2 text-center text-white">
            <p className="text-3xl md:text-4xl xl:text-6xl">
              Powerful Features for Everyone
            </p>
            <p className="text-2xl md:text-3xl tracking-wider text-transparent bg-clip-text bg-gradient-to-t from-cyan-400 to-cyan-700">
              Create dashboards effortlessly with AI-powered tools and intuitive
              controls
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 mt-10">
            {features.map((card, index) => (
              <div
                key={index}
                className={`bg-black/10 border-[1px] ${card.borderColour} shadow-lg ${card.shadowColour} flex flex-col justify-center text-left items-left p-5 gap-5 rounded-md text-white`}
              >
                <div className="text-2xl">{card.icon}</div>
                <div className="text-xl md:text-4xl">{card.title}</div>
                <div className="text-base md:text-lg text-gray-400 font-light font-serif">{card.description}</div>
              </div>
            ))}
          </div>
        </section>
      </>
    );
  };
  
  export default Features;
  