import { DashboardPreview } from "./DashboardPreview";
import { FeatureCard } from "./FeatureCard";

const ADS = () => {
  const features = [
    {
      title: "Natural Language Processing",
      description:
        "Transform your dashboard requirements from plain English into powerful visualizations automatically.",
      borderColor: "border-blue-500/20",
    },
    {
      title: "Smart Layout Generation",
      description:
        "AI analyzes your data structure and suggests optimal layouts and chart types for better visualization.",
      borderColor: "border-purple-500/20",
    },
    {
      title: "Automated Insights",
      description:
        "Get AI-powered insights and anomaly detection from your data in real-time.",
      borderColor: "border-gradient-to-r from-blue-500/20 to-purple-500/20",
    },
    {
      title: "Predictive Analytics",
      description:
        "Leverage machine learning models to forecast trends and predict future metrics.",
      borderColor: "border-red-500/20",
    },
  ];
  return (
    <section className=" mt-10 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI-Powered Dashboard Creation
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the power of artificial intelligence in creating
            stunning, functional dashboards tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="order-2 md:order-1">
            <DashboardPreview />
          </div>

          <div className="order-1 md:order-2 space-y-4">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                borderColor={feature.borderColor}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ADS;
