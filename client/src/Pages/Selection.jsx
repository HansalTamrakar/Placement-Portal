import { Menu } from "lucide-react";
import { motion } from "framer-motion"; // 1. Import framer-motion
import freelancing from "../assets/selectionpage/freelancing.avif";
import placementportal from "../assets/selectionpage/placementphoto.png";

export default function ArchStudioGallery() {
  const images = [freelancing, placementportal];
  const projects = [
    {
      title: "FREELANCING | BUSINESS",
      author:
        "A freelancing website connects skilled professionals with clients looking for quality services across design, development, writing, and marketing. It provides a secure platform to showcase portfolios, communicate with clients, manage projects, and receive payments efficiently. Freelancing platforms empower individuals to work independently while helping businesses find the right talent quickly.",
    },

    {
      title: "PLACEMENT PORTAL | DAILY FINDINGS",
      author:
        "A web portal website serves as a centralized platform that brings together information, services, and tools in one place. It allows users to access personalized content, manage data, and interact with different features through a single interface. Web portals are widely used for businesses, education, and communities to improve accessibility, communication, and productivity.",
    },
  ];

  // Animation variants
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="bg-gradient-to-br min-h-screen from-red-300 to-white font-serif flex p-6 flex-col">
      <div className="mx-auto h-40 text-white"></div>
      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl">
          {/* Header */}
          <header className="flex items-center justify-between px-8 py-6 border-b">
            <div className="flex items-center gap-3">
              <Menu className="w-6 h-6" />
              <span className="font-semibold text-lg">ArchStudio</span>
            </div>
          </header>

          {/* Cards */}
          <section className="px-8 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-24">
              {projects.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform hover:scale-105"
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariants}
                >
                  <img
                    src={images[index]}
                    alt={item.title}
                    className="h-64 w-full object-cover"
                  />
                  <div className="p-4 text-center pt-16">
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-500 pt-4">{item.author}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
