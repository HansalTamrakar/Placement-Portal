import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-gray-300 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Career<span className="text-orange-500">Hub</span>
          </h3>
          <p className="text-sm text-gray-400">
            One platform for jobs, freelancing, and showcasing skills through reels.
          </p>
        </div>

        {/* Product */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Product</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Jobs</li>
            <li className="hover:text-white cursor-pointer">Freelancing</li>
            <li className="hover:text-white cursor-pointer">Reels</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
          <div className="flex gap-4 text-xl">
            <FaLinkedin className="hover:text-white cursor-pointer" />
            <FaGithub className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-zinc-800 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} CareerHub. All rights reserved.
      </div>
    </footer>
  );
}
