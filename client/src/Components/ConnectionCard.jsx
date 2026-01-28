import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function ConnectionCard({ user }) {
  const [followed, setFollowed] = useState(false);

  return (
    <div className="bg-white font-serif text-black rounded-xl shadow-md border p-5 flex flex-col items-center text-center hover:shadow-lg transition">

      {/* Profile Image */}
      <img
        src={user.profileImg}
        alt={user.name}
        className="w-20 h-20 rounded-full object-cover"
      />

      {/* Name & Role */}
      <h3 className="mt-3 font-semibold text-gray-900">
        {user.name}
      </h3>
      <p className="text-sm text-gray-500 text-center">
        {user.role} @ {user.company}
      </p>

      {/* Buttons Row */}
      <div className="mt-4 flex w-full gap-3">

        {/* Follow Button */}
        <button
          onClick={() => setFollowed(!followed)}
          className={`flex-1 py-2 rounded-lg font-medium transition ${
            followed
              ? "bg-gray-200 text-gray-700"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {followed ? "Following" : "Follow"}
        </button>

        {/* Message Button */}
        <button className="flex-1 py-2 rounded-lg border flex items-center justify-center gap-2 hover:bg-gray-100 transition">
          <ChatBubbleOvalLeftIcon className="w-5 h-5" />
          Message
        </button>

      </div>
    </div>
  );
}
