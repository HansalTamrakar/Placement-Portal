
import React, { useState } from "react";
import { motion } from "framer-motion";
import { images } from "../assets/Constant";
import { testimonials } from "../assets/Constant";
import CarouselTestimonial from "../Components/CarouselTestimonial";
import AuthModal from "../Components/Auth";
import { Link } from "react-router-dom";
const Header = () => {
      const [openauth, setOpenAuth] = useState(false);
      const [personData,setPersonData]= useState({})
  const onClose = () => {
    setOpenAuth(false);
  };

  return (
    <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center px-10 py-6 h-32"
      >
        <h1 className="text-4xl font-bold text-orange-500">CareerHub</h1>

        <ul className="hidden md:flex gap-8 text-sm">
          <li className="hover:text-orange-400 text-2xl cursor-pointer">
           <Link to='/'> <span className="text-orange-400 font-bold">H</span>ome</Link>
          </li>

          <li className="hover:text-orange-400 text-2xl cursor-pointer">
            <Link to="/freelance"> Freelance</Link>
          </li>
          <li className="hover:text-orange-400 text-2xl cursor-pointer">
            <Link to="/dailypost"> Daily Post</Link>
          </li>
          <li className="hover:text-orange-400 text-2xl cursor-pointer">
            
            <Link to="/about"> About </Link>
          </li>
        </ul>

        <button
          className="bg-orange-500 px-5 py-2 rounded-md hover:bg-orange-600"
          onClick={() => {
            setOpenAuth(!openauth);
          }}
        >
          Get Started
        </button>
        {openauth && <AuthModal onClose={onClose} />}
      </motion.nav>
  )
}

export default Header