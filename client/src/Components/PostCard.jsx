import { useState } from "react";
import {
  HandThumbUpIcon,
  ChatBubbleOvalLeftIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";

export default function PostCard() {
  const [expanded, setExpanded] = useState(false);

  const description =
    "Learning MERN stack has completely changed how I build web applications. From frontend React components to backend APIs with Node and MongoDB, the journey has been amazing. Building real-world projects is the key to mastering full stack development.";

  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md border p-4 space-y-4">

      {/* Header */}
      <div className="flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/150?img=3"
          alt="profile"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="font-semibold text-gray-900">Hansal Tamarakar</h3>
          <p className="text-sm text-gray-500">hansal.dev@gmail.com</p>
        </div>
      </div>

      {/* Description */}
      <div className="text-gray-800 text-sm leading-relaxed">
        {expanded ? description : description.slice(0, 120) + "..."}
        <button
          onClick={() => setExpanded(!expanded)}
          className="ml-1 text-blue-600 font-medium"
        >
          {expanded ? "See less" : "See more"}
        </button>
      </div>

      {/* Post Image */}
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
        alt="post"
        className="w-full rounded-lg object-cover max-h-96"
      />

      {/* Actions */}
      <div className="flex justify-between text-gray-600 pt-2 border-t">

        <ActionButton
          icon={<HandThumbUpIcon className="w-5 h-5" />}
          label="Like"
        />

        <ActionButton
          icon={<ChatBubbleOvalLeftIcon className="w-5 h-5" />}
          label="Comment"
        />

        <ActionButton
          icon={<BookmarkIcon className="w-5 h-5" />}
          label="Save"
        />

      </div>
    </div>
  );
}

/* Reusable Action Button */
function ActionButton({ icon, label }) {
  return (
    <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition">
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}
