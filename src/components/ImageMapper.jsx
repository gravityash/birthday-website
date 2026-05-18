import React from 'react';

const allImages = [
  "WhatsApp Image 2026-05-18 at 2.02.23 AM.jpeg",
  "WhatsApp Image 2026-05-18 at 2.02.24 AM (1).jpeg",
  "WhatsApp Image 2026-05-18 at 2.02.24 AM.jpeg",
  "WhatsApp Image 2026-05-18 at 2.02.25 AM (1).jpeg",
  "WhatsApp Image 2026-05-18 at 2.02.25 AM (2).jpeg",
  "WhatsApp Image 2026-05-18 at 2.02.25 AM.jpeg",
  "WhatsApp Image 2026-05-18 at 2.02.26 AM.jpeg",
  "WhatsApp Image 2026-05-18 at 2.03.02 AM (1).jpeg",
  "WhatsApp Image 2026-05-18 at 2.03.02 AM.jpeg",
  "WhatsApp Image 2026-05-18 at 2.04.23 AM.jpeg",
  "WhatsApp Image 2026-05-18 at 2.04.24 AM (1).jpeg",
  "WhatsApp Image 2026-05-18 at 2.04.24 AM (2).jpeg",
  "WhatsApp Image 2026-05-18 at 2.04.24 AM.jpeg",
  "WhatsApp Image 2026-05-18 at 2.04.25 AM (1).jpeg",
  "WhatsApp Image 2026-05-18 at 2.04.25 AM (2).jpeg",
  "WhatsApp Image 2026-05-18 at 2.04.25 AM.jpeg",
  "WhatsApp Image 2026-05-18 at 2.04.26 AM (1).jpeg",
  "WhatsApp Image 2026-05-18 at 2.04.26 AM.jpeg"
];

const ImageMapper = () => {
  return (
    <section className="py-20 px-4 bg-gray-900 text-white mt-20">
      <h2 className="text-3xl font-bold text-center mb-10">Image Mapper (Temp)</h2>
      <p className="text-center mb-8 max-w-2xl mx-auto text-gray-300">
        Please look at these images and tell me which number corresponds to which category so I can lock them in perfectly!
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {allImages.map((name, index) => (
          <div key={index} className="flex flex-col items-center p-2 bg-gray-800 rounded-lg">
            <span className="bg-rose-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-2 shadow-lg -mt-4 z-10 text-xl border-2 border-white">
              {index + 1}
            </span>
            <img 
              src={`/images/${encodeURIComponent(name)}`} 
              alt={`Image ${index + 1}`} 
              className="w-full h-32 object-cover rounded shadow"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageMapper;
