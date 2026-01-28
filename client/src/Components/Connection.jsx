import ConnectionCard from "./ConnectionCard";
 const connections = [
  {
    id: 1,
    name: "Aarav Mehta",
    role: "MERN Stack Developer",
    company: "Infosys",
    profileImg: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Riya Sharma",
    role: "Frontend Engineer",
    company: "TCS",
    profileImg: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Kunal Verma",
    role: "Backend Developer",
    company: "Wipro",
    profileImg: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    id: 4,
    name: "Ananya Patel",
    role: "UI/UX Designer",
    company: "Accenture",
    profileImg: "https://randomuser.me/api/portraits/women/36.jpg",
  },
  {
    id: 5,
    name: "Rohit Singh",
    role: "Full Stack Engineer",
    company: "Amazon",
    profileImg: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    id: 6,
    name: "Neha Gupta",
    role: "Software Engineer",
    company: "Microsoft",
    profileImg: "https://randomuser.me/api/portraits/women/48.jpg",
  },
  {
    id: 1,
    name: "Aarav Mehta",
    role: "MERN Stack Developer",
    company: "Infosys",
    profileImg: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Riya Sharma",
    role: "Frontend Engineer",
    company: "TCS",
    profileImg: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Kunal Verma",
    role: "Backend Developer",
    company: "Wipro",
    profileImg: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    id: 4,
    name: "Ananya Patel",
    role: "UI/UX Designer",
    company: "Accenture",
    profileImg: "https://randomuser.me/api/portraits/women/36.jpg",
  },
  {
    id: 5,
    name: "Rohit Singh",
    role: "Full Stack Engineer",
    company: "Amazon",
    profileImg: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    id: 6,
    name: "Neha Gupta",
    role: "Software Engineer",
    company: "Microsoft",
    profileImg: "https://randomuser.me/api/portraits/women/48.jpg",
  },
  {
    id: 1,
    name: "Aarav Mehta",
    role: "MERN Stack Developer",
    company: "Infosys",
    profileImg: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Riya Sharma",
    role: "Frontend Engineer",
    company: "TCS",
    profileImg: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Kunal Verma",
    role: "Backend Developer",
    company: "Wipro",
    profileImg: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    id: 4,
    name: "Ananya Patel",
    role: "UI/UX Designer",
    company: "Accenture",
    profileImg: "https://randomuser.me/api/portraits/women/36.jpg",
  },
  {
    id: 5,
    name: "Rohit Singh",
    role: "Full Stack Engineer",
    company: "Amazon",
    profileImg: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    id: 6,
    name: "Neha Gupta",
    role: "Software Engineer",
    company: "Microsoft",
    profileImg: "https://randomuser.me/api/portraits/women/48.jpg",
  },
];

export default function Connections() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
     

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {connections.map((user) => (
          <ConnectionCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
