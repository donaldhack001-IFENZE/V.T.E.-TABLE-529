import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Star } from 'lucide-react';
import { Dish } from '../types';

interface FoodItemModalProps {
  dish: Dish | null;
  onClose: () => void;
  onAddToCart: (dish: Dish) => void;
}

export default function FoodItemModal({ dish, onClose, onAddToCart }: FoodItemModalProps) {
  return (
    <AnimatePresence>
      {dish && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-brown/80 backdrop-blur-md z-[150]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-4xl bg-white z-[151] flex flex-col md:flex-row overflow-hidden shadow-[0_32px_128px_-16px_rgba(0,0,0,0.4)] rounded-[40px] border border-brand-border"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all shadow-lg active:scale-95"
            >
              <X size={20} />
            </button>

            <div className="md:w-1/2 h-64 md:h-auto relative">
              <img 
                src={dish.image} 
                alt={dish.name} 
                className="w-full h-full object-cover"
              />
              {dish.isPopular && (
                <div className="absolute top-8 left-8 gradient-orange text-white px-5 py-2 rounded-full text-[10px] uppercase font-black tracking-[0.2em] flex items-center gap-2 shadow-xl tasty-glow">
                  <Star size={12} fill="currentColor" /> Secret Recipe
                </div>
              )}
            </div>

            <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-brand-cream relative overflow-hidden">
               {/* Background detail */}
              <div className="absolute -bottom-10 -right-10 opacity-[0.03] rotate-12 pointer-events-none">
                <img src={dish.image} className="w-64 h-64 grayscale" />
              </div>

              <span className="uppercase tracking-[0.4em] text-[10px] font-black text-brand-orange mb-6 block">
                {dish.category}
              </span>
              <h2 className="text-5xl md:text-7xl mb-8 leading-[0.85] font-black tracking-tighter text-brand-brown">{dish.name}</h2>
              <p className="text-brand-brown/60 text-base md:text-lg leading-relaxed mb-12 font-medium">
                {dish.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-10 border-t border-brand-border">
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-black opacity-30 block mb-2">Price</span>
                  <span className="text-4xl font-serif italic font-black text-brand-orange">${dish.price.toFixed(2)}</span>
                </div>
                <button 
                  onClick={() => {
                    onAddToCart(dish);
                    onClose();
                  }}
                  className="gradient-orange text-white h-16 px-10 rounded-2xl uppercase tracking-[0.15em] text-[10px] font-black hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-xl tasty-glow"
                >
                  <Plus size={18} />
                  <span>Add to Order</span>
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
