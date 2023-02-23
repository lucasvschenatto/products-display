import { Product } from "@/types/product";
import axios, { AxiosError } from "axios";

export async function getProducts(): Promise<Product[]> {
  const productAPI = `${process.env.HOST ?? ""}/api/products`;
  try {
    const { data } = await axios.get(productAPI);
    return data;
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      throw {
        message: axiosError.message,
        code: parseInt(axiosError.code ?? "500"),
      };
    }
    throw { message: "Something wrong happened", code: 500 };
  }
}

export async function getProduct(id: string): Promise<Product> {
  const productAPI = `${process.env.HOST ?? ""}/api/products/${id}`;
  try {
    const { data } = await axios.get(productAPI);
    return data;
  } catch (error) {
    console.log(error);
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      throw {
        message: axiosError.message,
        code: parseInt(axiosError.code ?? "500"),
      };
    }
    throw { message: "Something wrong happened", code: 500 };
  }
}
