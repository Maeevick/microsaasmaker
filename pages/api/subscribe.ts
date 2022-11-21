import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // TODO
  // console.log('req.body', req.body)
  res.status(200).json({ message: 'ok'})
}
