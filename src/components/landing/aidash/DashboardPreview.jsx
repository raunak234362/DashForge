import { MessageCircle } from 'lucide-react';

export function DashboardPreview() {
  return (
    <div className="rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
          <MessageCircle className="w-5 h-5 text-white" />
        </div>
        <div className="h-4 bg-gray-800 rounded w-3/4 animate-pulse"></div>
      </div>

      <div className="space-y-4">
        <div className="h-40 bg-gray-800 rounded-lg animate-pulse"></div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="h-32 bg-gray-800 rounded-lg animate-pulse"></div>
          <div className="h-32 bg-gray-800 rounded-lg animate-pulse delay-100"></div>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button className="px-6 py-2 rounded-lg bg-blue-900 text-blue-100 hover:bg-blue-800 transition-colors">
            Preview
          </button>
          <button className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors">
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}

