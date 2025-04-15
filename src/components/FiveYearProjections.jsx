import React from 'react'

const FiveYearProjections = () => {
  return (
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80" alt="Proyeksi 5 Tahun" className="rounded-xl shadow-lg w-full"/>
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Proyeksi <span className="text-[#B60203]">5 Tahun</span></h2>
                    <p className="text-gray-600 mb-6">Dengan model bisnis yang sudah teruji, outlet PITCAR Service menunjukkan pertumbuhan yang konsisten setiap tahunnya.</p>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <div className="bg-[#B60203] p-2 rounded-full mr-4">
                                <i className="fas fa-chart-line text-white"></i>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800">Order Bertumbuh</h4>
                                <p className="text-gray-600">Volume order meningkat signifikan tiap tahun</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-[#B60203] p-2 rounded-full mr-4">
                                <i className="fas fa-money-bill-wave text-white"></i>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800">Omzet Meningkat</h4>
                                <p className="text-gray-600">Pertumbuhan omzet rata-rata 25-30% per tahun</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-[#B60203] p-2 rounded-full mr-4">
                                <i className="fas fa-percentage text-white"></i>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800">Profit Margin Lebih Tinggi</h4>
                                <p className="text-gray-600">Efisiensi operasional meningkatkan profit margin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FiveYearProjections