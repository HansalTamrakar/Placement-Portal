import {
  MapPinIcon,
  ClockIcon,
  BriefcaseIcon,
  StarIcon,
  EllipsisVerticalIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

export default function JobCard() {
  return (
    <div className="bg-white rounded-xl  shadow-md p-6 w-full max-w-5xl border hover:shadow-lg transition">

      {/* Top Section */}
      <div className="flex justify-between items-start">

        {/* Left */}
        <div className="flex gap-4">
          {/* Company Logo */}
          <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_as_of_2021.svg"
              alt="company"
              className="w-8 h-8"
            />
          </div>

          {/* Job Info */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded">
                Grant
              </span>
              <span className="text-xs text-red-500">New</span>
            </div>

            <h2 className="text-lg font-semibold text-gray-900">
              Senior Business Systems Analyst
            </h2>

            <div className="flex gap-4 text-sm text-gray-500 mt-2">
              <span className="flex items-center gap-1">
                <MapPinIcon className="w-4 h-4" /> Work from anywhere
              </span>
              <span className="flex items-center gap-1">
                <ClockIcon className="w-4 h-4" /> Work anytime
              </span>
              <span className="flex items-center gap-1">
                <BriefcaseIcon className="w-4 h-4" /> 40 hrs/week
              </span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <span className="text-lg font-semibold text-gray-900">$90K</span>

          <div className="flex gap-2 text-gray-500">
            <StarIcon className="w-5 h-5 cursor-pointer hover:text-yellow-400" />
            <EllipsisVerticalIcon className="w-5 h-5 cursor-pointer" />
          </div>

          <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800">
            View job
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-center mt-6">

        {/* Skills */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500">You match:</span>

          <SkillBadge label="JavaScript" />
          <SkillBadge label="Java" />
          <SkillBadge label="HTML" />
        </div>

        {/* Expand */}
        <div className="flex items-center gap-1 text-sm text-gray-500 cursor-pointer">
          Expand details
          <ChevronDownIcon className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}

/* Skill badge */
function SkillBadge({ label }) {
  return (
    <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
      ✓ {label}
    </span>
  );
}
