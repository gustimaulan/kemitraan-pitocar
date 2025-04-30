import basicPackageImage from '/src/images/basic-package-image.jpg';
import advancePackageImage from '/src/images/advance-package-image.jpg';
import completePackageImage from '/src/images/complete-package-image.jpg';

const Packages = () => {
  const packages = [
    {
      id: 'basic',
      title: 'Basic',
      price: 'Rp 600jt',
      features: [
        '4 stall Bengkel',
        'Luas 200 m2',
        'Tenaga Kerja 8 orang',
        'Peralatan basic',
        'Fasilitas basic',
        'Layanan basic',
        'Media Promosi',
        'Sistem POS Kasir'
      ],
      isPopular: false,
      image: basicPackageImage,
    },
    {
      id: 'advance',
      title: 'Advance',
      price: 'Rp 1,1M',
      features: [
        '8 stall bengkel',
        'Luas 578 m2',
        '18 tenaga kerja',
        'Peralatan lengkap',
        'Fasilitas lengkap',
        'Layanan lengkap',
        'Media Promosi',
        'Sistem POS Kasir'
      ],
      isPopular: true,
      badge: (
        <span className="absolute z-10 top-0 right-0 bg-[#B60203] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
          POPULAR
        </span>
      ),
      image: advancePackageImage,
    },
    {
      id: 'complete',
      title: 'Complete',
      price: 'Rp 2,1M',
      features: [
        '12 stall bengkel',
        'Luas 935 m2',
        '25 tenaga kerja',
        'Peralatan terlengkap',
        'Fasilitas terlengkap',
        'Layanan terlengkap',
        'Media Promosi',
        'Sistem POS Kasir',
      ],
      isPopular: false,
      image: completePackageImage,
    },
  ];

  return (
    <section id="packages" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Paket Franchise <span className="text-[#B60203]">PITCAR Service</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan dan kemampuan investasi Anda
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`package-card bg-white rounded-xl shadow-lg overflow-hidden flex flex-col justify-start relative ${
                pkg.isPopular ? 'popular' : ''
              }`}
            >
              {pkg.badge ? pkg.badge : null}
              <img
                src={pkg.image}
                alt={`${pkg.title} Package`}
                className="w-full h-48 object-cover mb-6"
              />
              <div className="p-6 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.title}</h3>
                <div className="text-4xl font-bold text-[#B60203] mb-4">{pkg.price}</div>
                <ul className="space-y-2 text-gray-600">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <i className="fas fa-check text-[#B60203] mt-1 mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="mt-12 block w-full bg-[#B60203] hover:bg-[#B60203]/80 text-white text-center font-bold py-3 rounded-lg transition duration-300">
                  Pilih Paket
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;