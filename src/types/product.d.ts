export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: rating;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type PropsWithProduct = {
  product: Product;
};
