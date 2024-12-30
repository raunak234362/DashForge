import { useSelector } from "react-redux";


const ResponseAI = () => {
    const prompt =useSelector((state) => state.company?.generatePrompt);
 console.log(prompt);
    return (
    <section className="h-fit w-full rounded-md p-5 bg-white/30">
      <div className="text-xl font-bold text-white shadow-xl px-5 py-1 mt-2 rounded-lg">
        Generated Data:-
      </div>
      <div>

      </div>
    </section>
  )
}

export default ResponseAI
