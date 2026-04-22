import React from 'react';
import { ShoppingBag, Menu as MenuIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { RESTAURANT_INFO } from '../constants';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onNavigate: (page: string) => void;
  activePage: string;
}

export default function Navbar({ cartCount, onCartClick, onNavigate, activePage }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-xl py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-4 group cursor-pointer" onClick={() => onNavigate('home')}>
          <div className="w-12 h-12 gradient-orange rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg transition-transform group-hover:scale-110 tasty-glow">
            529
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-black tracking-tighter uppercase leading-none group-hover:text-brand-orange transition-colors">
              {RESTAURANT_INFO.name}
            </h1>
            <span className="text-[10px] uppercase tracking-[0.3em] font-black opacity-30">WaKeeney, Kansas</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {['home', 'menu', 'about', 'contact'].map((page) => (
            <button 
              key={page} 
              onClick={() => onNavigate(page)} 
              className={`nav-link ${activePage === page ? 'active' : ''}`}
            >
              {page === 'home' ? 'Home' : page === 'about' ? 'Our Story' : page.charAt(0) + page.slice(1)}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={onCartClick}
            className="group relative w-12 h-12 bg-brand-brown text-white rounded-full transition-all hover:scale-110 hover:bg-brand-orange shadow-lg tasty-glow flex items-center justify-center"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-red text-white text-[10px] w-6 h-6 flex items-center justify-center rounded-full font-black border-4 border-white animate-bounce">
                {cartCount}
              </span>
            )}
          </button>
          
          <button 
            className="md:hidden p-2 text-brand-brown hover:text-brand-orange transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-brand-border overflow-hidden"
          >
            <div className="py-8 px-6 space-y-6 flex flex-col items-center">
              {['home', 'menu', 'about', 'contact'].map((page) => (
                <button 
                  key={page}
                  onClick={() => { onNavigate(page); setIsOpen(false); }} 
                  className={`text-lg font-black uppercase tracking-widest ${activePage === page ? 'text-brand-orange' : 'text-brand-brown/60'}`}
                >
                  {page}
                </button>
              ))}
              <button 
                onClick={() => { onNavigate('menu'); setIsOpen(false); }}
                className="w-full gradient-orange text-white py-5 rounded-full uppercase tracking-[0.2em] text-xs font-black shadow-lg"
              >
                Order Online
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
