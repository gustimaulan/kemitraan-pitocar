import { useSearchParams, Link } from 'react-router-dom';

const Contact = () => {
  const [searchParams] = useSearchParams();

  // Convert current searchParams to a string
  const queryString = searchParams.toString();
  
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Hubungi <span className="text-[#B60203]">Kami</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Isi formulir berikut untuk mendapatkan informasi lebih lanjut
              tentang franchise PITCAR Service. Tim kami akan segera menghubungi
              Anda.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-start md:justify-end ">
            <Link to={`/form?${queryString}`}>
              <button className="w-full bg-[#B60203] text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#B60203] border-2 border-[#B60203] hover:shadow-md transition duration-300 ease-in-out animate-bounce">
                Hubungi Kami
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
