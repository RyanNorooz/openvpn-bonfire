import { execFileSync } from 'child_process'
import type { NextApiRequest, NextApiResponse } from 'next'

interface ResponseData {
  output?: string
  err?: unknown
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  console.log('req.body:', req.body)

  // const output = execFileSync('./src/scripts/createNewProfile.sh') //TODO: test this on the server
  try {
    const output = execFileSync(
      './src/scripts/createNewProfile.sh',
      [req.body.name, req.body.startDate, req.body.subscriptionLength],
      { encoding: 'utf-8' }
    )

    console.log('createNewProfile.sh OUTPUT:', output)
    return res.status(200).json({ output })
  } catch (err) {
    return res.status(200).json({ err })
  }
}
