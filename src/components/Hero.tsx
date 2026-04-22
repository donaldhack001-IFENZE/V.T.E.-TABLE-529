import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';

interface HeroProps {
  onOrderClick: () => void;
}

export default function Hero({ onOrderClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2000" 
          alt="Delicious Food Spread"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-brown/90 via-brand-brown/40 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl text-white"
        >
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 backdrop-blur-md px-4 py-2 rounded-full mb-8 border border-brand-orange/30">
            <Star size={14} className="text-brand-gold fill-brand-gold" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">4.9/5 Best Food in WaKeeney</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl mb-8 leading-[0.85] tracking-tighter">
            Where Every <br />
            <span className="text-brand-orange">Bite</span> Tells a <br />
            <span className="italic font-light">Story.</span>
          </h1>
          
          <p className="text-lg md:text-xl font-medium opacity-80 mb-12 max-w-lg leading-relaxed">
            Hand-crafted American classics, farm-fresh ingredients, and a touch of WaKeeney soul. Experience a culinary journey like no other.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button 
              onClick={onOrderClick}
              className="w-full sm:w-auto pill-button gradient-orange text-white tasty-glow flex items-center justify-center gap-3 text-sm hover:scale-105"
            >
              Order Online Now
              <ArrowRight size={18} />
            </button>
            <button className="w-full sm:w-auto pill-button border-2 border-white/30 text-white hover:bg-white hover:text-brand-brown">
              Reserve a Table
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[10%] hidden xl:block"
      >
        <div className="w-48 h-48 rounded-[2rem] overflow-hidden border-8 border-white/10 shadow-2xl rotate-12 tasty-glow">
          <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-[15%] hidden xl:block"
      >
        <div className="w-40 h-40 rounded-full overflow-hidden border-8 border-brand-orange/20 shadow-2xl -rotate-6 tasty-glow">
          <img src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
        </div>
      </motion.div>
    </section>
  );
}
