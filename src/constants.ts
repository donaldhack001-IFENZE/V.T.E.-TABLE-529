import { Dish, Testimonial } from './types';

export const RESTAURANT_INFO = {
  name: 'V.T.E Table 529',
  address: '529 Russell Ave, WaKeeney, Kansas, USA',
  phone: '(785) 743-2287',
  hours: [
    { day: 'Monday - Thursday', time: '11:00 AM - 8:00 PM' },
    { day: 'Friday - Saturday', time: '11:00 AM - 9:00 PM' },
    { day: 'Sunday', time: 'Closed' }
  ],
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com'
  }
};

export const MENU: Dish[] = [
  {
    id: '1',
    name: 'Pork Belly Sandwich',
    description: 'Our signature dish. Slow-roasted pork belly, artisan bun, house-made pickles, and a savory glaze that melts in your mouth.',
    price: 14.50,
    category: 'Sandwiches',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6e9460272?auto=format&fit=crop&q=80&w=800',
    isPopular: true
  },
  {
    id: '2',
    name: 'Chicken Alfredo Bowl',
    description: 'Rich and creamy house-made alfredo sauce tossed with fettuccine and topped with perfectly grilled chicken breast and fresh parsley.',
    price: 16.00,
    category: 'Pasta',
    image: 'https://images.unsplash.com/photo-1645112481338-35624be81cc7?auto=format&fit=crop&q=80&w=800',
    isPopular: true
  },
  {
    id: '3',
    name: 'Homemade Fries',
    description: 'Freshly cut in-house, double-fried for the perfect crunch, and seasoned with our secret blend of sea salt and herbs.',
    price: 5.50,
    category: 'Sides',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=800',
    isPopular: true
  },
  {
    id: '4',
    name: 'Steak & Frites',
    description: '8oz Top Sirloin grilled to your liking, served with a mountain of our famous homemade fries and garlic herb butter.',
    price: 24.00,
    category: 'Specials',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    name: 'Truffle Mac & Cheese',
    description: 'Three-cheese blend, white truffle oil, toasted breadcrumbs, and a hint of smoked paprika.',
    price: 12.00,
    category: 'Pasta',
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '6',
    name: 'Bison Burger',
    description: 'Lean local bison patty, caramelized onions, sharp cheddar, and horseradish aioli on a brioche bun.',
    price: 15.50,
    category: 'Sandwiches',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '7',
    name: 'Seasonal Garden Salad',
    description: 'Locally sourced greens, heirloom tomatoes, cucumber, shaved carrots, and a choice of house-made balsamic or ranch.',
    price: 9.00,
    category: 'Sides',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '8',
    name: 'Chef\'s "Trust Me" Special',
    description: 'Feeling adventurous? Let the chef decide your meal based on the freshest ingredients available today.',
    price: 18.00,
    category: 'Specials',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah J.',
    text: 'Absolutely phenomenal food. The pork belly sandwich is quite possibly the best thing I have ever eaten. 10/10 recommend!',
    rating: 5
  },
  {
    id: '2',
    name: 'Mike R.',
    text: 'Great food and friendly service. The atmosphere is warm and welcoming. We will definitely be back!',
    rating: 5
  },
  {
    id: '3',
    name: 'Emily D.',
    text: 'The chicken alfredo bowl was incredible. Huge portions and the sauce was so creamy. Best restaurant in WaKeeney!',
    rating: 5
  }
];
