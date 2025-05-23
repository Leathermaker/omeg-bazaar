export type ProductImage = {
  url: string;
  publicId: string;
  _id: string | number;
};

export interface Product {
  _id: string ;
  name: string;
  description: string;
  price: number;
  features?: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  images: ProductImage[];
  category: string;
}

export  interface Category {
  _id: string;
  name: string;
  description: string;
  products: Product[];
}