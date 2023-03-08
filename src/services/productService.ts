import { Product } from "@/types/product";
import { getData } from "./util";

export async function getProducts(): Promise<Product[]> {
  const productsAPI = `${process.env.HOST ?? ""}/api/products`;
  return getData(productsAPI);
}

export async function getProduct(id: string): Promise<Product> {
  const productAPI = `${process.env.HOST ?? ""}/api/products/${id}`;
  return getData(productAPI);
}
