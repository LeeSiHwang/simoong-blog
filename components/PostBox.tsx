import Image from 'next/image'
import { useState, useEffect } from 'react'
import { IPost } from 'utils/types'
import Col from './Col'
import HoverEffect from './HoverEffect'

const PostBox = () => {
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch('/api/posts/get-posts')
            const data = await res.json()
            setPosts(data)
        }

        fetchPosts()
        console.log(posts)
    }, [])

    return (
        <div className='grid grid-cols-3 gap-2'>
            {posts.map((post) => (
                <div key={post.id} className='relative hover:cursor-pointer transition '>
                    <Col className='relative p-3'>
                        <Image priority src={post.thumbnail} width={500} height={500} alt={`${post.title} 관련 이미지`} className='transition-transform duration-300' />
                        <div className='post-title text-base font-bold'>{post.title}</div>
                        <HoverEffect text={post.description} />
                    </Col>
                </div>
            ))}
        </div>
    )
}

export default PostBox
