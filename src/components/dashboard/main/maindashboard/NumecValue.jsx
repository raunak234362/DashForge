
const NumecValue = () => {
  return (
    <div>
      <div className="my-5 grid md:grid-cols-3 grid-cols-2 gap-5">
          <div className="flex flex-col justify-center items-center bg-white/50 rounded-lg p-3 shadow-lg">
            <div className="font-bold text-xl text-gray-800">Annual Sales</div>
            <div className="text-3xl font-bold">78</div>
          </div>
          <div className="flex flex-col justify-center items-center bg-white/50 rounded-lg p-3 shadow-lg">
            <div className="font-bold text-xl text-gray-800">Average Sales</div>
            <div className="text-3xl font-bold">84</div>
          </div>
          <div className="flex flex-col justify-center items-center bg-white/50 rounded-lg p-3 shadow-lg">
            <div className="font-bold text-xl text-gray-800">Monthly Sales</div>
            <div className="text-3xl font-bold">6</div>
          </div>
        </div>
    </div>
  )
}

export default NumecValue
