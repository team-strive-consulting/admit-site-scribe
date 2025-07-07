
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-gray-900/95 backdrop-blur-md shadow-2xl sticky top-0 z-50 border-b border-white/10">
      <nav className="container mx-auto px-5 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white font-inter">
          Strive Consulting
        </a>
        
        <ul className="hidden md:flex space-x-8 font-inter">
          <li>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white font-medium transition-colors duration-300"
            >
              About
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-white font-medium transition-colors duration-300"
            >
              Services
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-gray-300 hover:text-white font-medium transition-colors duration-300"
            >
              Team
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white font-medium transition-colors duration-300"
            >
              Contact
            </button>
          </li>
        </ul>

        <Button 
          onClick={() => scrollToSection('contact')}
          className="bg-gradient-to-r from-white to-gray-200 text-gray-900 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 font-bold px-6 py-2 rounded-full font-inter"
        >
          Get Started
        </Button>
      </nav>
    </header>
  );
};

export default Header;
