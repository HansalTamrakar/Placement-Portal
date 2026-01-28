import { motion } from "framer-motion";

export default function BlogCard({ blog }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    //   whileHover={{ scale:  }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row h-52"
    >
      {/* Image */}
      <motion.img
        src={blog.image}
        alt={blog.title}
        className="w-full md:w-1/2 md:h-1/2  object-cover"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Content */}
      <div className="p-6 flex flex-col justify-center">
        <h2 className="text-xl font-semibold text-gray-900">
          {blog.title}
        </h2>

        <p className="text-gray-500 mt-3 text-xs leading-relaxed">
          {blog.description}
        </p>

        <button className="mt-4 text-purple-600 font-medium w-fit hover:underline">
          Read more →
        </button>
      </div>
    </motion.div>
  );
}
