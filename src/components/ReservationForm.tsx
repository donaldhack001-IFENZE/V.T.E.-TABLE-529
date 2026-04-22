import React from 'react';
import { motion } from 'motion/react';
import { Users, Calendar as CalendarIcon, Clock } from 'lucide-react';

export default function ReservationForm() {
  const [status, setStatus] = React.useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20 px-8 bg-white border border-brand-brown/10 shadow-sm"
      >
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
          <CalendarIcon size={32} />
        </div>
        <h3 className="text-3xl mb-4">Reservation Requested!</h3>
        <p className="text-brand-brown/60 mb-8 max-w-sm mx-auto">
          We've received your request for a table. Our team will contact you shortly to confirm your booking.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-xs uppercase tracking-widest font-bold text-brand-accent border-b border-brand-accent/30 pb-1"
        >
          Make another reservation
        </button>
      </motion.div>
    );
  }

  return (
    <div className="tasty-card overflow-hidden flex flex-col md:flex-row shadow-2xl">
      <div className="md:w-1/2 p-12 lg:p-20 gradient-orange text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541544336715-dd0689408643?auto=format&fit=crop&q=80&w=1200" 
            className="w-full h-full object-cover opacity-20" 
            alt="Table setting"
          />
        </div>
        <div className="relative z-10">
          <span className="uppercase tracking-[0.4em] text-[10px] font-black opacity-60 mb-6 block">Join our table</span>
          <h2 className="text-5xl lg:text-8xl mb-8 leading-[0.85] text-white">Reserve Your <br /><span className="italic font-light">Experience</span></h2>
          <p className="opacity-80 text-sm leading-relaxed max-w-sm font-medium uppercase tracking-wider">
            Whether it's a family dinner, a romantic evening, or a special celebration, we'll make sure your table is waiting.
          </p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="md:w-1/2 p-12 lg:p-20 space-y-10 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="space-y-3">
            <label className="text-[10px] uppercase tracking-widest font-black opacity-30">Date</label>
            <div className="relative">
              <input 
                type="date" 
                required
                className="w-full py-4 border-b-2 border-brand-border outline-none focus:border-brand-orange transition-colors bg-transparent text-sm font-black"
              />
            </div>
          </div>
          <div className="space-y-3">
            <label className="text-[10px] uppercase tracking-widest font-black opacity-30">Time</label>
            <div className="relative">
              <input 
                type="time" 
                required
                className="w-full py-4 border-b-2 border-brand-border outline-none focus:border-brand-orange transition-colors bg-transparent text-sm font-black"
              />
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-[10px] uppercase tracking-widest font-black opacity-30">Number of Guests</label>
          <select className="w-full py-4 border-b-2 border-brand-border outline-none focus:border-brand-orange transition-colors bg-transparent text-sm font-black appearance-none cursor-pointer">
            {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
            <option value="9+">9+ Guests (Contact us)</option>
          </select>
        </div>

        <div className="space-y-3">
          <label className="text-[10px] uppercase tracking-widest font-black opacity-30">Contact Name</label>
          <input 
            type="text" 
            placeholder="John Doe"
            required
            className="w-full py-4 border-b-2 border-brand-border outline-none focus:border-brand-orange transition-colors bg-transparent text-sm font-black uppercase tracking-tight"
          />
        </div>

        <button 
          type="submit"
          className="w-full pill-button gradient-orange text-white font-black hover:scale-[1.02] shadow-xl tasty-glow mt-6"
        >
          Book Your Table
        </button>
      </form>
    </div>
  );
}
