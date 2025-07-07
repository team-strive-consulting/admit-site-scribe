
const UniversitySlider = () => {
  const universities = [
    { name: "Yale University", logo: "/lovable-uploads/7548261f-8665-4de5-bd6e-adaf65b3af56.png" },
    { name: "Cornell University", logo: "/lovable-uploads/3980b538-4ec6-462b-a1a8-2453ebccf550.png" },
    { name: "Columbia University", logo: "/lovable-uploads/20f8a8e0-1c66-49b5-9950-774cc3961472.png" },
    { name: "Harvard University", logo: "/lovable-uploads/ed4306a0-66fb-432f-a537-4080a7d95d56.png" },
    { name: "Princeton University", logo: "/lovable-uploads/0cf8172e-c184-4087-8f74-3dad1499fbf6.png" },
    { name: "Dartmouth College", logo: "/lovable-uploads/85e42857-2094-4bf4-a637-d6b50d0dde3a.png" },
    { name: "University of Pennsylvania", logo: "/lovable-uploads/2533bfef-5f22-441f-a58f-d155925dac30.png" },
    { name: "Brown University", logo: "/lovable-uploads/dcd55901-039d-4842-a2a2-40c6d397cef4.png" }
  ];

  return (
    <div className="my-8 overflow-hidden rounded-2xl shadow-xl">
      <div className="flex animate-slide">
        {/* Duplicate the array to create seamless loop */}
        {[...universities, ...universities].map((university, index) => (
          <div 
            key={index}
            className="flex-shrink-0 w-80 h-48 mx-4 bg-gray-100 rounded-xl border-2 border-gray-300 flex items-center justify-center p-4"
          >
            <img 
              src={university.logo} 
              alt={university.name}
              className="max-w-full max-h-full object-contain filter grayscale"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversitySlider;
