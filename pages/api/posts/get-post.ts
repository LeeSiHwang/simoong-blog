import type { NextApiRequest, NextApiResponse } from 'next';
import { IPost } from 'utils/types';
import prisma from '../../../prisma/prisma';

export async function getPost(id: string) {
    try {
        const post = await prisma.posts.findFirst({
            where: {
                id: id
            }
        });
        return post;
    } catch (e) {
        console.error(`findOnePost function has occured an error.`);
    }
}
export default async function handler(req: NextApiRequest, res: NextApiResponse<IPost | { message: string } | null>) {
    const { id } = req.body;

    try {
        const post = await prisma.posts.findFirst({
            where: {
                id: id
            }
        });
        res.status(200).json(post);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'create-post has occured an error.' });
    }
}