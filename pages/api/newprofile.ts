import { execSync, execFileSync } from 'child_process'
import type { NextApiRequest, NextApiResponse } from 'next'

interface ResponseData {
  text: string
  pwd: string
  output: string
}

export interface VPNFormData {
  profileName: string
  startDate: string
  subscriptionLength: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  console.log('req.body:', req.body)

  const pwd = execSync(process.platform === 'win32' ? 'cd' : 'pwd', {
    encoding: 'utf-8',
  })
  console.log('pwd:', pwd)

  // const output = execFileSync('./scripts/createNewProfile.sh') //TODO: test this on the server
  const output = execFileSync(
    process.platform === 'win32' ? '.\\scripts\\demo.cmd' : './scripts/demo.sh',
    [req.body.profileName, req.body.startDate, req.body.subscriptionLength],
    { encoding: 'utf-8' }
  )
  console.log('output:', output)

  res.status(200).json({
    text: "yay...! you've got 200 status code\nthis is a json response that you are supposed to get.",
    pwd,
    output,
  })
}
