import React from 'react'

const Hero = () => {
  return (
    <section className="hero text-white py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Bisa Punya Bengkel <br />
          Tanpa Pusing Urus Operasional <br />
          Bersama <span className="text-[#B60203]">PITCAR Service</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
          Raih peluang bisnis di industri otomotif yang terus berkembang dengan sistem franchise yang sudah terbukti.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a 
            href="#contact" 
            className="bg-[#B60203] hover:bg-[#B60203] text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
          >
            Daftar Sekarang
          </a>
          <a 
            href="#packages" 
            className="bg-transparent hover:bg-gray-800 border-2 border-white text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
          >
            Lihat Paket
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;