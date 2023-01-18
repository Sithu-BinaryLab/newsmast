// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    // Process a POST request
    res.status(200).send("ok");
  } else {
    res.status(200).json({ message: "ok" });
    // Handle any other HTTP method
  }
}
