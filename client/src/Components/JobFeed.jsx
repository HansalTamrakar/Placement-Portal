import { motion } from "framer-motion";
import JobCard from "./JobCard";

const jobs = Array.from({ length: 20 }, (_, i) => ({
  title: `Frontend Developer ${i + 1}`,
  company: "Tech Corp",
  location: "Remote",
}));

export default function JobFeed() {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1 },
          },
        }}
        className="space-y-4"
      >
        {jobs.map((job, i) => (
          <JobCard key={i} job={job} />
        ))}
      </motion.div>
    </div>
  );
}
