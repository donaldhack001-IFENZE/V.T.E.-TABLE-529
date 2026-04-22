import React from 'react';
import { motion } from 'motion/react';
import { Plus, Search, Star } from 'lucide-react';
import { Category, Dish } from '../types';
import { MENU } from '../constants';

interface MenuSectionProps {
  onAddToCart: (dish: Dish) => void;
  onSelectDish: (dish: Dish) => void;
}

const CATEGORIES: Category[] = ['Sandwiches', 'Pasta', 'Specials', 'Sides'];

export default function MenuSection({ onAddToCart, onSelectDish }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = React.useState<Category | 'All'>('All');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredMenu = MENU.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 relative">
          <div className="absolute -top-12 -left-12 opacity-[0.05] pointer-events-none hidden lg:block">
            <img src="https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&q=80&w=300" className="w-48 h-48 rotate-12 grayscale" />
          </div>
          <div>
            <span className="uppercase tracking-[0.3em] text-[10px] font-black text-brand-orange mb-4 block">Delight in every bite</span>
            <h2 className="text-5xl md:text-7xl max-w-xl font-black tracking-tighter">Craving Something <span className="text-brand-orange italic">Special?</span></h2>
          </div>
          
          <div className="w-full md:w-auto flex flex-col gap-6">
            <div className="relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-orange" size={16} />
              <input 
                type="text" 
                placeholder="Search delcious food..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-14 pr-8 py-5 bg-white border-2 border-brand-border rounded-[20px] outline-none focus:border-brand-orange w-full md:w-96 transition-all text-xs uppercase tracking-widest font-black shadow-xl"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <button 
                onClick={() => setActiveCategory('All')}
                className={`pill-button ${activeCategory === 'All' ? 'gradient-orange text-white' : 'bg-white text-brand-brown border-2 border-brand-border hover:border-brand-orange'}`}
              >
                All Flavors
              </button>
              {CATEGORIES.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`pill-button ${activeCategory === cat ? 'gradient-orange text-white' : 'bg-white text-brand-brown border-2 border-brand-border hover:border-brand-orange'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredMenu.map((dish, i) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="tasty-card group overflow-hidden"
                onClick={() => onSelectDish(dish)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {dish.isPopular && (
                    <div className="absolute top-4 left-4 gradient-orange text-white px-4 py-1.5 rounded-full text-[9px] uppercase font-black tracking-widest flex items-center gap-2 shadow-lg tasty-glow">
                      <Star size={10} fill="currentColor" /> Chef's Choice
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-brand-brown/80 to-transparent flex justify-end">
                    <div className="w-12 h-12 rounded-full gradient-orange flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform delay-100 shadow-xl">
                       <Plus size={24} />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-black tracking-tight leading-tight group-hover:text-brand-orange transition-colors">{dish.name}</h3>
                    <span className="text-xl font-serif font-black italic text-brand-orange">${dish.price.toFixed(2)}</span>
                  </div>
                  <p className="text-brand-brown/50 text-xs leading-relaxed line-clamp-2 mb-8 uppercase tracking-widest font-bold">
                    {dish.description}
                  </p>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(dish);
                    }}
                    className="w-full py-4 rounded-2xl bg-brand-brown text-white text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-brand-orange hover:tasty-glow"
                  >
                    Add to Order
                  </button>
                </div>
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
