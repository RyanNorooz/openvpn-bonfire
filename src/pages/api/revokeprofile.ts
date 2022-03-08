import type { NextApiRequest, NextApiResponse } from 'next'

interface ResponseData {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  console.log('req.body:', req.body)
  res.status(200).json({
    name: "yay...! you've got 200 status code\nthis is a json response that you'll probably get.",
  })
}
