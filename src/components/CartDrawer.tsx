import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
}

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemove,
  onCheckout
}: CartDrawerProps) {
  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-brown/40 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-sm bg-white z-[101] shadow-2xl flex flex-col md:m-6 md:h-[calc(100vh-48px)] md:rounded-[40px] overflow-hidden border border-brand-border"
          >
            <div className="p-8 flex items-center justify-between border-b border-brand-border bg-brand-surface/30">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} className="text-brand-orange" />
                <h2 className="text-xl font-black tracking-tight uppercase">Your Order</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-brand-orange/10 rounded-full transition-colors text-brand-brown">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-30">
                  <ShoppingBag size={48} strokeWidth={1} className="mb-4 text-brand-orange" />
                  <p className="uppercase tracking-[0.2em] text-[10px] font-black">Your bag is empty</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="w-16 h-16 bg-brand-surface rounded-2xl overflow-hidden shrink-0 shadow-inner">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-black text-sm truncate pr-2 tracking-tight group-hover:text-brand-orange transition-colors">{item.name}</h4>
                        <span className="font-serif italic font-black text-brand-orange text-sm">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center bg-brand-surface rounded-full px-1 border border-brand-border">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-2 hover:text-brand-orange transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="px-2 text-xs font-black w-6 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-2 hover:text-brand-orange transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <button 
                          onClick={() => onRemove(item.id)}
                          className="text-brand-brown/20 hover:text-brand-red transition-colors p-2"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-8 border-t border-brand-border bg-brand-surface/50 space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between text-[10px] uppercase tracking-widest font-black">
                    <span className="opacity-40">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[10px] uppercase tracking-widest font-black">
                    <span className="opacity-40">Tax (8%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-end pt-4 border-t border-brand-border">
                    <span className="font-serif italic text-2xl font-black">Total</span>
                    <span className="font-sans font-black text-3xl text-brand-orange tracking-tighter">${total.toFixed(2)}</span>
                  </div>
                </div>
                <button 
                  onClick={onCheckout}
                  className="w-full gradient-orange text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all shadow-xl tasty-glow hover:scale-[1.02]"
                >
                  Complete Order
                </button>
                <div className="flex items-center justify-center gap-4 opacity-30">
                  <span className="text-[8px] font-black uppercase tracking-widest">Secure Payment</span>
                  <div className="flex gap-2">
                    <div className="w-6 h-4 bg-brand-brown rounded-sm" />
                    <div className="w-6 h-4 bg-brand-brown rounded-sm" />
                    <div className="w-6 h-4 bg-brand-brown rounded-sm" />
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
