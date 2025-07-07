
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import UniversitySlider from "@/components/UniversitySlider";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 font-inter">
      <Header />
      
      <div className="container mx-auto px-4">
        <Hero />
        
        <main className="bg-gray-900/95 rounded-3xl my-8 p-12 shadow-2xl border border-gray-600/20">
          <section id="about" className="mb-12">
            <h2 className="text-5xl font-semibold text-center mb-12 text-white tracking-tight font-inter">
              Crafting Your Success Story
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed tracking-wide font-inter">
              <p>
                The college admissions landscape is evolving—fast. Simply checking boxes with awards, extracurriculars, and test scores isn't enough anymore. Top schools are looking for authenticity, depth, and a compelling narrative that sets you apart from thousands of other applicants.
              </p>
              
              <p>
                Old-school, one-size-fits-all applications no longer make the cut. Our counselors work with you to craft an application that breaks the mold—helping you transform your profile from just another boring candidate into the unforgettable one admissions officers remember.
              </p>
              
              <p>
                Through a strategic roadmap, personalized timelines, and intentional storytelling, we'll help you elevate every part of your application—turning it from *every other application* into *the* application.
              </p>
            </div>
          </section>

          <Stats />

          <section id="team" className="my-12">
            <h2 className="text-5xl font-semibold text-center mb-12 text-white tracking-tight font-inter">
              Acceptances
            </h2>
            <UniversitySlider />
          </section>

          <Services />
        </main>

        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
