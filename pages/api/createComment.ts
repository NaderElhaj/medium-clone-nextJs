import  sanityClient  from '@sanity/client';
import type { NextApiRequest, NextApiResponse } from 'next'

const config = {
    projectId : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ,
    dataset : process.env.NEXT_PUBLIC_SANITY_DATASET || 'production' ,
    useCdn:process.env.NODE_ENV === "production",
    token: process.env.SANITY_API_TOKEN,
    apiVersion:"2021-03-25"

}
const client = sanityClient(config)

export default async function createComment(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const {_id,name,comment,email}= JSON.parse(req.body)
    try {
        await client.create(
{            _type : 'comment',
            post : {
                _type: "reference",
                _ref : _id
            },
            name,
            email,
            comment}
        )
    } catch (err) {
        return res.status(500).json({message:"Couldn't submit comment",err})
    }
  res.status(200).json({ message: 'Comment Submitted!' })

}
