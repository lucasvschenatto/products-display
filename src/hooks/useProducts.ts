import { Product } from "@/types/product";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useProducts() {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const productAPI = `/api/products`;
      const { data } = await axios.get(productAPI);
      return data;
    },
  });
}
