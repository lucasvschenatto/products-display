import { getProduct } from "@/services/productService";
import { Product } from "@/types/product";
import { useQuery } from "@tanstack/react-query";

export function useProduct(id: string) {
  return useQuery<Product, { code: number; message: string }>({
    queryKey: ["product", id],
    queryFn: async () => getProduct(id),
  });
}
