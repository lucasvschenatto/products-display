import { Product } from "@/types/product";
import { getData } from "./util";

export async function getProductsFromSource(): Promise<Product[]> {
  const { products } = await getData<{ products: Product[] }>(
    `https://dummyjson.com/products?offset=0&limit=10`
  );
  return products;
}

export async function getProductFromSource(id: string): Promise<Product> {
  const product = await getData<Product>(
    `https://dummyjson.com/products/${String(id)}`
  );
  return product;
}
