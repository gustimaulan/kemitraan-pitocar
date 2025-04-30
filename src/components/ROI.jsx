const ROI = () => {
  const roiData = [
    {
      title: 'Investasi Awal',
      value: 'Rp 1,5M - 2,1M',
      description: 'Bervariasi tergantung paket yang dipilih',
    },
    {
      title: 'Pengembalian Modal',
      value: '12-18 Bulan',
      description: 'Berdasarkan analisis keuangan terbaru',
    },
    {
      title: 'Omset Bulanan',
      value: 'Rp 50-70M',
      description: 'Rata-rata omset per bulan',
    },
    {
      title: 'Keuntungan Bersih',
      value: '25-35%',
      description: 'Margin keuntungan bersih',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Return on Investment
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Analisis keuangan yang menunjukkan potensi pengembalian investasi
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roiData.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-[#B60203] mb-4">{item.value}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ROI;