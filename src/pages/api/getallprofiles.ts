import type { NextApiRequest, NextApiResponse } from 'next'
import { openDB } from '@/db'

interface VPNProfile {
  name: string
  startDate: Date
  subscriptionLength: number
}
type ResponseData = VPNProfile[]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  console.log('req.body:', req.body)

  const db = await openDB()
  const profiles: VPNProfile[] = await db.all('SELECT * FROM profile')

  res.status(200).json(profiles)
}
