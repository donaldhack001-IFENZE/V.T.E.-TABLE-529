import { MapPin, Phone, Clock, Facebook, Instagram } from 'lucide-react';
import { RESTAURANT_INFO } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-brand-brown text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 gradient-orange rounded-full flex items-center justify-center text-white font-black text-sm">529</div>
            <h4 className="text-xl font-black tracking-tighter uppercase whitespace-nowrap">V.T.E TABLE</h4>
          </div>
          <p className="text-[10px] uppercase tracking-[0.3em] font-black opacity-40 leading-relaxed">
            Crafting American traditions in the heart of Kansas since 2020.
          </p>
        </div>

        <div className="flex flex-col items-center gap-8 text-[10px] uppercase tracking-[0.4em] font-black">
          <div className="flex items-center gap-4 group cursor-pointer hover:text-brand-orange transition-colors">
            <MapPin size={16} className="text-brand-orange" />
            <span>{RESTAURANT_INFO.address}</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-orange transition-all">
              <Facebook size={16} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-orange transition-all">
              <Instagram size={16} />
            </a>
          </div>
        </div>

        <div className="text-right space-y-4">
          <div className="flex items-center justify-end gap-3 font-black text-[10px] uppercase tracking-widest text-brand-gold">
            <Clock size={16} />
            <span>Tue — Sat: 11am — 9pm</span>
          </div>
          <div className="text-[10px] uppercase tracking-[0.2em] font-black opacity-30">
            Closed Sunday & Monday
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center">
        <p className="text-[9px] uppercase tracking-[0.5em] font-black opacity-20">
          &copy; {new Date().getFullYear()} V.T.E Table 529. All Flavors Reserved.
        </p>
      </div>
    </footer>
  );
}
