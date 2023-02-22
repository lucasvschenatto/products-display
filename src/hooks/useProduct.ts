import { Product } from "@/types/product";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useProduct(id: string) {
  return useQuery<Product>({
    queryKey: ["product", id],
    queryFn: async () => {
      const productAPI = `/api/product/${id}`;
      const { data } = await axios.get(productAPI);
      return data;
    },
  });
}
