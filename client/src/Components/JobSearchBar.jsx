import { useState } from "react";

export default function JobSearchBar() {
  const [jobData, setJobData] = useState({
    jobtype: "",
    location: "",
    jobprofile: "",
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
  };
  const onSubmit = () => {
console.log(jobData)  };
  return (
    <div className="w-full  flex justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-4 flex flex-col md:flex-row gap-4 items-center w-full max-w-5xl">
        {/* Job Type */}
        <input
          type="text"
          name="jobtype"
          placeholder="Job type "
          onChange={(e) => {
            onChange(e);
          }}
          className="w-full md:w-1/4 px-4 py-3 rounded-xl text-center border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Location */}
        <input
          type="text"
          name="location"
          placeholder="location "
          onChange={(e) => {
            onChange(e);
          }}
          className="w-full md:w-1/4 px-4 py-3 rounded-xl text-center border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Job Profile */}
        <input
          type="text"
          name="jobprofile"
          placeholder="Job profile "
          onChange={(e) => {
            onChange(e);
          }}
          className="w-full md:w-1/4 px-4 py-3 rounded-xl text-center border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Button */}
        <button 
        className="w-full md:w-auto px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        onClick={()=>{
            onSubmit()
        }}>
          Search Jobs
        </button>
      </div>
    </div>
  );
}
