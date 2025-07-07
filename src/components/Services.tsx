
const Services = () => {
  const services = [
    {
      title: "Essay Review",
      description: "A deep dive into the strengths and weaknesses of a draft and how we can take your essay to the next level"
    },
    {
      title: "College List", 
      description: "A brutally honest review of your application and where we think you should apply to maximize your success"
    }
  ];

  return (
    <section id="services" className="my-12">
      <h2 className="text-5xl font-semibold text-center mb-12 text-white tracking-tight font-inter">
        Our Services
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="bg-gray-700 p-8 rounded-2xl border-l-4 border-white border border-white/10 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4 text-white tracking-tight font-inter">
              {service.title}
            </h3>
            <p className="text-gray-300 leading-relaxed tracking-wide font-inter">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
