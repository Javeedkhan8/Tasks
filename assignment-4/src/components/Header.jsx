import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative bg-white shadow-sm">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold flex items-center gap-2">
          <div className="w-5 h-5 bg-black rotate-45"></div>
          Positivus
        </div>

       
        <nav className="hidden md:flex gap-8 text-gray-800">
          <a href="#">About us</a>
          <a href="#">Services</a>
          <a href="#">Use Cases</a>
          <a href="#">Pricing</a>
          <a href="#">Blog</a>
        </nav>

    
        <button className="hidden md:block border border-gray-800 px-4 py-2 rounded-md hover:bg-gray-100">
          Request a quote
        </button>

     
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

  
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-4 text-gray-800">
          <a href="#" className="block">About us</a>
          <a href="#" className="block">Services</a>
          <a href="#" className="block">Use Cases</a>
          <a href="#" className="block">Pricing</a>
          <a href="#" className="block">Blog</a>
          <button className="w-full border border-gray-800 px-4 py-2 rounded-md hover:bg-gray-100">
            Request a quote
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
