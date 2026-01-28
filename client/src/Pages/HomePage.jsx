
import React, { useState } from "react";
import { motion } from "framer-motion";
import { images } from "../assets/landingpage/Constant";
import { testimonials } from "../assets/landingpage/Constant";
import CarouselTestimonial from "../Components/CarouselTestimonial";


const HomePage = () => {
  const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
  return (
    <div
      className={` min-h-screen bg-gradient-to-b  from-black  via-gray-900 to-black text-white overflow-hidden font-serif`}
    >
      {/* ================= NAVBAR ================= */}

      {/* ================= HERO ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center mt-20 px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-40">
          Get Hired. <span className="text-orange-500">Get Paid.</span>
          <br /> Get Discovered.
        </h1>

        <p className="mt-6 max-w-2xl text-gray-300 text-xl">
          A unified platform for placements, freelancing, and short skill reels.
          Let recruiters see your skills in action.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="bg-orange-500 px-6 py-3 rounded-md hover:bg-orange-600">
            Join Now
          </button>
          <button className="border border-gray-500 px-6 py-3 rounded-md hover:bg-gray-800">
            Explore Jobs
          </button>
        </div>
      </motion.section>

      {/* ================= STATS ================= */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-40 px-10 text-center">
        {[
          { value: "10K+", label: "Students & Freelancers" },
          { value: "500+", label: "Recruiters & Clients" },
          { value: "₹2Cr+", label: "Freelance Payouts" },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <h2 className="text-4xl font-bold text-orange-500">{item.value}</h2>
            <p className="text-gray-400 mt-2">{item.label}</p>
          </motion.div>
        ))}
      </section>

      {/* ================= FEATURES ================= */}
      <section className="mt-32 px-10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-14"
        >
          Everything You Need to Build Your Career
        </motion.h2>
        <CarouselTestimonial data={testimonials} />

        <div className="w-full flex flex-wrap gap-16 mx-auto justify-center">
          {[
            "Placement Portal",
            "Freelancing Marketplace",
            "Skill Reels",
            "Real-time Chat",
            "Smart Dashboards",
            "Verified Recruiters",
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="
            bg-gray-800 mt-8 p-6 rounded-xl shadow-xl shadow-blue-950
            w-full sm:w-1/2 md:w-1/3 lg:w-1/4
            min-h-96
          "
            >
              <img
                className="h-2/3 w-full object-cover opacity-80 rounded-lg mb-4"
                src={images[index]}
                alt={feature}
              />

              <h3 className="text-xl font-semibold text-orange-400">
                {feature}
              </h3>

              <p className="text-gray-400 mt-2 text-sm">
                Show your skills, connect instantly, and get hired faster.
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
