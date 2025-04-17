import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center max-w-6xl">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-800">PITCAR <span className="text-[#B60203]">Service</span></h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-700 hover:text-[#B60203] font-medium">Tentang Kami</a>
          <a href="#why" className="text-gray-700 hover:text-[#B60203] font-medium">Keunggulan</a>
          <a href="#packages" className="text-gray-700 hover:text-[#B60203] font-medium">Paket Franchise</a>
          <a href="#process" className="text-gray-700 hover:text-[#B60203] font-medium">Alur Kerjasama</a>
          <a href="#contact" className="text-gray-700 hover:text-[#B60203] font-medium">Kontak</a>
        </nav>
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="space-y-4 px-4 py-2">
            <a href="#about" className="block text-gray-700 hover:text-[#B60203] font-medium">Tentang Kami</a>
            <a href="#why" className="block text-gray-700 hover:text-[#B60203] font-medium">Keunggulan</a>
            <a href="#packages" className="block text-gray-700 hover:text-[#B60203] font-medium">Paket Franchise</a>
            <a href="#process" className="block text-gray-700 hover:text-[#B60203] font-medium">Alur Kerjasama</a>
            <a href="#contact" className="block text-gray-700 hover:text-[#B60203] font-medium">Kontak</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;