import { Product } from "@/types/product";
import { NextApiRequest, NextApiResponse } from "next";
import { getProductsFromSource } from "@/services";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[] | Error>
) {
  try {
    const products = await getProductsFromSource();
    res.status(200).json(products);
  } catch (error) {
    // If the request fails, an error will be thrown
    console.error(error);

    // Send an error response back to the client
    res
      .status(500)
      .json(new Error("An error occurred while fetching the data"));
  }
}
