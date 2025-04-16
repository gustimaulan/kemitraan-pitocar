import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-[#B60203] p-2 rounded-lg mr-3">
                <i className="fas fa-car text-white text-2xl"></i>
              </div>
              <h1 className="text-2xl font-bold text-white">PITCAR <span className="text-[#B60203]">Service</span></h1>
            </div>
            <p className="text-gray-400 mb-4">Bisnis bengkel mobil modern dengan sistem franchise yang terbukti sukses.</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/pitcarservice" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com/pitcar.service" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Menu</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white">Tentang Kami</a></li>
              <li><a href="#why" className="text-gray-400 hover:text-white">Keunggulan</a></li>
              <li><a href="#packages" className="text-gray-400 hover:text-white">Paket Franchise</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-white">Alur Kerjasama</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Kontak</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Kontak</h3>
            <ul className="space-y-2">
              <li><i className="fas fa-phone text-[#B60203] mr-2"></i> +62-856-4760-9172</li>
              <li><i className="fas fa-envelope text-[#B60203] mr-2"></i> franchise@pitcar.co.id</li>
              <li><i className="fas fa-map-marker-alt text-[#B60203] mr-2"></i> Jl. Pancurawis No.14, Kec. Purwokerto Selatan, Banyumas, 53147</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Jam Operasional</h3>
            <ul className="space-y-2">
              <li><span className="text-[#B60203]">Setiap Hari:</span> 08:00 - 17:00</li>
              <li><span className="text-[#B60203]">Libur Nasional:</span> Libur</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          2025 PITCAR Service. Hak Cipta Dilindungi.
        </div>
      </div>
    </footer>
  );
};

export default Footer;