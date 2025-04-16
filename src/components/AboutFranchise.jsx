import React from 'react'
import FranchisePitcarImage from '/src/images/franchise-pitcar-image.webp';

const AboutFranchise = () => {
  const benefits = [
    {
      title: 'Merek Terkenal',
      description: 'Manfaatkan reputasi PITCAR yang sudah dikenal masyarakat',
    },
    {
      title: 'SOP Jelas',
      description: 'Standar operasional yang teruji untuk memastikan kualitas layanan',
    },
    {
      title: 'Pendampingan Bisnis',
      description: 'Tim ahli siap membantu Anda dari awal hingga operasional',
    },
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src={FranchisePitcarImage}
              alt="Bengkel PITCAR" 
              className="rounded-xl shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Apa Itu Franchise <span className="text-[#B60203]">PITCAR Service</span>?
            </h2>
            <p className="text-gray-600 mb-6">
              Franchise PITCAR Service adalah model bisnis dengan sistem yang sudah terbukti sukses di Purwokerto. Anda mendapatkan hak untuk menggunakan merek, sistem operasi, dan dukungan penuh dari kami.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-[#B60203] p-2 rounded-full mr-4">
                    <i className="fas fa-check text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFranchise;