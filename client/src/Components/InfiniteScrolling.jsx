import { useEffect, useRef, useState } from "react";
import { posts } from "../assets/Constant";
import PostCard from "./PostCard";

export default function InfiniteScroll() {
  const [visibleCount, setVisibleCount] = useState(10);
  const loaderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => prev + 5);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="h-screen overflow-y-auto p-4 bg-gray-100">
      {posts.slice(0, visibleCount).map((job) => (
        <div key={job.id} className=" p-4 mb-4 rounded shadow">
        <PostCard />
        </div>
      ))}

      <div
        ref={loaderRef}
        className="h-10 flex items-center justify-center text-gray-500"
      >
        Loading more...
      </div>
    </div>
  );
}
