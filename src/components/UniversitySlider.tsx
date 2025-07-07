
const UniversitySlider = () => {
  const universities = [
    "Yale University",
    "Cornell University", 
    "Columbia University",
    "Harvard University",
    "Princeton University",
    "Dartmouth College",
    "University of Pennsylvania",
    "Brown University"
  ];

  return (
    <div className="my-8 overflow-hidden rounded-2xl shadow-xl">
      <div className="flex animate-slide">
        {/* Duplicate the array to create seamless loop */}
        {[...universities, ...universities].map((university, index) => (
          <div 
            key={index}
            className="flex-shrink-0 w-80 h-48 mx-4 bg-gray-700 rounded-xl border-2 border-white/20 flex items-center justify-center"
          >
            <span className="text-white font-medium text-center px-4 font-inter">
              {university}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversitySlider;
