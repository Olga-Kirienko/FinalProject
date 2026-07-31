import { LineItem } from './LineItem';

export interface OrderSummary {
  lineItems: LineItem[];
  subtotal: string;
  shipping: string;
  total: string;
}
