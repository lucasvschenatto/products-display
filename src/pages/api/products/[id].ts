import { Product } from "@/types/product";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product | Error>
) {
  try {
    // Fetch a product by id
    const productRes = await fetch(
      `https://dummyjson.com/products/${String(req.query.id)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => response.json());

    if (productRes.code) {
      throw new Error(productRes);
    }

    // Send a response back to the client
    res.status(200).json(productRes);
  } catch (error) {
    // If the request fails, an error will be thrown
    console.error(error);
    // Send an error response back to the client
    res
      .status(500)
      .json(new Error("An error occurred while fetching the data"));
  }
}
