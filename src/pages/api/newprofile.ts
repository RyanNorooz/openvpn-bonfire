import { execFileSync } from 'child_process'
import type { NextApiRequest, NextApiResponse } from 'next'
import { openDB } from '@/db'
import type { OVPNProfile } from '@/lib/types'

interface ResponseData {
  output: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  console.log('req.body:', req.body)
  const reqData = req.body as OVPNProfile

  // const output = execFileSync('./src/scripts/createNewProfile.sh') //TODO: test this on the server
  try {
    const output = execFileSync(
      './src/scripts/createNewProfile.sh',
      [reqData.name],
      { encoding: 'utf-8' }
    )
    const db = await openDB()
    const sql =
      'INSERT INTO Profile (name, startDate, subscriptionLength) VALUES (?, ?, ?)'
    await db.run(
      sql,
      reqData.name,
      reqData.startDate,
      reqData.subscriptionLength
    )

    console.log('createNewProfile.sh OUTPUT:', output)
    res.status(200).json({ output })
  } catch (err) {
    console.error('createNewProfile.sh ERROR OCCURRED:', err)
    res
      .status(500)
      .json({ output: 'createNewProfile.sh ERROR OCCURRED: \n' + String(err) })
  }
}
