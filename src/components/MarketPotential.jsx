const MarketPotential = () => {
  const stats = [
    {
      number: '19jt+',
      title: 'Mobil Penumpang',
      description: 'Proyeksi jumlah mobil penumpang di Indonesia tahun 2025 (BPS)',
    },
    {
      number: '6jt+',
      title: 'Mobil Barang',
      description: 'Proyeksi jumlah mobil barang di Indonesia tahun 2025 (BPS)',
    },
    {
      number: '450+',
      title: 'Unit/Bulan',
      description: 'Volume layanan PITCAR Service saat ini di Purwokerto',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Potensi Pasar yang Besar</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Jumlah kendaraan di Indonesia terus bertumbuh pesat setiap tahunnya, menciptakan peluang bisnis yang sangat menjanjikan di industri perawatan mobil.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="text-5xl font-bold text-[#B60203] mb-4">{stat.number}</div>
              <h3 className="text-xl font-semibold mb-2">{stat.title}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketPotential