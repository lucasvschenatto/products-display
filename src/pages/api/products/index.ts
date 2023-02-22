import { Product } from "@/types/product";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[] | Error>
) {
  try {
    // Save the data to the collection
    const productsRes = await fetch(
      `https://dummyjson.com/products?offset=0&limit=10`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => data.products);

    if (productsRes.code) {
      throw new Error(productsRes);
    }

    // Send a response back to the client
    res.status(200).json(productsRes);
  } catch (error) {
    // If the request fails, an error will be thrown
    console.error(error);

    // Send an error response back to the client
    res
      .status(500)
      .json(new Error("An error occurred while fetching the data"));
  }
}
