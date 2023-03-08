import { Product } from "@/types/product";
import { NextApiRequest, NextApiResponse } from "next";
import { getProductFromSource } from "@/services";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product | Error>
) {
  try {
    const product = await getProductFromSource(String(req.query.id));
    res.status(200).json(product);
  } catch (error) {
    // If the request fails, an error will be thrown
    console.error(error);
    // Send an error response back to the client
    res
      .status(500)
      .json(new Error("An error occurred while fetching the data"));
  }
}
