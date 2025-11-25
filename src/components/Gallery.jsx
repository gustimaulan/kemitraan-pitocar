import pitcarFasad from '../images/pitcar-fasad.webp';
import pitcarRuangTunggu from '../images/pitcar-ruang-tunggu.webp';
import pitcarStall from '../images/pitcar-stall.webp';
import pitcarStall2 from '../images/pitcar-stall-2.webp';
import franchisePitcar from '../images/franchise-pitcar-image.webp';

const Gallery = () => {
  // PITCAR Service images
  const galleryImages = [
    {
      id: 1,
      src: pitcarFasad,
      alt: 'PITCAR Service - Fasade Bengkel',
      title: 'Fasad Bengkel Modern'
    },
    {
      id: 2,
      src: pitcarRuangTunggu,
      alt: 'PITCAR Service - Ruang Tunggu',
      title: 'Ruang Tunggu Nyaman'
    },
    {
      id: 3,
      src: pitcarStall,
      alt: 'PITCAR Service - Stall Servis',
      title: 'Stall Servis Lengkap'
    },
    {
      id: 4,
      src: pitcarStall2,
      alt: 'PITCAR Service - Stall Servis 2',
      title: 'Antrian Pengerjaan Servis'
    }
  ];

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Galeri <span className="text-[#B60203]">PITCAR Service</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Lihat fasilitas dan layanan kami yang telah membantu banyak pelanggan
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-block bg-[#B60203] hover:bg-[#B60203]/80 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
          >
            Jadwalkan Kunjungan
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;