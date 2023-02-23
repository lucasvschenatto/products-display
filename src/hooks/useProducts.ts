import { getProducts } from "@/services/productService";
import { Product } from "@/types/product";
import { useQuery } from "@tanstack/react-query";

export function useProducts() {
  return useQuery<Product[], { code: number; message: string }>({
    queryKey: ["products"],
    queryFn: getProducts,
  });
}
