import React from 'react'

const Comparison = () => {
  const franchiseBenefits = [
    'Sistem siap pakai dengan SOP teruji',
    'Dukungan penuh dari tim ahli',
    'Promosi bersama dengan kekuatan merek',
    'Risiko bisnis lebih rendah',
    'Modal investasi lebih efisien'
  ];

  const independentBenefits = [
    'Memulai dari nol',
    'Belajar sistem operasional',
    'Membangun merek sendiri',
    'Risiko bisnis lebih tinggi',
    'Modal investasi lebih besar'
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Franchise vs Usaha Sendiri
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Mengapa memilih franchise PITCAR lebih menguntungkan dibanding membangun bengkel sendiri?
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-green-50 border border-green-400 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-[#B60203] p-3 rounded-lg mr-4">
                <i className="fas fa-store text-white text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Franchise PITCAR</h3>
            </div>
            <ul className="space-y-4">
              {franchiseBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <i className="fas fa-check text-green-600 mt-1 mr-3"></i>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 border border-red-400 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-gray-800 p-3 rounded-lg mr-4">
                <i className="fas fa-store text-white text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Usaha Sendiri</h3>
            </div>
            <ul className="space-y-4">
              {independentBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <i className="fas fa-times text-red-600 mt-1 mr-3"></i>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;