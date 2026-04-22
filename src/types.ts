export type Category = 'Sandwiches' | 'Pasta' | 'Specials' | 'Sides';

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  isPopular?: boolean;
}

export interface CartItem extends Dish {
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}
