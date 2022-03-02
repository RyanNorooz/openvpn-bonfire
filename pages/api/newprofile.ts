import { execSync, execFileSync } from 'child_process'
import type { NextApiRequest, NextApiResponse } from 'next'

interface ResponseData {
  name: string
  pwd: string
  output: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  console.log('req.body:', req.body)

  const pwd = execSync('cd', { encoding: 'utf-8' })
  console.log('pwd:', pwd)

  // const output = execFileSync('./scripts/createNewProfile.sh')
  const output = execFileSync('.\\scripts\\demo.cmd', { encoding: 'utf-8' })
  console.log('output:', output)

  res.status(200).json({
    name: "yay...! you've got 200 status code\nthis is a json response that you'll probably get.",
    pwd,
    output,
  })
}
