
const Stats = () => {
  const stats = [
    { number: "1570", label: "Average SAT Score" },
    { number: "36", label: "Average ACT Score" },
    { number: "4.0", label: "Average GPA" }
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="bg-gradient-to-br from-gray-700 to-gray-800 text-white p-8 rounded-2xl text-center transform hover:-translate-y-2 transition-all duration-300 border border-white/10 hover:shadow-xl"
        >
          <div className="text-6xl font-bold mb-2 tracking-tight font-inter">
            {stat.number}
          </div>
          <div className="text-lg font-medium opacity-90 tracking-wider uppercase font-inter">
            {stat.label}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Stats;
