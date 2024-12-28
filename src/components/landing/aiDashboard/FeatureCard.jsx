/* eslint-disable react/prop-types */
export function FeatureCard({ title, description, borderColor }) {
    return (
      <div className={`p-6 rounded-lg bg-gray-900/50 backdrop-blur-sm border ${borderColor} hover:bg-gray-800/50 transition-all duration-300`}>
        <h3 className="text-xl font-semibold text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-400">
          {description}
        </p>
      </div>
    );
  }
  
  