import { getPosts } from 'pages/api/posts/get-posts'
import { IPost } from '../utils/types'
import fs from 'fs-extra'
import path from 'path'

export class PostController {
    posts: IPost[]
    titles: Array<string>

    constructor() {}

    async fetchPosts() {
        const posts = await getPosts()
        this.posts = posts
        this.titles = posts.map((post) => post.title)
    }
    // MDX 파일을 생성하는 함수
    async generateMdxFiles(posts : IPost[]) {
        // posts 디렉토리 경로 설정
        const postsDir = path.join(process.cwd(), 'pages', 'posts')

        // posts 디렉토리 생성 (없으면 생성)
        await fs.ensureDir(postsDir)

        // 각 게시물에 대해 파일 생성
        for (const post of posts) {
            const filePath = path.join(postsDir, `${post.url}.mdx`)
            const content = `# ${post.title}\n\n${post.content}`

            // 파일이 이미 존재하는지 확인
            if (await fs.pathExists(filePath)) {
                console.log(`File ${filePath} already exists. Skipping.`)
                continue
            }

            // 파일 작성
            await fs.writeFile(filePath, content, 'utf8')
            console.log(`Generated ${filePath}`)
        }
    }

    // _meta.tsx 파일을 생성하는 함수
    async generateMetaFile(posts: IPost[]) {
        // posts 디렉토리 경로 설정
        const postsDir = path.join(process.cwd(), 'pages', 'posts')

        // _meta.tsx 파일 경로 설정
        const metaFilePath = path.join(postsDir, '_meta.tsx')

        // 메타 데이터 객체 초기화
        let metaObject: { [key: string]: string } = {}
        metaObject['posts'] = '블로그 글'
        // 메타 데이터 객체에 게시물 ID와 제목 추가
        for (const post of posts) {
            metaObject[post.url] = post.title
        }

        // _meta.tsx 파일 내용 생성
        const metaFileContent = `const postsMeta = ${JSON.stringify(metaObject, null, 2)};\n\nexport default postsMeta;`

        // _meta.tsx 파일 작성
        await fs.writeFile(metaFilePath, metaFileContent, 'utf8')
        console.log(`Generated ${metaFilePath}`)
    }

    async generatePostFiles() {
        await this.fetchPosts()
        await this.generateMdxFiles(this.posts)
        await this.generateMetaFile(this.posts)
    }
}

