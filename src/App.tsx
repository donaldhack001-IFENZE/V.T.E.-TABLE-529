import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import Testimonials from './components/Testimonials';
import ReservationForm from './components/ReservationForm';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { Dish, CartItem } from './types';
import { RESTAURANT_INFO, MENU } from './constants';
import { MapPin, Phone, Clock, Mail, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import FoodItemModal from './components/FoodItemModal';

export default function App() {
  const [activePage, setActivePage] = React.useState('home');
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [checkoutStatus, setCheckoutStatus] = React.useState<'idle' | 'success'>('idle');
  const [selectedDish, setSelectedDish] = React.useState<Dish | null>(null);

  const addToCart = (dish: Dish) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === dish.id);
      if (existing) {
        return prev.map(item => item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...dish, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => {
      return prev.map(item => {
        if (item.id === id) {
          const newQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      });
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    setCheckoutStatus('success');
    setCartItems([]);
    setTimeout(() => {
      setCheckoutStatus('idle');
      setIsCartOpen(false);
    }, 3000);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'menu':
        return (
          <div className="pt-20">
            <MenuSection 
              onAddToCart={addToCart} 
              onSelectDish={setSelectedDish}
            />
          </div>
        );
      case 'contact':
        return (
          <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
               <div>
                  <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-brand-accent mb-4 block">Get in touch</span>
                  <h1 className="text-6xl md:text-8xl mb-12">Visit Us in <br /><span className="italic font-light">WaKeeney</span></h1>
                  
                  <div className="space-y-12 mb-20">
                    <div className="flex gap-6">
                      <div className="w-12 h-12 bg-white border border-brand-brown/10 flex items-center justify-center shrink-0">
                        <MapPin size={20} className="text-brand-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold uppercase tracking-widest text-xs mb-2 opacity-40">Our Location</h3>
                        <p className="text-lg">{RESTAURANT_INFO.address}</p>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <div className="w-12 h-12 bg-white border border-brand-brown/10 flex items-center justify-center shrink-0">
                        <Phone size={20} className="text-brand-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold uppercase tracking-widest text-xs mb-2 opacity-40">Phone Number</h3>
                        <p className="text-lg">{RESTAURANT_INFO.phone}</p>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <div className="w-12 h-12 bg-white border border-brand-brown/10 flex items-center justify-center shrink-0">
                        <Clock size={20} className="text-brand-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold uppercase tracking-widest text-xs mb-2 opacity-40">Regular Hours</h3>
                        <div className="space-y-1">
                           {RESTAURANT_INFO.hours.map((h, i) => (
                             <div key={i} className="flex justify-between w-64 text-sm">
                               <span className="font-medium">{h.day}</span>
                               <span className="opacity-60">{h.time}</span>
                             </div>
                           ))}
                        </div>
                      </div>
                    </div>
                  </div>
               </div>

               <div className="space-y-12">
                  <div className="aspect-square bg-white border border-brand-brown/10 shadow-sm relative overflow-hidden flex items-center justify-center grayscale">
                      <img 
                        src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200" 
                        alt="Map Placeholder" 
                        className="w-full h-full object-cover opacity-50"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand-brown/20 p-12 text-center text-white">
                        <MapPin size={48} className="mb-6 animate-pulse" />
                        <h3 className="text-2xl font-serif mb-4">Interactive Map</h3>
                        <p className="text-sm opacity-80 mb-8">We're located right on Russell Ave. We can't wait to see you!</p>
                        <a 
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(RESTAURANT_INFO.address)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="bg-white text-brand-brown px-8 py-4 uppercase text-[10px] font-bold tracking-widest hover:bg-brand-accent hover:text-white transition-colors"
                        >
                          Open in Google Maps
                        </a>
                      </div>
                  </div>
               </div>
             </div>
          </div>
        );
      case 'about':
        return (
          <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                <div className="aspect-[3/4] bg-brand-brown/5 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1550966841-3ee204128549?auto=format&fit=crop&q=80&w=1200" 
                    alt="Our Story" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-accent p-12 text-white hidden lg:flex flex-col justify-end">
                   <h4 className="text-4xl font-serif italic mb-2">4.9/5</h4>
                   <p className="uppercase tracking-widest text-[10px] font-bold opacity-60">Guest Satisfaction</p>
                </div>
              </div>
              <div>
                <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-brand-accent mb-4 block">Our Passion</span>
                <h2 className="text-6xl mb-12">Exceptional Food, <br /><span className="italic font-light">Warm Hospitality</span></h2>
                <div className="space-y-6 text-brand-brown/70 leading-relaxed max-w-xl">
                  <p>
                    V.T.E Table 529 began with a simple dream: to bring high-quality, artisan-inspired American cuisine to the heart of WaKeeney. We believe that a meal is more than just food; it's an experience shared between friends, families, and neighbors.
                  </p>
                  <p>
                    Every dish on our menu is crafted from scratch using the freshest local ingredients we can find. From our signature 24-hour pork belly to our hand-cut fries, we never take shortcuts when it comes to flavor.
                  </p>
                  <p>
                    Whether you're a local regular or just passing through on the I-70, we invite you to take a seat at our table and experience the friendly service and culinary excellence that has made us a 4.9-star favorite.
                  </p>
                </div>
                <button 
                  onClick={() => setActivePage('menu')}
                  className="mt-12 group flex items-center gap-4 py-5 px-10 bg-brand-brown text-white uppercase tracking-widest text-xs font-bold hover:bg-brand-accent transition-all duration-500"
                >
                  Explore the Menu
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <>
            <Hero onOrderClick={() => setActivePage('menu')} />
            
            <section className="py-32 px-6 max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-brand-accent block">The Signature</span>
                  <h2 className="text-5xl md:text-7xl leading-tight">Our Famous <br /><span className="italic font-light">Pork Belly Sandwich</span></h2>
                  <p className="text-brand-brown/60 leading-relaxed max-w-md">
                    Slow-roasted for 24 hours, finished with a house-made glaze and served on a toasted artisan bun. There's a reason people travel for this.
                  </p>
                  <button 
                    onClick={() => setActivePage('menu')}
                    className="py-5 px-10 border border-brand-brown/10 uppercase tracking-widest text-xs font-bold hover:bg-brand-brown hover:text-white transition-all duration-500"
                  >
                    View Selection
                  </button>
                </div>
                <div 
                  className="relative aspect-[4/5] bg-brand-brown/5 overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedDish(MENU[0])}
                >
                   <img 
                    src="https://images.unsplash.com/photo-1529692236671-f1f6e9460272?auto=format&fit=crop&q=80&w=1200" 
                    alt="Pork Belly Highlight" 
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                   />
                </div>
              </div>
            </section>

            <MenuSection 
              onAddToCart={addToCart} 
              onSelectDish={setSelectedDish}
            />

            <section className="py-32 bg-brand-cream/50">
              <div className="max-w-7xl mx-auto px-6">
                <ReservationForm />
              </div>
            </section>

            <Testimonials />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar 
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} 
        onCartClick={() => setIsCartOpen(true)}
        onNavigate={setActivePage}
        activePage={activePage}
      />
      
      <main>
        {renderPage()}
      </main>

      <FoodItemModal 
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onAddToCart={addToCart}
      />

      <Footer />

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-10 left-10 z-[80] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl tasty-glow hover:rotate-12 transition-transform cursor-pointer"
        aria-label="Order via WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </motion.a>

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onCheckout={handleCheckout}
      />

      <AnimatePresence>
        {checkoutStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-brand-brown/90 backdrop-blur-xl p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white p-12 text-center max-w-sm w-full"
            >
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                 <ShoppingBag size={32} />
              </div>
              <h3 className="text-3xl font-serif mb-4">Order Received!</h3>
              <p className="text-brand-brown/60 mb-8">
                Thank you for your order. We're preparing your meal now. Please pick it up at the counter in 20-30 minutes.
              </p>
              <div className="py-4 border-t border-brand-brown/5 text-[10px] uppercase tracking-widest font-bold opacity-40">
                Order #529-{Math.floor(Math.random() * 10000)}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ShoppingBag({ size }: { size: number }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  );
}

