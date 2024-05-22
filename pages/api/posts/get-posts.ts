// get-posts.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../prisma/prisma';

export async function getPosts() {
    try {
        const posts = await prisma.posts.findMany({
            orderBy: {
                writtenDate: 'desc'
            },
            include: {
                category: {
                    select: {
                        category: true
                    }
                }
            }
        });
        return posts;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to fetch posts');
    }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const posts = await getPosts();
        res.status(200).json(posts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'get-posts has occurred an error.' });
    }
}
