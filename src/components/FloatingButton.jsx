import React from 'react';

const FloatingButton = () => {
  const handleButtonClick = () => {
    // Send the "addtocart" event
    window.fbq('track', 'AddToCart');
  };

  return (
    <div>
      {/* add floating button, mobile on center, desktop on right */}
      <a
        href="whatsapp://send?phone=6285647609172&text=halo%20Mincar%2C%20mohon%20info%20detail%20franchise%20Pitcar%20dong"
        className="fixed bottom-4 right-4 rounded-full md:right-10 bg-green-700 hover:bg-green-800  text-white font-bold py-3 px-8 text-lg transition duration-300"
        onClick={handleButtonClick}
      >
        <i className="fa-brands fa-whatsapp"></i>
        <span className="ml-2">Hubungi Kami</span>
      </a>
    </div>
  );
};

export default FloatingButton;