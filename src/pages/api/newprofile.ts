import { execSync } from 'child_process'
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
    const output = execSync(
      `export MENU_OPTION="1" &&
      export CLIENT="${reqData.name}" &&
      export PASS="1" &&
      ./src/lib/headless-openvpn.sh`
    )

    execSync(`mkdir -p "/root/${reqData.author}/"`)
    execSync(`mv "/root/${reqData.name}.ovpn" "/root/${reqData.author}/"`)

    const db = await openDB()
    const sql =
      'INSERT INTO Profile (name, author, startDate, subscriptionLength) VALUES (?, ?, ?, ?)'
    await db.run(
      sql,
      reqData.name,
      reqData.author,
      reqData.startDate,
      reqData.subscriptionLength
    )

    console.log('createNewProfile headless-openvpn.sh output:', output)
    res.status(200).json({ output: output.toString() })
  } catch (err) {
    console.error('createNewProfile.sh headless-openvpn.sh ERROR:', err)
    res.status(500).json({
      output: 'createNewProfile headless-openvpn.sh ERROR: \n' + String(err),
    })
  }
}

// for (const i in [...Array(10)]) {
//   const output = execSync(
//     `export MENU_OPTION="1" &&
//     export CLIENT="ryan-${i.toString().padStart(2, '0')}" &&
//     export PASS="1" &&
//     ./src/lib/openvpn.sh`
//   )
//   console.log(output)
// }
