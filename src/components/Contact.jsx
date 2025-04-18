import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactPixel from 'react-facebook-pixel';
import ScalevForm from './ScalevForm';

const Contact = () => {
  const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;
  const navigate = useNavigate(); // ← initialize the hook
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    package: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  
    try {
      // Send data to webhook
      await fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      // Optional: reset the form
      setFormData({
        name: '',
        email: '',
        phone: '',
        package: '',
      });

      // Track "Lead" event
    ReactPixel.track('Lead', {
      content_name: 'Contact Form',
    });
  
      // Redirect to thank you page
      navigate('/thankyou');
    } catch (error) {
      console.error('Error submitting to webhook:', error);
      // Optionally show error to user
    }
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
              Isi formulir berikut untuk mendapatkan informasi lebih lanjut
              tentang franchise PITCAR Service. Tim kami akan segera menghubungi
              Anda.
            </p>
            {/* <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-[#B60203] p-3 rounded-lg mr-4">
                  <i className="fas fa-map-marker-alt text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Kantor Pusat</h4>
                  <p className="text-gray-600">
                    Jl. Pancurawis No.14, Kec. Purwokerto Selatan, Banyumas,
                    Jawa Tengah, 53147{" "}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#B60203] p-3 rounded-lg mr-4">
                  <i className="fa-brands fa-whatsapp-square text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">WhatsApp</h4>
                  <p className="text-gray-600">+62-856-4760-9172</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#B60203] p-3 rounded-lg mr-4">
                  <i className="fas fa-envelope text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Email</h4>
                  <p className="text-gray-600">franchise@pitcar.co.id</p>
                </div>
              </div>
            </div> */}
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-end ">
            {/* Tombol di new tab dengan icon external link  dan animasi gerak */}
            <a target='_blank' rel='noopener noreferrer' href="https://pitcar-service.myscalev.com/franchise-form" className="inline-block bg-green-700 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 animate-bounce ease-in-out">
            Klik Disini Untuk Dapat Infonya
            <i className="fas fa-external-link-alt ml-2"></i>
            </a>
            {/* <form
              onSubmit={handleSubmit}
              className="bg-gray-50 p-8 rounded-xl shadow-md"
            >
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B60203]"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B60203]"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium mb-2"
                >
                  No. WhatsApp
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B60203]"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="package"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Minat Paket Franchise
                </label>
                <select
                  id="package"
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B60203]"
                  required
                >
                  <option value="">Pilih Paket</option>
                  <option value="basic">Basic (Rp 600jt)</option>
                  <option value="advance">Advance (Rp 1,1M)</option>
                  <option value="complete">Complete (Rp 2,1M)</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-[#B60203] text-white font-bold py-3 rounded-lg hover:bg-[#B60203]/80  transition duration-300"
                disabled={isSubmitted}
              >
                {isSubmitted ? "Submitting..." : "Kirim Pesan"}
              </button>
            </form> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
