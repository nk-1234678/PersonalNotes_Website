import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-violet-900 to-pink-800 text-gray-200 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">PersonalNotes</h2>
          <p className="text-sm text-gray-300">
            A clean and powerful space to organize your thoughts, ideas, and tasks—all in one place.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Navigation</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/features" className="hover:text-pink-300">Features</a></li>
            <li><a href="/about" className="hover:text-pink-300">About Us</a></li>
            <li><a href="/contact" className="hover:text-pink-300">Contact</a></li>
            <li><a href="/help" className="hover:text-pink-300">Help Center</a></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Legal</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/privacy" className="hover:text-pink-300">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-pink-300">Terms of Service</a></li>
            <li><a href="/cookies" className="hover:text-pink-300">Cookie Policy</a></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Connect</h3>
          <div className="flex space-x-4 mb-4">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-pink-400 text-xl" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-pink-400 text-xl" />
            </a>
            <a href="mailto:your-email@example.com">
              <FaEnvelope className="hover:text-pink-400 text-xl" />
            </a>
          </div>
          <p className="text-sm text-gray-300">Email: your-email@example.com</p>
        </div>
      </div>

      {/* Divider & Bottom */}
      <div className="border-t border-violet-700 mt-8 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} PersonalNotes. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
