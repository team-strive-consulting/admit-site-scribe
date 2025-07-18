
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-black/95 backdrop-blur-md shadow-2xl sticky top-0 z-50 border-b border-gray-500/20">
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
          className="bg-gradient-to-r from-gray-200 to-white text-black hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 font-bold px-6 py-2 rounded-full font-inter hover:from-gray-300 hover:to-gray-200"
        >
          Get Started
        </Button>
      </nav>
    </header>
  );
};

export default Header;
