import React from 'react'

const Process = () => {
  return (
    <section id="process" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Alur <span className="text-[#B60203]">Kerjasama</span></h2>
                <p className="text-gray-600 max-w-3xl mx-auto">Proses menjadi mitra franchise PITCAR Service sangat mudah dan transparan</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                <div className="timeline-step text-center mb-8 md:mb-0">
                    <div className="bg-[#B60203] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-xl">1</span>
                    </div>
                    <h3 className="font-bold">Pengajuan</h3>
                    <p className="text-gray-600 text-sm">Isi formulir pendaftaran</p>
                </div>
                <div className="timeline-step text-center mb-8 md:mb-0">
                    <div className="bg-[#B60203] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-xl">2</span>
                    </div>
                    <h3 className="font-bold">Proposal</h3>
                    <p className="text-gray-600 text-sm">Terima dokumen proposal</p>
                </div>
                <div className="timeline-step text-center mb-8 md:mb-0">
                    <div className="bg-[#B60203] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-xl">3</span>
                    </div>
                    <h3 className="font-bold">Pitching</h3>
                    <p className="text-gray-600 text-sm">Presentasi bisnis</p>
                </div>
                <div className="timeline-step text-center mb-8 md:mb-0">
                    <div className="bg-[#B60203] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-xl">4</span>
                    </div>
                    <h3 className="font-bold">Survei Lokasi</h3>
                    <p className="text-gray-600 text-sm">Analisis kelayakan lokasi</p>
                </div>
                <div className="timeline-step text-center">
                    <div className="bg-[#B60203] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-xl">5</span>
                    </div>
                    <h3 className="font-bold">Deal & Operasional</h3>
                    <p className="text-gray-600 text-sm">Pembangunan dan pelatihan</p>
                </div>
            </div>
            <div className="text-center">
                <a href="#contact" className="inline-block bg-[#B60203] hover:bg-[#B60203] text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">Mulai Proses Sekarang</a>
            </div>
        </div>
    </section>
  )
}

export default Process