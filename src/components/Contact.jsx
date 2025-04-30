// import { useSearchParams, Link } from "react-router-dom";

const Contact = () => {
  // const [searchParams] = useSearchParams();

  // // Convert current searchParams to a string
  // const queryString = searchParams.toString();
  const handleButtonClick = () => {
   window.fbq("track", "AddToCart");
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Hubungi <span className="text-[#B60203]">Kami</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Klik tombol berikut untuk mendapatkan informasi lebih lanjut
              tentang franchise PITCAR Service. Tim kami akan segera menghubungi
              Anda.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-start md:justify-end ">
            <a
              href="whatsapp://send?phone=6285647609172&text=halo%20Mincar%2C%20mohon%20info%20detail%20franchise%20Pitcar%20dong"
              className="rounded-md md:right-10 bg-green-700 hover:bg-green-800  text-white font-bold py-3 px-8 text-lg transition duration-300 animate-bounce"
              onClick={handleButtonClick}
            >
              <i className="fa-brands fa-whatsapp"></i>
              <span className="ml-2">Chat Admin Sekarang</span>
            </a>

            {/* <Link to={`/form?${queryString}`}>
              <button onClick={handleClick} className="w-full bg-[#B60203] text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#B60203] border-2 border-[#B60203] hover:shadow-md transition duration-300 ease-in-out animate-bounce">
                Hubungi Kami
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
