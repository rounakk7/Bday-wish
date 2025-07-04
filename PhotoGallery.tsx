import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Pic1 from './img/pic1.jpg';
// import Pic2 from './img/pic2.jpg';
// import Pic3 from './img/pic3.jpg';
// import Pic4 from './img/pic4.jpg';
// import Pic5 from './img/pic5.jpg';

interface Photo {
  url: string;
  caption: string;
}

const photos: Photo[] = [
  {
    url: Pic1,
    caption: "Happy Birthday to the one who knows all my secrets and still chooses to stay! Here's to another year of laughter, chaos, and making memories. "
  },
  // Additional images can be added here
];

interface PhotoGalleryProps {
  onComplete: () => void;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000); // Change image every 3 seconds
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <motion.div
      className="min-h-screen bg-pink-50 p-8 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-3xl text-center mb-8 text-pink-600 font-semibold">
        You are amazing❤️
      </h2>

      <div className="relative w-full max-w-md aspect-[9/16] max-h-[80vh]">
        <AnimatePresence mode="wait">
          {photos.map(
            (photo, index) =>
              index === currentIndex && (
                <motion.div
                  key={index}
                  className="absolute top-0 left-0 w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  <img
                    src={photo.url}
                    alt={`Memory ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg">
                    <p className="text-white text-lg text-center">
                      {photo.caption}
                    </p>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      <motion.button
        className="mt-8 bg-pink-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-pink-600"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onComplete}
      >
        Well I have written something for you, Madam Jii❤️
      </motion.button>
    </motion.div>
  );
};
