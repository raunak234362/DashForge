import AIForm from "./AIForm";
import ResponseAI from "./ResponseAI";


const Data = () => {
  
  return (
    <div>
      <div className="h-[85vh] overflow-y-auto">
          <div className="flex w-full my-5 justify-center items-center">
            <div className="text-3xl font-bold text-white bg-cyan-500/50 shadow-xl px-5 py-1 mt-2 rounded-lg">
              Generate Data
            </div>
          </div>
        <div className="overflow-auto rounded-lg space-y-5 bg-blue-gray-800 drop-shadow-md md:w-full w-full">
        <AIForm/>
        <ResponseAI />
        </div>
      </div>
    </div>
  );
};

export default Data;
