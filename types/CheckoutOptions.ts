import { CartItem } from './CartItem';

export interface CheckoutOptions {
  products: CartItem[];
  paymentMethod: string;
  comment?: string;
}
