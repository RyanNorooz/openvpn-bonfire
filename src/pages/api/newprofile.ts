import { execFileSync } from 'child_process'
import type { NextApiRequest, NextApiResponse } from 'next'

interface ResponseData {
  output: string
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
    res.status(200).json({ output })
  } catch (err) {
    console.error('createNewProfile.sh ERROR OCCURRED:', err)
    res.status(500).json({ output: 'createNewProfile.sh ERROR OCCURRED' })
  }
}
