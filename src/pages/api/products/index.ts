import axios from "axios";
import { Product } from "@/types/product";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[] | Error>
) {
  try {
    // Save the data to the collection
    const products = await axios
      .get<{ products: Product[] }>(
        `https://dummyjson.com/products?offset=0&limit=10`
      )
      .then((response) => response.data.products);
    // Send a response back to the client
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
