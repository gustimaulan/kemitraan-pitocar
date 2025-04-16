import React from 'react'

const AboutCompany = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Tentang <span className="text-[#B60203]">PITCAR Service</span></h2>
                    <p className="mb-6 text-gray-300">Berdiri di tengah pandemi tahun 2021 dengan layanan home service, PITCAR Service kini telah berkembang menjadi bengkel modern dengan sistem ERP yang canggih.</p>
                    <p className="mb-8 text-gray-300">Kami melayani 400-450 unit per bulan dengan lebih dari 350 pelanggan tetap di Purwokerto, membuktikan kepercayaan masyarakat terhadap layanan kami.</p>
                    <div className="bg-[#B60203] inline-block px-6 py-3 rounded-lg">
                        <h3 className="font-bold text-white">Visi Kami</h3>
                        <p className="text-white">"Hadirkan ekosistem perawatan mobil terbaik di Indonesia"</p>
                    </div>
                </div>
                <div className="md:w-1/2 grid grid-cols-2 gap-4">
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <div className="text-[#B60203] text-4xl mb-3">
                            <i className="fas fa-car-crash"></i>
                        </div>
                        <h4 className="font-bold mb-2">Perawatan Berkala</h4>
                        <p className="text-gray-300">Layanan rutin untuk menjaga performa kendaraan</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <div className="text-[#B60203] text-4xl mb-3">
                            <i className="fas fa-snowflake"></i>
                        </div>
                        <h4 className="font-bold mb-2">Perbaikan AC</h4>
                        <p className="text-gray-300">Spesialis perbaikan sistem pendingin mobil</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <div className="text-[#B60203] text-4xl mb-3">
                            <i className="fas fa-oil-can"></i>
                        </div>
                        <h4 className="font-bold mb-2">Ganti Oli</h4>
                        <p className="text-gray-300">Layanan cepat ganti oli dengan produk berkualitas</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <div className="text-[#B60203] text-4xl mb-3">
                            <i className="fas fa-car-side"></i>
                        </div>
                        <h4 className="font-bold mb-2">Sistem Rem & Kaki-kaki</h4>
                        <p className="text-gray-300">Perawatan komponen keselamatan kendaraan</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutCompany