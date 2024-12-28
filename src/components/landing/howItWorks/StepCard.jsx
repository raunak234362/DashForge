/* eslint-disable react/prop-types */
export function StepCard({ number, icon, title, description, children }) {
    return (
      <div className="relative">
        {/* Step Number and Icon */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 z-50">
          {/* Step Number */}
          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
            <span className="text-xl font-bold text-white">{number}</span>
          </div>
          {/* Icon */}
          <div className="w-12 h-10 rounded-full bg-gray-800 flex items-center justify-center">
            {icon}
          </div>
        </div>
        
        {/* Card Content */}
        <div className="mt-12 p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-colors duration-300">
          <h3 className="text-2xl font-bold text-white mb-3 text-center">
            {title}
          </h3>
          <p className="text-gray-400 mb-6 text-center">{description}</p>
          <div className="flex justify-center">{children}</div>
        </div>
      </div>
    );
  }
  