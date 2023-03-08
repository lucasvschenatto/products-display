import { Product } from "@/types/product";
import { getData } from "./util";

export async function getProducts(): Promise<Product[]> {
  const productsAPI = `/api/products`;
  return getData(productsAPI);
}

export async function getProduct(id: string): Promise<Product> {
  const productAPI = `/api/products/${id}`;
  return getData(productAPI);
}
