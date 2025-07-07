
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-gray-800/95 to-gray-900/90 backdrop-blur-xl rounded-3xl mx-4 my-8 p-16 text-center text-white shadow-2xl border border-gray-300/20">
      <div className="mb-8">
        <div className="w-full max-w-md mx-auto h-64 rounded-2xl shadow-xl border border-gray-300/20 flex items-center justify-center overflow-hidden">
          <img 
            src="/lovable-uploads/ee746fc2-e514-4a30-87f3-6ebad7515131.png" 
            alt="Strive Consulting Logo" 
            className="w-full h-full object-contain p-4"
          />
        </div>
      </div>
      
      <h1 className="font-inter text-6xl font-bold mb-4 text-white tracking-tight leading-tight">
        Your College Dreams, Our Expertise
      </h1>
      
      <p className="text-xl font-normal mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed tracking-wide font-inter">
        We're a team of college consultants who know the ins and outs of the college application process.
      </p>
      
      <Button 
        onClick={scrollToContact}
        className="bg-gradient-to-r from-gray-200 to-gray-300 text-gray-900 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 font-bold px-8 py-3 rounded-full text-lg font-inter hover:from-gray-300 hover:to-gray-400"
      >
        Schedule Consultation
      </Button>
    </section>
  );
};

export default Hero;
