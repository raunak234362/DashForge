import { PenLine, Database, Sliders } from 'lucide-react';
import { StepCard } from "./StepCard";

function FormIllustration() {
  return (
    <div className="w-full max-w-sm rounded-lg p-4 space-y-2">
      <div className="h-4 bg-gray-700 rounded w-3/4 animate-pulse"></div>
      <div className="h-4 bg-gray-700 rounded w-1/2 animate-pulse"></div>
      <div className="h-4 bg-gray-700 rounded w-2/3 animate-pulse"></div>
    </div>
  );
}

function GridIllustration() {
  return (
    <div className="w-full max-w-sm grid grid-cols-2 gap-3">
      <div className="h-20 bg-gray-800 rounded animate-pulse"></div>
      <div className="h-20 bg-gray-800 rounded animate-pulse delay-75"></div>
      <div className="h-20 bg-gray-800 rounded animate-pulse delay-100"></div>
      <div className="h-20 bg-gray-800 rounded animate-pulse delay-150"></div>
    </div>
  );
}

function ProgressBars() {
  return (
    <div className="w-full max-w-sm space-y-3">
      <div className="h-2 bg-blue-600 rounded w-full animate-pulse"></div>
      <div className="h-2 bg-green-500 rounded w-3/4 animate-pulse delay-75"></div>
      <div className="h-2 bg-purple-500 rounded w-1/2 animate-pulse delay-150"></div>
    </div>
  );
}

const HowItWorks = ()=> {
  return (
    <section className="md:mt-0 mt-10 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold font-markazi text-white mb-4">
            How DashForge Works
          </h2>
          <p className="text-xl md:text-2xl text-gray-400">
          Build your dashboards in just three simple steps—fast, easy, and intelligent.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          <StepCard
            number="1"
            icon={<div className="w-14 h-12 mx-auto flex items-center justify-center bg-gray-800 rounded-full">
              <PenLine className="w-6 h-6 text-white" />
            </div>}
            title="Tell Us What You Need"
            description="Use natural language to specify what you need in your dashboard to represent your data effectively ."
          >
            <FormIllustration />
          </StepCard>

          <StepCard
            number="2"
            icon={<div className="w-14 h-12 mx-auto flex items-center justify-center bg-gray-800 rounded-full">
              <Database className="w-6 h-6 text-white" />
            </div>}
            title="Let AI Build Your Layout"
            description="Our AI analyzes your requirements and generates the dashboard with recommended layouts and graphs."
          >
            <GridIllustration />
          </StepCard>

          <StepCard
            number="3"
            icon={<div className="w-14 h-12 mx-auto flex items-center justify-center bg-gray-800 rounded-full">
              <Sliders className="w-6 h-6 text-white" />
            </div>}
            title="Customize and Launch"
            description="Connect your data, adjust your dashboard using drag-and-drop controls, and launch right away."
          >
            <ProgressBars />
          </StepCard>
        </div>
        
      </div>
    </section>
  );
}

export default HowItWorks;