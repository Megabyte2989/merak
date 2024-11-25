import React from "react";

const Gallery = () => {
  const heroStyle = {
    backgroundImage: "url('/Web_Photo_Editor.jpg')",
  };

  // Portfolio items with example images from the internet
  const items = [
    { title: "A Cinematic Journey", img: "https://example.com/images/camera.jpg" },
    { title: "Wedding Wonders", img: "https://example.com/images/wedding.jpg" },
    { title: "Corporate Stories", img: "https://example.com/images/corporate.jpg" },
    { title: "Aerial Adventures", img: "https://example.com/images/aerial.jpg" },
    { title: "Documentary Diaries", img: "https://example.com/images/documentary.jpg" },
    { title: "Event Captures", img: "https://example.com/images/events.jpg" },
  ];

  return (
    <div>
    <section
        className="bg-cover bg-center h-[400px] flex items-center justify-center"
        style={heroStyle}
    >
        <h1 className="text-4xl text-white font-extrabold mx-auto md:text-5xl">Our latest news</h1>
    </section>


      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Finest Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <div key={index} className="bg-purple-800 rounded-lg shadow-lg overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;