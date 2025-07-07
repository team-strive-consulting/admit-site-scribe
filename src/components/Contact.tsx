
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon to schedule your consultation.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900 p-12 rounded-3xl text-center my-12">
      <h2 className="text-5xl font-semibold mb-6 text-gray-900 font-inter">
        Ready to Start Your Journey?
      </h2>
      
      <p className="text-gray-800 text-xl mb-8 font-inter">
        Let's discuss how we can help you achieve your college dreams
      </p>
      
      <form onSubmit={handleSubmit} className="grid gap-4 max-w-lg mx-auto">
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-4 border border-gray-400 rounded-xl font-inter bg-white/90 text-gray-900 focus:border-gray-600 focus:ring-2 focus:ring-gray-600/20"
        />
        
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-4 border border-gray-400 rounded-xl font-inter bg-white/90 text-gray-900 focus:border-gray-600 focus:ring-2 focus:ring-gray-600/20"
        />
        
        <Input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="p-4 border border-gray-400 rounded-xl font-inter bg-white/90 text-gray-900 focus:border-gray-600 focus:ring-2 focus:ring-gray-600/20"
        />
        
        <textarea
          name="message"
          placeholder="Tell us about your college goals..."
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="p-4 border border-gray-400 rounded-xl font-inter bg-white/90 text-gray-900 focus:border-gray-600 focus:ring-2 focus:ring-gray-600/20 focus:outline-none resize-none"
        />
        
        <Button 
          type="submit"
          className="bg-gray-900 text-white p-4 rounded-full font-bold text-lg hover:-translate-y-0.5 transition-all duration-300 font-inter hover:bg-gray-800"
        >
          Schedule Free Consultation
        </Button>
      </form>
    </section>
  );
};

export default Contact;
