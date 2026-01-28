import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialCarousel({ data }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev === data.length - 1) {
          setDirection(-1);
          return prev - 1;
        }
        if (prev === 0) {
          setDirection(1);
          return prev + 1;
        }
        return prev + direction;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [direction, data.length]);

  return (
    <section className="bg-black py-20 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        Trusted by Professionals 🚀
      </h2>

      <div className="max-w-4xl mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: direction * 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 80 }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-900 p-8 rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-6 md:h-96"
          >
            <img
              src={data[index].image}
              alt={data[index].name}
              className="w-24 h-24 rounded-full border-2 border-orange-500"
            />

            <div>
              <p className="text-gray-300 text-2xl mb-4">
                “{data[index].message}”
              </p>

              <h4 className="text-2xl font-semibold">
                {data[index].name}
              </h4>
              <span className="text-2xl text-gray-400">
                {data[index].role}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
