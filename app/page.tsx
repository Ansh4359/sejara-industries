'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, ShieldCheck, Phone, Mail, MapPin, Menu, X, ArrowRight, Star } from 'lucide-react';

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// --- Navbar Component ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 bg-stone-950/80 backdrop-blur-lg border-b border-stone-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="bg-green-900/50 border border-green-800 p-2 rounded-lg text-green-400">
              <Leaf className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold text-stone-100 tracking-tight">SEJARA</span>
              <span className="text-[10px] font-bold text-green-500 uppercase tracking-[0.2em]">Industries</span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {['Home', 'About', 'Products', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-medium text-stone-400 hover:text-green-400 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-lg shadow-green-900/40 hover:bg-green-500 transition-all"
            >
              Get a Quote
            </motion.button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-300 p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-stone-900 border-t border-stone-800"
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            {['Home', 'Products', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block px-3 py-3 text-lg font-medium text-stone-300 border-b border-stone-800">
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

// --- Hero Component ---
const Hero = () => (
  <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-stone-950 overflow-hidden">
    {/* Dark Mode Glow Effects */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-900/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-stone-800/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-stone-900 border border-stone-800 rounded-full">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-bold text-green-400 tracking-wider uppercase">100% Eco-Friendly & Sustainable</span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-serif font-bold text-stone-100 leading-[1.1]">
            Packaging that <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              Heals the Earth.
            </span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-xl text-stone-400 max-w-lg leading-relaxed">
            Premium biodegradable Dona, Pattal, and plates crafted from nature. Elevate your food service while preserving the planet.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-green-600 text-white rounded-xl font-semibold shadow-xl shadow-green-500/10 hover:bg-green-500 hover:shadow-green-500/20 transition-all flex items-center gap-2">
              Explore Catalogue <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 bg-transparent border border-stone-700 text-stone-300 rounded-xl font-semibold hover:border-green-500 hover:text-green-400 transition-all">
              Contact Sales
            </button>
          </motion.div>

          <motion.div variants={fadeInUp} className="pt-8 flex items-center gap-8 text-stone-500">
            <div className="flex items-center gap-1">
               <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
               <span className="font-bold text-stone-200">4.9/5</span>
               <span className="text-sm">Quality Rating</span>
            </div>
            <div className="h-4 w-px bg-stone-800"></div>
            <div className="text-sm">Trusted by <span className="font-bold text-stone-200">500+ Businesses</span></div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[500px] w-full"
        >
          {/* Dark Glassy Card Background for Image */}
          <div className="absolute inset-0 bg-stone-800/30 rounded-[2rem] rotate-3 backdrop-blur-sm border border-stone-800"></div>
          <div className="absolute inset-0  rounded-[2rem] overflow-hidden shadow-2xl border border-stone-700/50">
             {/* Main Hero Image */}
             <img 
               src="/images/contact.jpeg" 
               alt="Sejara Sustainable Products" 
               className="object-cover  w-full h-full hover:scale-105 transition-transform duration-700 opacity-90"
             />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// --- Features Component ---
const Features = () => {
  const features = [
    { icon: Recycle, title: "Zero Waste", desc: "Completely biodegradable products that turn into compost within 90 days." },
    { icon: ShieldCheck, title: "Food Grade Safe", desc: "Chemical-free manufacturing process ensuring safety for hot & cold foods." },
    { icon: Leaf, title: "Premium Texture", desc: "Natural leaf patterns and sturdy kraft textures that look and feel luxurious." },
  ];

  return (
    <section className="py-24 bg-stone-900 relative border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-stone-950 border border-stone-800 hover:border-green-900/50 hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-stone-900 rounded-xl flex items-center justify-center mb-6 text-green-500 border border-stone-800">
                <f.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-stone-100 mb-3">{f.title}</h3>
              <p className="text-stone-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// --- Products Component ---
const ProductCard = ({ title, category, image }: { title: string, category: string, image: string }) => (
  <motion.div 
    variants={fadeInUp}
    className="group relative bg-stone-900 rounded-2xl overflow-hidden cursor-pointer border border-stone-800 hover:border-stone-700 transition-colors"
  >
    <div className="aspect-[4/5] overflow-hidden bg-stone-800 relative">
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10 duration-500" />
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-in-out opacity-90 group-hover:opacity-100" 
      />
      
      {/* Quick Action Button */}
      <div className="absolute bottom-4 right-4 z-20 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <button className="bg-stone-900/90 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition border border-stone-700">
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
    
    <div className="p-5">
      <p className="text-xs font-bold text-green-500 uppercase tracking-widest mb-1">{category}</p>
      <h3 className="text-lg font-serif font-bold text-stone-200 group-hover:text-white transition-colors">{title}</h3>
    </div>
  </motion.div>
);

const Products = () => {
  const productList = [
    { title: "Round Leaf Texture Plate", category: "Dona & Pattal", image: "/images/pattal.jpeg" },
    { title: "Deep Dona Bowl", category: "Dona & Pattal", image: "/images/donga.jpeg" },
    { title: "Compartment Thali", category: "Dona & Pattal", image: "/images/pattal.jpeg" },
    { title: "Square Paper Plate", category: "Premium Range", image: "/images/donga2.jpeg" },
    { title: "Silver Paper Bowl", category: "Standard Range", image: "/images/donga.jpeg" },
    { title: "Plain Bagasse Plate", category: "Eco Essentials", image: "/images/contact.jpeg" },
    { title: "Heart Shape Bowl", category: "Specialty", image: "/images/contact2.jpeg" },
    { title: "Oval Serving Platter", category: "Dona & Pattal", image: "/images/donga.jpeg" },
  ];

  return (
    <section id="products" className="py-24 bg-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <span className="text-green-500 font-bold tracking-wider uppercase text-sm mb-2 block">Our Collection</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-100 mb-6">Sustainable Essentials</h2>
            <p className="text-lg text-stone-400">
              Meticulously crafted from renewable resources. Our products offer the perfect blend of rustic elegance and modern durability.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-green-400 font-bold hover:text-green-300 hover:gap-4 transition-all">
            View All Products <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {productList.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </motion.div>

        <div className="mt-12 text-center md:hidden">
          <button className="px-6 py-3 border border-stone-700 rounded-full text-stone-300 font-medium">View All Products</button>
        </div>
      </div>
    </section>
  );
};

// --- CTA Section ---
const CTA = () => (
  <section className="py-24 bg-green-950 relative overflow-hidden border-t border-green-900/50">
    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
    <div className="absolute top-0 right-0 w-96 h-96 bg-green-600 rounded-full blur-[120px] opacity-20"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-900 rounded-full blur-[100px] opacity-60"></div>
    
    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-serif font-bold text-white mb-8"
      >
        Ready to make the sustainable switch?
      </motion.h2>
      <motion.p 
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ delay: 0.1 }}
         className="text-green-100/80 text-xl mb-10"
      >
        Join 500+ businesses who have already switched to Sejara's eco-friendly packaging solutions.
      </motion.p>
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-green-500 text-stone-950 px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-green-400 transition"
      >
        Contact Us Today
      </motion.button>
    </div>
  </section>
);

// --- Footer Component ---
const Footer = () => (
  <footer id="contact" className="bg-black text-stone-400 pt-20 pb-10 border-t border-stone-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-12 mb-16 border-b border-stone-800 pb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <Leaf className="h-6 w-6 text-green-500" />
            <span className="text-2xl font-serif font-bold text-stone-100 tracking-wide">SEJARA</span>
          </div>
          <p className="max-w-sm text-stone-500 mb-8 leading-relaxed">
            Leading manufacturer and exporter of eco-friendly paper packaging solutions. We bridge the gap between functionality and sustainability.
          </p>
          <div className="flex gap-4">
             {/* Social placeholders */}
             {[1,2,3].map(i => (
               <div key={i} className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center hover:bg-green-600 hover:text-white hover:border-green-600 transition cursor-pointer">
                 <div className="w-4 h-4 bg-current rounded-sm"></div>
               </div>
             ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-stone-100 font-bold mb-6">Get in Touch</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-green-600 mt-0.5" />
              <span>+91 9015539885</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-green-600 mt-0.5" />
              <a href="mailto:sales@sejaraindustries.com" className="hover:text-green-500 transition">sales@sejaraindustries.com</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-green-600 mt-0.5" />
              <span>Greater Noida, Uttar Pradesh,<br/>India</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-stone-100 font-bold mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#home" className="hover:text-green-500 transition">Home</a></li>
            <li><a href="#products" className="hover:text-green-500 transition">Products Catalogue</a></li>
            <li><a href="#about" className="hover:text-green-500 transition">About Us</a></li>
            <li><a href="#contact" className="hover:text-green-500 transition">Request Quote</a></li>
          </ul>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-stone-600">
        <p>© {new Date().getFullYear()} Sejara Industries Pvt Ltd. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950 font-sans selection:bg-green-500 selection:text-black">
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <CTA />
      <Footer />
    </main>
  );
}