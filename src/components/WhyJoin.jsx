import React from 'react'

const WhyJoin = () => {
  return (
    
  
  <section id="why" className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Keuntungan Bergabung dengan <span className="text-[#B60203]">PITCAR</span></h2>
                <p className="text-gray-600 max-w-3xl mx-auto">Berbagai manfaat yang akan Anda dapatkan ketika menjadi mitra franchise PITCAR Service</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="benefit-card bg-gray-50 p-8 rounded-xl transition duration-300">
                    <div className="text-[#B60203] text-4xl mb-4">
                        <i className="fas fa-chart-line"></i>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Sistem Teruji</h3>
                    <p className="text-gray-600">Sistem operasional yang sudah terbukti menghasilkan profit di outlet kami</p>
                </div>
                <div className="benefit-card bg-gray-50 p-8 rounded-xl transition duration-300">
                    <div className="text-[#B60203] text-4xl mb-4">
                        <i className="fas fa-hands-helping"></i>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Dukungan Penuh</h3>
                    <p className="text-gray-600">Tim profesional siap membantu dari pembangunan hingga operasional</p>
                </div>
                <div className="benefit-card bg-gray-50 p-8 rounded-xl transition duration-300">
                    <div className="text-[#B60203] text-4xl mb-4">
                        <i className="fas fa-trademark"></i>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Kekuatan Merek</h3>
                    <p className="text-gray-600">Manfaatkan brand awareness yang sudah kami bangun</p>
                </div>
                <div className="benefit-card bg-gray-50 p-8 rounded-xl transition duration-300">
                    <div className="text-[#B60203] text-4xl mb-4">
                        <i className="fas fa-ad"></i>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
                    <p className="text-gray-600">Strategi pemasaran digital modern untuk menarik pelanggan</p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default WhyJoin;