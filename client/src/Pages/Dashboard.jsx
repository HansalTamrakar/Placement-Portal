import { motion } from "framer-motion";
import FrontPageHeader from "../Components/FrontPageHeader";
import LeftProfileSection from "../Components/LeftProfileSection";
import JobFeed from "../Components/JobFeed";
import { blogData } from "../assets/Constant";
import BlogCard from "../Components/Blogcard";
import JobSearchBar from "../Components/JobSearchBar";
import InfiniteScroll from "../Components/InfiniteScrolling";
import Connections from "../Components/Connection";
import { Outlet } from "react-router-dom";


export default function Dashboard() {
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-100   "
    >
      <FrontPageHeader />
      <div className="h-24"></div>
      <div className="h-6"></div>
      
      <div className="h-28  fixed top-[80px] text-black font-serif right-0  w-full pt-4">
        <JobSearchBar/>
      </div>

      <div className="grid grid-cols-12 pt-24  ">
        <div className="col-span-1"></div>
        <div className="col-span-2">
          <LeftProfileSection />
        </div>
        <div className="col-span-6">
          <Outlet/>
        </div>
        <div className="col-span-3 h-screen fixed overflow-y-auto left-3/4 right-0">
          <div className=" bg-gray-100 p-6 space-y-8  ">
            {blogData.map((blog,index) => (
              <BlogCard key={index} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
