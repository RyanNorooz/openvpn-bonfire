import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
import stream from 'stream'
import { promisify } from 'util'
import fetch from 'node-fetch'
import { execSync } from 'child_process'

type ResponseData = Buffer | { output: string }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { client } = req.query

  const output = execSync(`
    export CLIENT="${client}"
    ./src/lib/createprofile.sh
  `)

  try {
    res.setHeader('Content-Type', 'application/ovpn')
    res.setHeader(
      'content-disposition',
      'attachment; filename=' + `${client}.ovpn`
    )
    res.send(output)
  } catch (err) {
    res.status(500).json({
      output: 'Failed...! error: \n' + String(err),
    })
  }
}
