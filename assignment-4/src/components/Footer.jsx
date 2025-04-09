import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white px-6 py-10 sm:py-14">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        
    
        <div>
          <h2 className="text-xl font-bold mb-4">Positivus</h2>
          <span className="inline-block bg-lime-300 text-black text-xs font-semibold px-2 py-1 rounded mb-3">
            Contact us:
          </span>
          <p className="text-sm mb-1">Email: info@positivus.com</p>
          <p className="text-sm mb-1">Phone: 555-567-8901</p>
          <p className="text-sm">Address: 1234 Main St<br />Moonstone City, Stardust State 12345</p>
        </div>

        <div className="flex flex-col md:items-center">
          <ul className="flex flex-col md:flex-row gap-4 text-sm text-white mb-4">
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Use Cases</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
          <div className="flex gap-3 mt-2">
            <div className="bg-white rounded-full p-1">
              <Linkedin className="w-4 h-4 text-black" />
            </div>
            <div className="bg-lime-300 rounded-full p-1">
              <Facebook className="w-4 h-4 text-black" />
            </div>
            <div className="bg-white rounded-full p-1">
              <Twitter className="w-4 h-4 text-black" />
            </div>
          </div>
        </div>

        <div>
          <form className="bg-zinc-800 rounded-xl p-4 flex gap-2 items-center">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 text-sm text-white bg-transparent border border-gray-400 rounded focus:outline-none"
            />
            <button type="submit" className="bg-lime-300 text-black font-semibold px-4 py-2 rounded">
              Subscribe to news
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © 2023 Positivus. All Rights Reserved. <a href="#" className="underline">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
