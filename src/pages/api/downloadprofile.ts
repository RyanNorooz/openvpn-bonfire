import type { NextApiRequest, NextApiResponse } from 'next'

import stream from 'stream'
import { promisify } from 'util'
import fetch from 'node-fetch'

const pipeline = promisify(stream.pipeline)

interface ResponseData {
  output: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { author, client } = req.query
  const url = `/root/${author}/${client}.ovpn`

  res.setHeader(
    'content-disposition',
    'attachment; filename=' + `${client}.ovpn`
  )

  try {
    const response = await fetch(url) // replace this with your API call & options
    if (!response.ok)
      throw new Error(`unexpected response ${response.statusText}`)

    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', 'attachment; filename=dummy.pdf')
    await pipeline(response.body, res)
  } catch (err) {
    res.status(500).json({
      output: 'Failed...! error: \n' + String(err),
    })
  }
}
