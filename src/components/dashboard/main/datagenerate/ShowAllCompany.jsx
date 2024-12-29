
const ShowAllCompany = () => {
  return (
    <div className="mt-5  h-[50vh] overflow-auto">
      <table className="h-fit md:w-full w-[90vw] border-collapse text-center md:text-lg text-xs rounded-xl">
        <thead>
            <tr className="bg-teal-200/30">
                <th className="px-2 py-1 text-left cursor-pointer">Company Name</th>
                <th className="px-2 py-1 cursor-pointer">Type</th>
                <th className="px-2 py-1 cursor-pointer">Size</th>
                <th className="px-2 py-1 cursor-pointer">Location</th>
                <th className="px-2 py-1 cursor-pointer">Website</th>
                <th className="px-2 py-1 cursor-pointer">Actions</th>
            </tr>
        </thead>
        <tbody>
            
        </tbody>
      </table>
    </div>
  )
}

export default ShowAllCompany
