import ReactPixel from 'react-facebook-pixel';

const options = {
  autoConfig: false, 
  autoLogAppEvents: false,
  debug: false,     
};

export const initFacebookPixel = () => {
  try {
    ReactPixel.init(import.meta.env.VITE_META_PIXEL_ID, null, options);
    ReactPixel.pageView(); 
  } catch (error) {
    console.error('Error initializing Meta Pixel:', error);
  }
};
