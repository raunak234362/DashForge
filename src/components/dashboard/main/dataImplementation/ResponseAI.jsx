import { useSelector } from "react-redux";


const ResponseAI = () => {
    const prompt =useSelector((state) => state.company?.generatePrompt?.analysis);
 console.log(prompt);
    return (
    <section className="h-fit w-full rounded-md p-5 bg-white/30">
      <div className="text-xl font-bold text-white shadow-xl px-5 py-1 mt-2 rounded-lg">
        Generated Data:-
      </div>
      <div className="bg-white text-black p-2 rounded-md">
        <div className="text-lg font-semibold">Prompt:</div>
        <div className=" text-lg font-semibold">{prompt?.analysis}</div>
      </div>
    </section>
  )
}

export default ResponseAI
