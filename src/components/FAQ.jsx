import React from 'react'

const FAQ = () => {
  const faqs = [
    {
      question: 'Apa itu franchise PITCAR Service?',
      answer: 'Franchise PITCAR Service adalah sistem kerjasama bisnis di bidang bengkel mobil modern, di mana Anda mendapatkan hak untuk menggunakan merek, sistem operasional, dan dukungan penuh dari PITCAR Service.',
    },
    {
      question: 'Berapa modal yang diperlukan?',
      answer: 'Modal investasi bervariasi tergantung paket yang dipilih, mulai dari Rp 1,5M hingga Rp 2,1M.',
    },
    {
      question: 'Berapa lama pengembalian modal?',
      answer: 'Berdasarkan analisis keuangan terbaru, pengembalian modal diperkirakan antara 12-18 bulan.',
    },
    {
      question: 'Apa saja dukungan yang diberikan?',
      answer: 'Kami menyediakan dukungan lengkap termasuk sistem operasional, pelatihan tim, promosi, dan dukungan teknis.',
    },
    {
      question: 'Apakah ada syarat khusus untuk menjadi mitra?',
      answer: 'Syarat utama adalah memiliki lokasi strategis, modal investasi yang cukup, dan komitmen untuk menjalankan bisnis dengan baik.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            FAQ
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Pertanyaan yang sering diajukan tentang franchise PITCAR Service
          </p>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {faq.question}
              </h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;