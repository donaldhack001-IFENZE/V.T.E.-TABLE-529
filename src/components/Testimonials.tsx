import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export default function Testimonials() {
  return (
    <section className="py-32 bg-brand-muted overflow-hidden px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="uppercase tracking-[0.4em] text-[10px] font-black opacity-30 mb-4 block">The experience</span>
          <h2 className="text-5xl md:text-6xl italic font-light">What our guests say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative p-10 bg-white rounded-[40px] border border-brand-border flex flex-col justify-center shadow-sm"
            >
              <div className="flex gap-1 mb-4 text-brand-accent">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-xl font-serif italic mb-6 leading-snug">"{t.text}"</p>
              <span className="uppercase tracking-[0.2em] text-[10px] font-black opacity-30">— {t.name}</span>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <div className="inline-flex items-center gap-4 py-4 px-8 border border-white/10">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-brown bg-brand-cream/20" />
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1">
                <span className="font-bold">4.9/5</span>
                <div className="flex text-brand-accent">
                  {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="currentColor" />)}
                </div>
              </div>
              <p className="text-[10px] uppercase tracking-widest opacity-40">From 29+ reviews on Google</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
